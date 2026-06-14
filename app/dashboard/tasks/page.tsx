export default function TasksPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-medium text-[#e8eaf6]">Tasks</h1>
        <button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white text-sm px-4 py-2 rounded-lg transition-colors">
          + New task
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <button className="text-xs px-3 py-1.5 rounded-full bg-[#38bdf8] text-white">
          All
        </button>
        <button className="text-xs px-3 py-1.5 rounded-full border border-[#1e2d4a] text-[#a0aec0] hover:text-[#e8eaf6]">
          Open
        </button>
        <button className="text-xs px-3 py-1.5 rounded-full border border-[#1e2d4a] text-[#a0aec0] hover:text-[#e8eaf6]">
          Done
        </button>
        <div className="flex-1"></div>
        <select className="text-xs bg-[#1a2540] border border-[#1e2d4a] text-[#a0aec0] px-3 py-1.5 rounded-lg outline-none">
          <option>Sort by date</option>
          <option>Sort by status</option>
        </select>
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-2">
        <div className="bg-[#1a2540] border border-[#1e2d4a] rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#a0aec0]"></span>
          <p className="text-sm text-[#e8eaf6] flex-1">Example task</p>
          <span className="text-xs text-[#a0aec0] bg-[#0f1629] px-2 py-1 rounded-md">
            todo
          </span>
          <p className="text-xs text-[#a0aec0]">Jun 1</p>
          <button className="text-xs text-[#a0aec0] hover:text-[#e8eaf6]">
            Edit
          </button>
          <button className="text-xs text-red-400 hover:text-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
