import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function UserStatusDropdown({ status }) {
  const statuses = ["active", "pending", "inactive"];

  return (
    <>
      {statuses.map((item) => (
        <DropdownMenuItem
          key={item}
          disabled={item.toLowerCase() === status.toLowerCase()}
          className="flex items-center justify-between capitalize"
        >
          {item}
          {item.toLowerCase() === status.toLowerCase() && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </DropdownMenuItem>
      ))}
    </>
  );
}
