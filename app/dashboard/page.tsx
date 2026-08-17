import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function DashboardPage() {
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
          <p className="mt-4 text-3xl font-semibold text-white">0</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">All tasks</p>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-medium text-white">Open</p>
          <p className="mt-4 text-3xl font-semibold text-[var(--accent-light)]">
            0
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Todo and in progress
          </p>
        </Card>

        <Card className="p-6">
          <p className="text-sm font-medium text-white">Done</p>
          <p className="mt-4 text-3xl font-semibold text-[var(--success)]">0</p>
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

        <Card>
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-[var(--text-muted)]"
            />

            <p className="flex-1 text-sm font-medium text-white">
              Example task
            </p>

            <Badge>Todo</Badge>

            <time className="text-sm text-[var(--text-muted)]">June 1</time>
          </div>
        </Card>
      </section>
    </div>
  );
}
