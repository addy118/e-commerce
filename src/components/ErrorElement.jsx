export default function ErrorPage() {
  return (
    <div className="flex-4 flex h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-red-500">Page not found!</h1>
      <h3 className="text-red-400">Please check the address and try again</h3>
    </div>
  );
}
