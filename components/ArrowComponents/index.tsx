import { ChevronRight, ChevronLeft } from "lucide-react";

interface ArrowProps {
  onClick?: () => void;
}

export function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#A457B0] text-white p-2 rounded-full hover:bg-[#4E1B57] transition-all"
    >
      <ChevronRight size={24} />
    </div>
  );
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-[#A457B0] text-white p-2 rounded-full hover:bg-[#4E1B57] transition-all"
    >
      <ChevronLeft size={24} />
    </div>
  );
}
