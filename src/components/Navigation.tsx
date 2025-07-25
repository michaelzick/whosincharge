import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Grid3X3, Heart } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Heart className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">
            Who's In Charge?
          </h1>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              Parts Board
            </Button>
          </Link>
          <Link to="/journal">
            <Button 
              variant={location.pathname === "/journal" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Journal Entries
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};