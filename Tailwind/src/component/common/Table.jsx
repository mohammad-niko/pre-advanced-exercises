import { statusColor } from "@/util/statusColor";
import { AddUserDialog } from "./AddUserDialog";
import UserAction from "./UserAction";

function Table() {
  const tableData = [
    {
      name: "Mohammd",
      email: "mohammad@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Dennis",
      email: "dennis@gmail.com",
      role: "Editor",
      status: "Pending",
    },
    {
      name: "Sarah",
      email: "sarah@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      name: "Karen",
      email: "karen@gmail.com",
      role: "Support",
      status: "Inactive",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-between h-10 px-4 py-7.5 items-center bg-[#fefefe] inset-shadow-sm rounded-sm ">
        <span className="font-bold text-lg">Recent User</span>
        <AddUserDialog />
      </div>
      <table className="w-full bg-[rgba(254,254,254)] ">
        <thead className="bg-[#f3f3f6]">
          <tr>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Role</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-2 py-1"></th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map(({ name, email, role, status }) => (
              <tr
                key={email}
                className="bg-[#fefefe] inset-shadow-sm rounded-sm"
              >
                <th className="text-left py-2 px-4">{name}</th>
                <td className="text-left py-2 px-4">{email}</td>
                <td className="text-left py-2 px-4">{role}</td>
                <td className="text-left py-2 px-4">
                  <span
                    className={`${statusColor(
                      status
                    )} text-white py-1 px-2 rounded-sm text-sm`}
                  >
                    {status}
                  </span>
                </td>
                <td className="flex justify-end py-2 px-4">
                  <UserAction status={status} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
