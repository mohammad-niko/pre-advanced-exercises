import { formatCurrency } from "../../util/formatCurrency";

function Cards({ info }) {
  const { bgColor, title, number, svg } = info;
  return (
    <>
      <div
        className={`relative w-70 h-41 pl-4 pt-4.5 rounded-sm flex flex-col gap-2 overflow-hidden ${bgColor}`}
      >
        <span className="text-white font-bold text-xl">{title}</span>
        <span className="text-white text-4xl font-bold pl-2">
          {title === "Revenue"
            ? `$${formatCurrency(number)}`
            : formatCurrency(number)}
        </span>
        {svg}
      </div>
    </>
  );
}

export default Cards;

formatCurrency(1250);
