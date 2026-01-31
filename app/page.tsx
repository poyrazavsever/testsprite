import SignupForm from "@/components/SignupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 mb-2">
          TestSprite Demo
        </h1>
        <p className="text-gray-600 text-lg">
          Otomatik Test ve Bug Fix Senaryosu
        </p>
      </div>

      <SignupForm />
    </main>
  );
}