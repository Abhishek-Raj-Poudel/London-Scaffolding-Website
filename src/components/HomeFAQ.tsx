import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to set up scaffolding?",
    answer:
      "The installation time depends on the project size. A typical domestic setup for a house front usually takes 3-6 hours. Larger commercial projects are scheduled across multiple days according to the site plan.",
  },
  {
    question: "Do you handle local council permits?",
    answer:
      "Yes, we handle the entire application process for pavement licenses and street permits with all London boroughs, ensuring full legal compliance before any equipment arrives on site.",
  },
  {
    question: "Are you fully insured for scaffolding work?",
    answer:
      "Absolutely. We hold comprehensive public liability insurance up to £10 million, along with employer's liability insurance. Safety and protection are our top priorities.",
  },
  {
    question: "Do you offer emergency scaffolding services?",
    answer:
      "Yes, we provide 24/7 rapid response for structural stabilization, storm damage, or urgent access requirements across all areas of London.",
  },
];

export function HomeFAQ() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left side: Info */}
      <div className="space-y-8 sticky top-32">
        <div className="space-y-6">
          <h2 className="typo-4xl leading-tight">
            Commonly Asked <br /> Questions & Answers
          </h2>
          <p className="typo-lg text-muted-foreground leading-relaxed max-w-md">
            Everything you need to know about our professional scaffolding
            services, safety protocols, and regional coverage.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-100 rounded-3xl space-y-4">
          <h4 className="font-bold typo-base">Still have questions?</h4>
          <p className="text-muted-foreground text-sm">
            Our team is available 24/7 to provide expert advice on your specific
            project needs.
          </p>
          <a
            href="#quote"
            className="inline-block text-primary font-bold hover:underline"
          >
            Contact Expert Support →
          </a>
        </div>
      </div>

      {/* Right side: Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-slate-200 rounded-2xl bg-white px-8 transition-all data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="hover:no-underline py-6 group">
              <span className="text-left font-bold typo-xl group-data-[state=open]:text-primary transition-colors">
                {faq.question}
              </span>
              {/* <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 group-data-[state=open]:bg-primary group-data-[state=open]:text-white group-data-[state=open]:border-primary transition-all">
                <Plus className="w-4 h-4 block group-data-[state=open]:hidden" />
                <Minus className="w-4 h-4 hidden group-data-[state=open]:block" />
              </div> */}
            </AccordionTrigger>
            <AccordionContent className="pb-6 typo-base text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
