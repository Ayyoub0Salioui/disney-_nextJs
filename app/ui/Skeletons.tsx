import { ReactElement, ReactNode } from "react";

export default function CategorySkeleton() {
  return (
    <div className="pt-2">
      <div className="bg-blue-200 w-2 h-1"></div>
      <div className="bg-blue-200 w-8 h-4 rounded-sm"></div>
    </div>
  );
}
