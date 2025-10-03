import { createClient } from '@/utils/supabase/server'
import { ChatArea } from "@/components/ChatArea/ChatArea";
import { VisualizationArea } from "@/components/VisualizationArea/VisualizationArea";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Tangent } from '@/types/database';
import { notFound } from 'next/navigation';

interface TangentPageProps {
  params: { id: string }
}

export default async function TangentPage({ params }: TangentPageProps) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    notFound()
  }

  // Fetch the specific tangent
  const { data: tangent, error } = await supabase
    .from('tangents')
    .select('*')
    .eq('id', params.id)
    .eq('user_id', user.id)
    .single()

  if (error || !tangent) {
    notFound()
  }

  // Fetch all user's tangents for the sidebar
  const { data: tangents } = await supabase
    .from('tangents')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false })

  return (
    <div className="h-full w-full min-h-screen flex overflow-hidden bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <Sidebar user={user} />
      <div className="flex-1 flex overflow-hidden">
        <ChatArea tangents={tangents || []} currentTangent={tangent} />
        <div className="w-px bg-divider h-full" />
        <VisualizationArea tangents={tangents || []} />
      </div>
    </div>
  );
}
