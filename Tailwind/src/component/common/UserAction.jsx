import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { UserStatusDropdown } from "./UserStatusDropdown";
import DeleteUserAlertDialog from "./DeleteUserAlertDialog";
import { useState } from "react";

function UserAction({ status }) {
      const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="right">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>View details</DropdownMenuItem>
        <DropdownMenuItem>Change role</DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Change status</DropdownMenuSubTrigger>
          <DropdownMenuSubContent side="right">
            <UserStatusDropdown status={status} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        {/* Trigger AlertDialog via state */}
        <DropdownMenuItem
          className="text-red-600 data-highlighted:bg-red-100 data-highlighted:text-red-700"
          onSelect={() => setShowDeleteDialog(true)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DeleteUserAlertDialog open={showDeleteDialog} handleClose={setShowDeleteDialog}/>
        </>
  );
}

export default UserAction;
