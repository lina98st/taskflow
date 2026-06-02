export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Navbar */}
      <section className="flex items-center justify-between p-8">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex rounded-md items-center justify-center text-white text-sm bg-[#5b6ef5]">
            T
          </div>
          <div className="font-medium text-[#e8eaf6]">Taskflow</div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-[#6b7a99]">Sign in</button>
          <button className="text-sm px-4 rounded-lg py-2 text-white bg-[#5b6ef5]">
            Get started →
          </button>
        </div>
      </section>
      {/* Hero section */}
      <section className="p-24 text-center items-center flex flex-col">
        <div className="rounded-full flex items-center gap-2 px-4 py-1 mb-8 text-[#6b7a99] text-xs border border-[#1e2d4a]">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          v1.0 · live
        </div>
        <h1 className="text-4xl font-medium text-[#e8eaf6] mb-4">
          Ship faster.
          <br />
          <span className="text-[#7b8cff]">Track everything</span>
        </h1>
        <p className="text-sm max-w-md mb-10 text-[#6b7a99]">
          A focused task dashboard for tracking and managing your daily work.
          Secure auth, real-time data, zero bloat.
        </p>
        <div className="flex items-center gap-3">
          <button className="bg-[#5b6ef5] text-white text-sm px-6 py-3 rounded-lg">
            Open the dashboard →
          </button>
          <button className="border border-[#1e2d4a] text-[#e8eaf6] text-sm px-6 py-3 rounded-lg">
            Sign in
          </button>
        </div>
      </section>
      {/* Feature cards */}
      <section className="grid grid-cols-3 border-t border-[#1e2d4a]">
        <div className="p-8 border-r border-[#1e2d4a]">
          <div className="w-8 h-8 rounded-lg bg-[#1a2540] flex items-center justify-center mb-3">
            🔒
          </div>
          <p className="text-sm font-medium text-[#e8eaf6] mb-1">
            Secure by default
          </p>
          <p className="text-xs text-[#6b7a99]">Auth with session handling</p>
        </div>
        <div className="p-8 border-r border-[#1e2d4a]">
          <div className="w-8 h-8 rounded-lg bg-[#1a2540] flex items-center justify-center mb-3">
            ⚡
          </div>
          <p className="text-sm font-medium text-[#e8eaf6] mb-1">
            Real-time data
          </p>
          <p className="text-xs text-[#6b7a99]">Instant task updates</p>
        </div>

        <div className="p-8">
          <div className="w-8 h-8 rounded-lg bg-[#1a2540] flex items-center justify-center mb-3">
            📊
          </div>
          <p className="text-sm font-medium text-[#e8eaf6] mb-1">
            Clean metrics
          </p>
          <p className="text-xs text-[#6b7a99]">Progress at a glance</p>
        </div>
      </section>
    </div>
  );
}
