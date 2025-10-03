import { LoginForm } from '@/components/Auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <LoginForm />
    </div>
  );
}
