
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthRedirect = () => {
  return (
    <div className="flex-grow flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2">Authentication Required</h2>
        <p className="text-gray-600 mb-6">
          You need to be logged in to view your reports. Please sign in to access this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthRedirect;
