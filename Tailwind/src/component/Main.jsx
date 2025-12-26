import Cards from "../Lib/Cards";
import Table from "../Lib/Table";

function Main() {
  return (
    <div className="ml-65 bg-[rgba(234, 233, 238)]">
      <div className="center-flex gap-6 mt-10 p-8 ">
        <Cards />
      </div>
      <div className="p-5 mt-10">
        <Table />
      </div>
      <div className="my-15 flex justify-center">
        <button className="p-3 bg-sky-600 text-white rounded-sm">Open Modle</button>
      </div>
    </div>
  );
}

export default Main;
