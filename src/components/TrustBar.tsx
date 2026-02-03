import * as React from "react";
import { ShieldCheck, Users, Zap, ClipboardCheck } from "lucide-react";

const trustItems = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    label: "Fully Insured",
    description: "£10M Public Liability",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Trained Team",
    description: "CISRS & CITB Qualified",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: "Fast Install",
    description: "Rapid Site Response",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    label: "Compliant",
    description: "TG20:21 & Safety Audited",
  },
];

export function TrustBar() {
  return (
    <div className=" bg-white py-8 rounded-t-3xl border border-slate-100 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 typo-base">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
