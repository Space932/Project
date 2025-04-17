
import { ReactNode } from "react";

interface ReportHeaderProps {
  isAdmin: boolean;
  children?: ReactNode;
}

const ReportHeader = ({ isAdmin, children }: ReportHeaderProps) => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {isAdmin ? "All Reports" : "Your Reports"}
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          {isAdmin 
            ? "Access and manage all reports from users across the platform." 
            : "Access and review all reports and documents related to your services."}
        </p>
        {isAdmin && (
          <div className="mt-4 text-sm bg-blue-700 inline-block px-3 py-1 rounded-full">
            Admin Access
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default ReportHeader;
