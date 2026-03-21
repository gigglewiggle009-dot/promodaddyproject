import { SharedFooter } from "../SharedFooter";
import { SharedHeader } from "../SharedHeader";

export const SharedLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};
