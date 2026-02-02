import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQListProps {
  items: FAQItem[];
}

export function FAQList({ items }: FAQListProps) {
  // Group items by category
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, FAQItem[]>,
  );

  const categories = Object.keys(groupedItems).sort();

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <h2 className="text-2xl font-bold">{category}</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {groupedItems[category].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`${category}-${index}`}
                className="border border-slate-200 rounded-2xl bg-white px-8 transition-all data-[state=open]:border-primary/30 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <span className="text-left font-bold text-lg group-data-[state=open]:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
