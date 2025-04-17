
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

interface ReportDetailsProps {
  report: Report;
  isAdmin: boolean;
  onClose: () => void;
  onDownload: (reportId: string) => void;
}

const ReportDetails = ({ report, isAdmin, onClose, onDownload }: ReportDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{report.title}</CardTitle>
            <CardDescription>
              Report ID: {report.id} | Date: {report.date}
              {isAdmin && <span> | User: {report.userId}</span>}
            </CardDescription>
          </div>
          <Button size="sm" variant="ghost" onClick={onClose}>Close</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Summary</h4>
            <p className="mt-1">{report.summary}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Details</h4>
            <p className="mt-1">{report.details}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => onDownload(report.id)}>Download Report</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportDetails;
