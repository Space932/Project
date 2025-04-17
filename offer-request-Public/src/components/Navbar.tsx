
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        setCurrentUser(user);
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          For You
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/offers" className="font-medium hover:text-primary transition-colors">
            Offers
          </Link>
          <Link to="/request" className="font-medium hover:text-primary transition-colors">
            Request
          </Link>
          <Link to="/report" className="font-medium hover:text-primary transition-colors">
            Report
          </Link>
          
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span className="text-sm font-medium">{currentUser.name}</span>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/offers" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Offers
            </Link>
            <Link 
              to="/request" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Request
            </Link>
            <Link 
              to="/report" 
              className="font-medium hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Report
            </Link>
            <div className="pt-2">
              {currentUser ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 py-2">
                    <User size={16} />
                    <span className="text-sm font-medium">{currentUser.name}</span>
                  </div>
                  <Button variant="outline" onClick={handleLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login" onClick={toggleMenu}>Login</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
