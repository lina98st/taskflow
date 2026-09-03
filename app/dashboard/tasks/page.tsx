import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { deleteTask } from "./actions";
import SortSelect from "./SortSelect";

export default async function TasksPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; sort?: string }>;
}) {
  const { filter, sort } = await searchParams;
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "open") {
      return task.status === "TODO" || task.status === "IN_PROGRESS";
    }

    if (filter === "done") {
      return task.status === "DONE";
    }

    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "status") {
      const order = {
        TODO: 0,
        IN_PROGRESS: 1,
        DONE: 2,
      };

      return order[a.status] - order[b.status];
    }

    const aDate = a.dueDate?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const bDate = b.dueDate?.getTime() ?? Number.MAX_SAFE_INTEGER;

    return aDate - bDate;
  });

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Tasks</h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Manage and organize your tasks
          </p>
        </div>

        <Link
          href="/dashboard/tasks/new"
          className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          New task
        </Link>
      </header>

      <section
        aria-label="Task filters"
        className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <div className="flex gap-2">
          <Link href="/dashboard/tasks">
            <Button variant={!filter ? "primary" : "secondary"}>All</Button>
          </Link>

          <Link href="/dashboard/tasks?filter=open">
            <Button variant={filter === "open" ? "primary" : "secondary"}>
              Open
            </Button>
          </Link>

          <Link href="/dashboard/tasks?filter=done">
            <Button variant={filter === "done" ? "primary" : "secondary"}>
              Done
            </Button>
          </Link>
        </div>

        <div className="sm:ml-auto sm:w-44">
          <SortSelect filter={filter} sort={sort} />
        </div>
      </section>

      <section aria-label="Task list" className="space-y-3">
        {sortedTasks.length === 0 ? (
          <Card className="p-5">
            <p className="text-sm text-[var(--text-muted)]">
              No tasks yet. Create your first task.
            </p>
          </Card>
        ) : (
          sortedTasks.map((task) => (
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

                <div className="flex gap-2">
                  <Link href={`/dashboard/tasks/${task.id}/edit`}>
                    <Button variant="secondary">Edit</Button>
                  </Link>

                  <form action={deleteTask.bind(null, task.id)}>
                    <Button type="submit" variant="danger">
                      Delete
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          ))
        )}
      </section>
    </div>
  );
}
