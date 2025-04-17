
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AuthRedirect from "@/components/report/AuthRedirect";
import ReportHeader from "@/components/report/ReportHeader";
import ReportTabContent from "@/components/report/ReportTabContent";
import { useReportData } from "@/hooks/useReportData";

const Report = () => {
  const {
    isAuthenticated,
    isAdmin,
    filteredReports,
    activeReport,
    handleViewReport,
    handleCloseReport,
    handleDownloadReport
  } = useReportData();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AuthRedirect />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <ReportHeader isAdmin={isAdmin} />
      
      {/* Reports Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <ReportTabContent
                title={isAdmin ? "All User Reports" : "Your Reports"}
                description={isAdmin 
                  ? "View and manage all reports across the platform." 
                  : "View all your reports across all service categories."}
                reports={filteredReports}
                isAdmin={isAdmin}
                activeReport={activeReport}
                onViewReport={handleViewReport}
                onCloseReport={handleCloseReport}
                onDownloadReport={handleDownloadReport}
              />
            </TabsContent>
            
            <TabsContent value="technical">
              <ReportTabContent
                title="Technical Reports"
                description="View reports related to technical support and services."
                reports={filteredReports}
                isAdmin={isAdmin}
                activeReport={activeReport}
                onViewReport={handleViewReport}
                onCloseReport={handleCloseReport}
                onDownloadReport={handleDownloadReport}
                type="technical"
              />
            </TabsContent>
            
            <TabsContent value="analysis">
              <ReportTabContent
                title="Analysis Reports"
                description="View reports related to data analysis and insights."
                reports={filteredReports}
                isAdmin={isAdmin}
                activeReport={activeReport}
                onViewReport={handleViewReport}
                onCloseReport={handleCloseReport}
                onDownloadReport={handleDownloadReport}
                type="analysis"
              />
            </TabsContent>
            
            <TabsContent value="consulting">
              <ReportTabContent
                title="Consulting Reports"
                description="View reports related to consulting services and recommendations."
                reports={filteredReports}
                isAdmin={isAdmin}
                activeReport={activeReport}
                onViewReport={handleViewReport}
                onCloseReport={handleCloseReport}
                onDownloadReport={handleDownloadReport}
                type="consulting"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Report;
