export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-red-600 min-h-screen">
        {children}
    </main>
  );
}