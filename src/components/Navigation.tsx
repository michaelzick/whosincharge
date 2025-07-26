import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { BookOpen, Grid3X3, Heart, Info } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Heart className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">
            Who's In Charge?
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-2">
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
          <Link to="/parts-info">
            <Button
              variant={location.pathname === "/parts-info" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Parts Info
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

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu" className="text-2xl">🔮</Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden space-y-2 pt-14">
            <SheetClose asChild>
              <Link to="/">
                <Button
                  variant={location.pathname === "/" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Grid3X3 className="h-4 w-4" />
                  Parts Board
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/parts-info">
                <Button
                  variant={location.pathname === "/parts-info" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Info className="h-4 w-4" />
                  Parts Info
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/journal">
                <Button
                  variant={location.pathname === "/journal" ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <BookOpen className="h-4 w-4" />
                  Journal Entries
                </Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
