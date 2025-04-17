
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

interface ReportTableProps {
  reports: Report[];
  isAdmin: boolean;
  onViewReport: (report: Report) => void;
  onDownloadReport: (reportId: string) => void;
}

const ReportTable = ({ reports, isAdmin, onViewReport, onDownloadReport }: ReportTableProps) => {
  if (reports.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reports found.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          {isAdmin && <TableHead>User</TableHead>}
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.id}</TableCell>
            <TableCell>{report.title}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                report.status === "Completed" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {report.status}
              </span>
            </TableCell>
            {isAdmin && <TableCell>{report.userId}</TableCell>}
            <TableCell>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => onViewReport(report)}>View</Button>
                <Button size="sm" onClick={() => onDownloadReport(report.id)}>Download</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReportTable;
