import { createClient } from '@/utils/supabase/server'
import { ChatArea } from "@/components/ChatArea/ChatArea";
import { VisualizationArea } from "@/components/VisualizationArea/VisualizationArea";
import { Tangent } from '@/types/database';

export default async function Home() {
  const supabase = await createClient()

  // Get the current user
  const { data: { user } } = await supabase.auth.getUser()

  // Fetch user's tangents (only if authenticated)
  const { data: tangents, error } = user 
    ? await supabase
        .from('tangents')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
    : { data: [], error: null }

  return (
    <div className="flex-1 flex overflow-hidden">
      <ChatArea tangents={tangents || []} />
      <div className="w-px bg-divider h-full" />
      <VisualizationArea tangents={tangents || []} />
    </div>
  );
}
