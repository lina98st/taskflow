export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-lg font-medium text-[#e8eaf6] mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a2540] border border-[#1e2d4a] rounded-xl p-5">
          <p className="text-xs text-[#a0aec0] mb-2">Total tasks</p>
          <p className="text-2xl font-medium text-[#e8eaf6]">0</p>
          <p className="text-xs text-[#a0aec0] mt-1">all time</p>
        </div>
        <div className="bg-[#1a2540] border border-[#1e2d4a] rounded-xl p-5">
          <p className="text-xs text-[#a0aec0] mb-2">Open</p>
          <p className="text-2xl font-medium text-[#38bdf8]">0</p>
          <p className="text-xs text-[#a0aec0] mt-1">in progress or todo</p>
        </div>
        <div className="bg-[#1a2540] border border-[#1e2d4a] rounded-xl p-5">
          <p className="text-xs text-[#a0aec0] mb-2">Done</p>
          <p className="text-2xl font-medium text-green-400">0</p>
          <p className="text-xs text-[#a0aec0] mt-1">completed</p>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-medium text-[#a0aec0] mb-4">
          Recent tasks
        </h2>

        <div className="flex flex-col gap-2">
          <div className="bg-[#1a2540] border border-[#1e2d4a] rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#a0aec0]"></span>
            <p className="text-sm text-[#e8eaf6] flex-1">Example task</p>
            <span className="text-xs text-[#a0aec0] bg-[#0f1629] px-2 py-1 rounded-md">
              todo
            </span>
            <p className="text-xs text-[#a0aec0]">Jun 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
