
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReportTable from "./ReportTable";
import ReportDetails from "./ReportDetails";

interface Report {
  id: string;
  title: string;
  date: string;
  status: string;
  summary: string;
  details: string;
  type: string;
  userId: string;
}

interface ReportTabContentProps {
  title: string;
  description: string;
  reports: Report[];
  isAdmin: boolean;
  activeReport: Report | null;
  onViewReport: (report: Report) => void;
  onCloseReport: () => void;
  onDownloadReport: (reportId: string) => void;
  type?: string;
}

const ReportTabContent = ({ 
  title, 
  description, 
  reports, 
  isAdmin, 
  activeReport, 
  onViewReport, 
  onCloseReport, 
  onDownloadReport,
  type 
}: ReportTabContentProps) => {
  // Filter reports by type if provided
  const filteredReports = type ? reports.filter(r => r.type === type) : reports;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ReportTable 
            reports={filteredReports} 
            isAdmin={isAdmin} 
            onViewReport={onViewReport} 
            onDownloadReport={onDownloadReport} 
          />
        </CardContent>
      </Card>
      
      {activeReport && (
        <ReportDetails 
          report={activeReport} 
          isAdmin={isAdmin} 
          onClose={onCloseReport} 
          onDownload={onDownloadReport} 
        />
      )}
    </div>
  );
};

export default ReportTabContent;
