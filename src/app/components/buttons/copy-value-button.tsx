import { toast } from "react-toastify";
import CopyIcon from "../icons/copy-icon";

export default function CopyValueButton({
  value,
}: Readonly<{ value: string }>) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Iban copied to clipboard!");
  };
  return (
    <button
      key={value}
      className="relative w-fit group cursor-pointer flex flex-row gap-2"
      onClick={() => copyToClipboard(value)}
    >
      <div className="opacity-100 group-hover:opacity-70 text-md">{value}</div>
      <CopyIcon />
    </button>
  );
}
