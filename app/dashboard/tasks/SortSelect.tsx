"use client";

import { useRouter } from "next/navigation";
import Select from "@/components/ui/Select";

type SortSelectProps = {
  filter?: string;
  sort?: string;
};

export default function SortSelect({ filter, sort }: SortSelectProps) {
  const router = useRouter();

  function handleChange(value: string) {
    const params = new URLSearchParams();

    if (filter) {
      params.set("filter", filter);
    }

    params.set("sort", value);

    router.push(`/dashboard/tasks?${params.toString()}`);
  }

  return (
    <Select
      aria-label="Sort tasks"
      value={sort ?? "date"}
      onChange={(event) => handleChange(event.target.value)}
    >
      <option value="date">Sort by date</option>
      <option value="status">Sort by status</option>
    </Select>
  );
}
