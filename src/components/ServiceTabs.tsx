import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

export const ServiceTabs = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || "");

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for navbar + tabs height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  // Handle active tab highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Find active section
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const tab of tabs) {
        const element = document.getElementById(tab.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(tab.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  return (
    <div
      id="service-tabs"
      className="sticky top-14.5 z-40 bg-white border-b border-gray-200 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-center gap-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "py-4 text-base font-medium border-b-2 transition-all duration-300 whitespace-nowrap outline-none",
                activeTab === tab.id
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
