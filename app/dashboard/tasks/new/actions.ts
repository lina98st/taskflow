"use server";

import { redirect } from "next/navigation";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { TaskStatus } from "@/app/generated/prisma/client";

export async function createTask(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const statusValue = String(formData.get("status") ?? "todo");
  const dueDateValue = String(formData.get("dueDate") ?? "");

  if (!title) {
    throw new Error("Title is required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const statusMap: Record<string, TaskStatus> = {
    todo: TaskStatus.TODO,
    "in-progress": TaskStatus.IN_PROGRESS,
    done: TaskStatus.DONE,
  };

  await prisma.task.create({
    data: {
      title,
      description: description || null,
      status: statusMap[statusValue] ?? TaskStatus.TODO,
      dueDate: dueDateValue ? new Date(dueDateValue) : null,
      userId: user.id,
    },
  });

  redirect("/dashboard/tasks");
}