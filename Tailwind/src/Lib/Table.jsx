function Table() {
  return (
    <div>
      <div className="w-full flex justify-between h-10 px-4 py-7.5 items-center bg-[#fefefe] inset-shadow-sm rounded-sm ">
        <span className="font-bold text-lg">Recent User</span>
        <button className="center-flex bg-sky-500 pl-2 pr-1 py-2 rounded-sm text-white font-bold">
          Add User
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3.5 mt-0.5 ml-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <table className="w-full bg-[rgba(254,254,254)] border-separate ">
        <thead className="bg-[#f3f3f6]">
          <tr>
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Role</th>
            <th className="text-left px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#fefefe] inset-shadow-sm rounded-sm">
            <th className="text-left py-2 px-4">Mohammd</th>
            <td className="text-left py-2 px-4">mohammad@gmail.com</td>
            <td className="text-left py-2 px-4">Admin</td>
            <td className="text-left py-2 px-4">
              <span className="bg-green-600 text-white py-1 px-2 rounded-sm text-sm">
                Active
              </span>
            </td>
          </tr>

          <tr className="bg-[#fefefe] inset-shadow-sm rounded-sm">
            <th className="text-left py-2 px-4">Dennis</th>
            <td className="text-left py-2 px-4">dennis@gmail.com</td>
            <td className="text-left py-2 px-4">Editor</td>
            <td className="text-left py-2 px-4">
              <span className="bg-yellow-400 text-white py-1 px-2 rounded-sm text-sm">
                Pending
              </span>
            </td>
          </tr>

          <tr className="bg-[#fefefe] inset-shadow-sm rounded-sm">
            <th className="text-left py-2 px-4">Sarah</th>
            <td className="text-left py-2 px-4">sarah@gmail.com</td>
            <td className="text-left py-2 px-4">User</td>
            <td className="text-left py-2 px-4">
              <span className="bg-green-600 text-white py-1 px-2 rounded-sm text-sm">
                Active
              </span>
            </td>
          </tr>

          <tr className="bg-[#fefefe] inset-shadow-sm rounded-sm">
            <th className="text-left py-2 px-4">Karen</th>
            <td className="text-left py-2 px-4">karen@gmail.com</td>
            <td className="text-left py-2 px-4">Support</td>
            <td className="text-left py-2 px-4">
              <span className="bg-slate-700 text-white py-1 px-2 rounded-sm text-sm">
                Inactive
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
