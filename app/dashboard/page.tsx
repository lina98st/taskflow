import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      tasks: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const tasks = user?.tasks ?? [];

  const totalTasks = tasks.length;
  const openTasks = tasks.filter(
    (task) => task.status === "TODO" || task.status === "IN_PROGRESS",
  ).length;
  const doneTasks = tasks.filter((task) => task.status === "DONE").length;

  const recentTasks = tasks.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Overview of your current tasks
        </p>
      </header>

      <section
        aria-label="Task statistics"
        className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Card className="p-6">
          <p className="text-sm font-medium text-white">Total tasks</p>
          <p className="mt-4 text-3xl font-semibold text-white">{totalTasks}</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">All tasks</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-medium text-white">Open</p>
          <p className="mt-4 text-3xl font-semibold text-[var(--accent-light)]">
            {openTasks}
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Todo and in progress
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-medium text-white">Done</p>
          <p className="mt-4 text-3xl font-semibold text-[var(--success)]">
            {doneTasks}
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Completed tasks
          </p>
        </Card>
      </section>

      <section aria-labelledby="recent-tasks-heading">
        <h2
          id="recent-tasks-heading"
          className="mb-4 text-lg font-semibold text-white"
        >
          Recent tasks
        </h2>

        <div className="space-y-3">
          {recentTasks.length === 0 ? (
            <Card className="p-5">
              <p className="text-sm text-[var(--text-muted)]">
                No recent tasks yet.
              </p>
            </Card>
          ) : (
            recentTasks.map((task) => (
              <Card key={task.id}>
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]"
                  />

                  <p className="flex-1 text-sm font-medium text-white">
                    {task.title}
                  </p>

                  <Badge>
                    {task.status === "IN_PROGRESS"
                      ? "In progress"
                      : task.status === "DONE"
                        ? "Done"
                        : "Todo"}
                  </Badge>

                  {task.dueDate && (
                    <time className="text-sm text-[var(--text-muted)]">
                      {task.dueDate.toLocaleDateString("en-GB")}
                    </time>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
