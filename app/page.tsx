import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 flex items-center">
        <Image src="/aetherlogo.png" alt="Logo" width={150} height={50} />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex gap-4 px-4 pb-4">
        <div className="w-1/3 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Memory</h2>
        </div>

        <div className="w-1/3 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Chatbox</h2>
        </div>

        <div className="w-1/3 bg-gray-800 rounded-lg flex flex-col p-4">
          <div className="bg-gray-600 rounded-lg p-4 flex-1">
            <h2 className="text-xl font-bold mb-4">Next Actions</h2>
          </div>
          <div className="bg-gray-600 rounded-lg p-4 mt-4 flex-1">
            <h2 className="text-xl font-bold mb-4">Daily Wisdom</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
