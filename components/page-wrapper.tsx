export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col gap-6 p-6 md:gap-8 md:p-8">
      {children}
    </main>
  );
}
