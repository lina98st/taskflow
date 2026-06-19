export default function NewTaskPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-lg font-medium text-[#e8eaf6] mb-6">New task</h1>

      <div className="mb-4">
        <label className="text-xs text-[#a0aec0] block mb-2">Title</label>
        <input
          type="text"
          placeholder="Task title..."
          className="w-full bg-[#1a2540] border border-[#1e2d4a] rounded-lg px-3 py-2 text-sm text-[#e8eaf6] placeholder-[#6b7a99] outline-none focus:border-[#38bdf8]"
        />
      </div>

      <div className="mb-4">
        <label className="text-xs text-[#a0aec0] block mb-2">Description</label>
        <textarea
          placeholder="Optional description..."
          rows={3}
          className="w-full bg-[#1a2540] border border-[#1e2d4a] rounded-lg px-3 py-2 text-sm text-[#e8eaf6] placeholder-[#6b7a99] outline-none focus:border-[#38bdf8] resize-none"
        />
      </div>

      <div className="mb-4">
        <label className="text-xs text-[#a0aec0] block mb-2">Status</label>
        <select className="w-full bg-[#1a2540] border border-[#1e2d4a] rounded-lg px-3 py-2 text-sm text-[#e8eaf6] outline-none focus:border-[#38bdf8]">
          <option>Todo</option>
          <option>In progress</option>
          <option>Done</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="text-xs text-[#a0aec0] block mb-2">Due date</label>
        <input
          type="date"
          className="w-full bg-[#1a2540] border border-[#1e2d4a] rounded-lg px-3 py-2 text-sm text-[#e8eaf6] outline-none focus:border-[#38bdf8]"
        />
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-[#38bdf8] hover:bg-[#0ea5e9] text-white text-sm py-2 rounded-lg transition-colors">
          Create task
        </button>
        <button className="px-4 py-2 border border-[#1e2d4a] text-[#a0aec0] text-sm rounded-lg hover:border-[#2a3a5c] transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
