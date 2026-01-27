import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="wrapper max-w-4xl">
        <h2 className="typo-3xl mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl bg-background px-4"
            >
              <AccordionTrigger className="typo-base font-semibold py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="typo-base text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
