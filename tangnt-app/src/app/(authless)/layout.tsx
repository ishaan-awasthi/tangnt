import "@/styles/globals.css";

export default function AuthlessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-main dark:text-dark-main">
          {children}
        </div>
      </body>
    </html>
  );
} 