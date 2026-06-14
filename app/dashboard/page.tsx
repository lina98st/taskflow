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
    </div>
  );
}
