//shadcn coponents:
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectComponent from "./SelectComponent";
import { notifySuccess } from "@/lib/toast";

export function AddUserDialog() {
  const selectData = [
    {
      name: "Active",
    },
    {
      name: "Pending",
    },
    {
      name: "Inactive",
    },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("mm");
            notifySuccess("User Added Success fully");
          }}
        >
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription>
            Enter the details below to create a new user account.
          </DialogDescription>
        </DialogHeader>
          <div className="grid gap-4 mb-5">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">email</Label>
              <Input id="email-1" name="email" placeholder="email@gmail.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="role-1">Role</Label>
              <Input id="role-1" name="role" placeholder="role" />
            </div>
            <div className="grid gap-3">
              <SelectComponent
                info={selectData}
                labelInfo={{ id: "status-1", title: "Status" }}
                style={"w-full"}
              />
            </div>
          </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="submit">Add User</Button>
          </DialogClose>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
