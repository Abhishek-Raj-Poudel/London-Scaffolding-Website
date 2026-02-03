import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const services = [
  {
    title: "Domestic Scaffolding",
    href: "/services/domestic-scaffolding-london",
    description: "Safe and reliable scaffolding for homeowners across London.",
  },
  {
    title: "Commercial Scaffolding",
    href: "/services/commercial-scaffolding-london",
    description:
      "Professional scaffolding solutions for large-scale developments.",
  },
  {
    title: "Temporary Roofs",
    href: "/services/temporary-roof-scaffolding",
    description: "Weather protection systems to keep your project dry.",
  },
  {
    title: "Tube & Fitting",
    href: "/services/tube-and-fitting-scaffolding",
    description: "Versatile scaffolding for complex and historic structures.",
  },
  {
    title: "Scaffold Inspections",
    href: "/services/scaffold-inspections",
    description: "Independent safety audits and compliance reporting.",
  },
  {
    title: "Edge Protection",
    href: "/services/edge-protection",
    description: "Fall prevention systems for roofs and leading edges.",
  },
  {
    title: "Loading Bays",
    href: "/services/scaffolding-loading-bays",
    description: "Heavy-duty platforms for efficient material handling.",
  },
  {
    title: "Emergency Scaffolding",
    href: "/services/emergency-scaffolding",
    description: "24/7 rapid response for structural stabilization.",
  },
];

const areas = [
  {
    title: "North London",
    href: "/areas/north-london-scaffolding",
    description: "Serving Barnet, Enfield, Haringey, and surrounding areas.",
  },
  {
    title: "South London",
    href: "/areas/south-london-scaffolding",
    description: "Reliable scaffolding for Croydon, Bromley, and Southwark.",
  },
  {
    title: "East London",
    href: "/areas/east-london-scaffolding",
    description: "Expert solutions for Hackney, Newham, and Tower Hamlets.",
  },
  {
    title: "West London",
    href: "/areas/west-london-scaffolding",
    description: "Quality access for Brent, Ealing, and Hammersmith.",
  },
  {
    title: "Central London",
    href: "/areas/central-london-scaffolding",
    description:
      "Professional scaffolding in the heart of the City and West End.",
  },
  {
    title: "All Areas",
    href: "/areas-we-cover",
    description:
      "View our comprehensive coverage across all 32 London boroughs.",
  },
];

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description:
      "Stay updated with the latest scaffolding industry news and tips.",
  },
  {
    title: "Guides",
    href: "/guides",
    description:
      "Comprehensive safety and project planning guides for our clients.",
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Find answers to commonly asked questions about our services.",
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/#services", subItems: services },
  { title: "Areas We Cover", href: "/areas-we-cover", subItems: areas },
  { title: "Projects", href: "/projects" },
  { title: "Resources", href: "/#resources", subItems: resources },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

interface NavbarProps {
  logoUrl: string;
}

export function Navbar({ logoUrl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white border-slate-200 py-2 "
          : "bg-primary border-primary/10 py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="shrink-0">
          <a
            href="/"
            className={cn(
              "text-xl font-bold tracking-tighter transition-colors duration-300",
              isScrolled ? "text-primary" : "text-white",
            )}
          >
            <img
              src={logoUrl}
              alt="Logo"
              className={cn("h-10", isScrolled ? "" : "brightness-0 invert")}
              loading="lazy"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex grow justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Areas We Cover Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  Areas We Cover
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {areas.map((area) => (
                      <ListItem
                        key={area.title}
                        title={area.title}
                        href={area.href}
                      >
                        {area.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        {resource.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Projects Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 transition-colors duration-300",
                    isScrolled
                      ? "text-slate-900"
                      : "text-white hover:text-white",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Get a Quote & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className={cn(
              "rounded-full shadow-none px-4 py-5 md:px-6 border-2 font-bold transition-all duration-300 text-sm md:text-base",
              isScrolled
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white text-white bg-primary hover:bg-white hover:text-primary",
            )}
            variant="outline"
          >
            <a href="/quote">Get a Quote</a>
          </Button>

          {/* Mobile Menu Sheet */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "transition-colors duration-300 h-10 w-10",
                    isScrolled
                      ? "text-primary hover:bg-slate-100"
                      : "text-white hover:bg-white/10",
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left border-b pb-6 mb-6">
                  <SheetTitle className="text-2xl font-bold tracking-tighter text-primary">
                    LONDON SCAFFOLDING
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
                  {navLinks.map((link) => (
                    <div key={link.title} className="flex flex-col gap-3">
                      <a
                        href={link.href}
                        className="text-lg font-bold hover:text-primary transition-colors flex items-center justify-between"
                      >
                        {link.title}
                      </a>
                      {link.subItems && (
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100">
                          {link.subItems.slice(0, 5).map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.href}
                              className="text-sm text-slate-600 hover:text-primary transition-colors"
                            >
                              {sub.title}
                            </a>
                          ))}
                          {link.subItems.length > 5 && (
                            <a
                              href={link.href}
                              className="text-sm font-semibold text-primary"
                            >
                              View All →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8 border-t">
                  <Button
                    asChild
                    className="w-full rounded-xl py-6 text-lg font-bold"
                  >
                    <a href="/quote">Request a Free Quote</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
