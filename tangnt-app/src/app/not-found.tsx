import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4"></h1>
        <p className="text-xl font-light mb-8 text-light-sub dark:text-dark-sub">
        404 - there's nothing here to see :(
        </p>
        <Link 
          href="/" 
          className="text-base font-light hover:no-underline transition-all duration-200 text-light-main dark:text-dark-main hover:text-light-sub dark:hover:text-dark-sub"
        >
            <span className="underline">take me home</span><span> :)</span>
        </Link>
      </div>
    </div>
  );
}
