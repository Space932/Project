
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Mock data - would be fetched from a database in a real application
const mockReports = [
  {
    id: "REP-001",
    title: "Technical Support Report",
    date: "2025-03-15",
    status: "Completed",
    summary: "Issue with server configuration resolved.",
    details: "The server was experiencing connectivity issues due to a misconfigured firewall rule. Our team identified the issue and implemented the necessary changes to restore normal functionality.",
    type: "technical",
    userId: "user1@example.com"
  },
  {
    id: "REP-002",
    title: "Data Analysis Report",
    date: "2025-03-10",
    status: "Completed",
    summary: "Monthly performance metrics analyzed.",
    details: "This report provides an analysis of your business performance metrics for the past month. Key findings include a 15% increase in customer engagement and a 7% improvement in conversion rates compared to the previous month.",
    type: "analysis",
    userId: "admin@example.com"
  },
  {
    id: "REP-003",
    title: "Consulting Recommendations",
    date: "2025-03-05",
    status: "Completed",
    summary: "Strategic recommendations for Q2 2025.",
    details: "Based on our comprehensive assessment of your business operations and market conditions, we've developed strategic recommendations to help you achieve your objectives for Q2 2025. These include optimizing your marketing channels, streamlining customer onboarding, and exploring new partnership opportunities.",
    type: "consulting",
    userId: "user1@example.com"
  },
  {
    id: "REP-004",
    title: "Ongoing Technical Issue",
    date: "2025-03-18",
    status: "In Progress",
    summary: "Investigation of intermittent network issues.",
    details: "Our team is currently investigating reported intermittent network connectivity issues. Initial findings suggest potential router configuration problems. We're conducting further tests and will provide updates as more information becomes available.",
    type: "technical",
    userId: "admin@example.com"
  }
];

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

interface User {
  name: string;
  email: string;
}

export const useReportData = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [reports] = useState<Report[]>(mockReports);
  const [filteredReports, setFilteredReports] = useState<Report[]>(mockReports);
  const [activeReport, setActiveReport] = useState<Report | null>(null);
  
  const { toast } = useToast();

  // Check if user is logged in and determine if they're an admin
  useEffect(() => {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        setCurrentUser(user);
        setIsAuthenticated(true);
        
        // Simple check for admin (you might want to implement a proper role-based system)
        setIsAdmin(user.email === "admin@example.com");
        
        // Filter reports based on user role
        if (user.email === "admin@example.com") {
          // Admin sees all reports
          setFilteredReports(reports);
        } else {
          // Regular users only see their own reports
          setFilteredReports(reports.filter(report => report.userId === user.email));
        }
      } catch (e) {
        console.error("Error parsing user data:", e);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [reports]);

  const handleViewReport = (report: Report) => {
    setActiveReport(report);
  };

  const handleCloseReport = () => {
    setActiveReport(null);
  };

  const handleDownloadReport = (reportId: string) => {
    toast({
      title: "Download Started",
      description: `Report ${reportId} is downloading...`,
    });
    // In a real app, this would trigger a file download
  };

  return {
    isAuthenticated,
    isAdmin,
    currentUser,
    filteredReports,
    activeReport,
    handleViewReport,
    handleCloseReport,
    handleDownloadReport
  };
};
