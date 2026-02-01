import { Building2, Users2, Trophy, Clock } from "lucide-react";

const stats = [
  {
    icon: <Building2 className="w-6 h-6" />,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    value: "50+",
    label: "Expert Team Members",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "24/7",
    label: "Support Available",
  },
];

export function StatsSection() {
  return (
    <div className="py-12 bg-primary text-white">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                {stat.icon}
              </div>
              <span className="typo-4xl font-bold">{stat.value}</span>
              <span className="typo-base text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
