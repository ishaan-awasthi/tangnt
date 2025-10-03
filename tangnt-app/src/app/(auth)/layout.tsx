import { Sidebar } from "@/components/Sidebar/Sidebar";
import { createClient } from '@/utils/supabase/server';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="h-full w-full min-h-screen flex overflow-hidden bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
} 