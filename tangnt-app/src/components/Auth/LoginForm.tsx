"use client";
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [accountType, setAccountType] = useState('Alpha Tester');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const accountTypes = [
    'Alpha Tester',
    'Beta User', 
    'Early Adopter',
    'Developer',
    'Researcher',
    'Student'
  ];

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/');
      router.refresh();
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
          account_type: accountType,
        }
      }
    });

    if (error) {
      setError(error.message);
    } else {
      setError('Check your email for the confirmation link!');
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {isSignUp ? 'Join tangnt.app' : 'Welcome Back'}
        </h1>
        <p className="text-light-sub dark:text-dark-sub">
          {isSignUp ? 'Create your account to start your tangents' : 'Sign in to continue your tangents'}
        </p>
      </div>
      
      <form className="space-y-4">
        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
              placeholder="Your name"
              required={isSignUp}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
            placeholder="••••••••"
            required
          />
        </div>

        {isSignUp && (
          <div>
            <label className="block text-sm font-medium mb-2">Account Type</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full px-3 py-2 border border-light-divider dark:border-dark-divider rounded-lg bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main focus:outline-none focus:ring-2 focus:ring-light-main dark:focus:ring-dark-main"
            >
              {accountTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}
        
        <div className="space-y-2">
          <button 
            type="button"
            onClick={isSignUp ? handleSignUp : handleSignIn}
            disabled={loading}
            className="w-full py-2 bg-light-main dark:bg-dark-main text-light-bg dark:text-dark-bg rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors disabled:opacity-50"
          >
            {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Create Account' : 'Sign In')}
          </button>
          
          <button 
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            disabled={loading}
            className="w-full py-2 border border-light-main dark:border-dark-main text-light-main dark:text-dark-main rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors disabled:opacity-50"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <a href="/demo" className="text-light-sub dark:text-dark-sub hover:text-light-main dark:hover:text-dark-main transition-colors">
          Continue without account
        </a>
      </div>
    </div>
  );
}
