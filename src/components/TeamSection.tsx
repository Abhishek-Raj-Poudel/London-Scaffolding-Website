import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "James Wilson",
    role: "Site Manager",
    image: "/images/team/member1.png",
    bio: "Over 20 years of experience in managing complex scaffolding projects across London.",
    linkedin: "#",
  },
  {
    name: "Sarah Thompson",
    role: "Safety Officer",
    image: "/images/team/member2.png",
    bio: "Ensuring the highest safety standards and compliance on every single site.",
    linkedin: "#",
  },
  {
    name: "David Miller",
    role: "Senior Scaffolder",
    image: "/images/team/member3.png",
    bio: "Expert in bespoke structures and heritage building access solutions.",
    linkedin: "#",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="wrapper">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <h2 className="typo-4xl">Meet Our Expert Team</h2>
          <p className="typo-xl text-muted-foreground">
            The dedicated professionals behind our safe and reliable scaffolding
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group bg-transparent border-slate-200 h-full flex flex-col shadow-none pb-0"
            >
              <CardHeader className=" px-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 mb-5 object-cover object-top transition-all duration-500 rounded-md"
                />
                <CardTitle className="typo-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium tracking-wide uppercase text-sm mt-1">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent className="px-8 grow pb-8">
                <p className="typo-base text-muted-foreground line-clamp-3 mb-6">
                  {member.bio}
                </p>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
