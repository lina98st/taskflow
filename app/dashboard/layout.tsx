import Link from "next/link";
import { CirclePlus, LayoutDashboard, ListTodo } from "lucide-react";
import Logo from "@/components/Logo";

const navigation = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/tasks",
    label: "Tasks",
    icon: ListTodo,
  },
  {
    href: "/dashboard/tasks/new",
    label: "New task",
    icon: CirclePlus,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] lg:flex">
      <aside className="border-b border-[var(--border)] bg-[var(--bg-surface)] p-4 lg:min-h-screen lg:w-64 lg:border-r lg:border-b-0">
        <div className="mb-6">
          <Logo href="/dashboard" />
        </div>

        <nav aria-label="Dashboard navigation">
          <ul className="flex gap-2 overflow-x-auto lg:flex-col">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--bg-card)]"
                  >
                    <Icon aria-hidden="true" size={18} strokeWidth={2} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">{children}</main>
    </div>
  );
}
