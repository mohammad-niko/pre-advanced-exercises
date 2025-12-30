//shadcn coponents:
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectComponent({ info, labelInfo, style }) {
  return (
    <>
      {labelInfo && <Label htmlFor={labelInfo?.id}>{labelInfo?.title}</Label>}
      <Select id={labelInfo && labelInfo?.id}>
        <SelectTrigger className={style}>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {info.map(({ name }, index) => (
            <SelectItem key={index} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectComponent;
