export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">tangnt.app</h1>
        <p className="text-light-sub dark:text-dark-sub text-lg mb-8">go off on a tangent and find your way back</p>
        <div className="space-x-4">
          <a href="/login" className="px-6 py-2 bg-light-main dark:bg-dark-main text-light-bg dark:text-dark-bg rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors">
            Login
          </a>
          <a href="/" className="px-6 py-2 border border-light-main dark:border-dark-main text-light-main dark:text-dark-main rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors">
            Try Demo
          </a>
        </div>
      </div>
    </div>
  );
}
