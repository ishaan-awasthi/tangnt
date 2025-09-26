export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-light-sub dark:text-dark-sub">Sign in to continue your tangents</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-2 bg-light-main dark:bg-dark-main text-light-bg dark:text-dark-bg rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center mt-6">
          <a href="/" className="text-light-sub dark:text-dark-sub hover:text-light-main dark:hover:text-dark-main transition-colors">
            Continue without account
          </a>
        </div>
      </div>
    </div>
  );
}
