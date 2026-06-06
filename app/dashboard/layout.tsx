export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f1629] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#0d1829] border-r border-[#1e2d4a] min-h-screen flex flex-col p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-7 h-7 flex rounded-md items-center justify-center text-white text-sm bg-[#5b6ef5]">
            T
          </div>
          <div className="font-medium text-[#e8eaf6]">Taskflow</div>
        </div>
        <nav className="flex flex-col gap-1">
          <a
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#6b7a99] hover:text-[#e8eaf6] hover:bg-[#1a2540]"
          >
            Dashboard
          </a>
          <a
            href="/dashboard/tasks"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#6b7a99] hover:text-[#e8eaf6] hover:bg-[#1a2540]"
          >
            Tasks
          </a>
          <a
            href="/dashboard/tasks/new"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#6b7a99] hover:text-[#e8eaf6] hover:bg-[#1a2540]"
          >
            New task
          </a>
        </nav>
      </aside>
      {/* Main context */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
