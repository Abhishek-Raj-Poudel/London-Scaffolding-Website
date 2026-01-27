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
  { title: "North London", href: "/areas/north-london-scaffolding" },
  { title: "South London", href: "/areas/south-london-scaffolding" },
  { title: "East London", href: "/areas/east-london-scaffolding" },
  { title: "West London", href: "/areas/west-london-scaffolding" },
  { title: "Central London", href: "/areas/central-london-scaffolding" },
  { title: "All Areas", href: "/areas-we-cover" },
];

const resources = [
  { title: "Blog", href: "/blog" },
  { title: "Guides", href: "/guides" },
  { title: "FAQs", href: "/faqs" },
];

export function Navbar() {
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
          ? "bg-white border-slate-200 py-2 shadow-sm"
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
            LONDON
            <span
              className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white/90",
              )}
            >
              SCAFFOLDING
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex grow justify-center">
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
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px]">
                    {areas.map((area) => (
                      <ListItem
                        key={area.title}
                        title={area.title}
                        href={area.href}
                      />
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
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
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

        {/* Right: Get a Quote */}
        <div className="shrink-0">
          <Button
            asChild
            className={cn(
              "rounded-full shadow-none px-6 py-5 border-2 font-bold transition-all duration-300",
              isScrolled
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white text-white hover:bg-white hover:text-primary",
            )}
            variant="outline"
          >
            <a href="/quote">Get a Quote</a>
          </Button>
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
