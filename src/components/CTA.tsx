import { Phone } from "lucide-react";
import { QuoteForm } from "./QuoteForm";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  phoneText?: string;
  id?: string;
}

export const CTA = ({
  title = "Ready to start your project?",
  description = "Contact us today for a free, no-obligation scaffolding quote in London.",
  buttonText = "Get a Free Quote",
  phoneText = "020 7060 4460",
  id,
}: CTAProps) => {
  return (
    <section id={id} className="bg-primary text-white py-24">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-8">
            <div className="flex flex-col gap-6">
              <h2 className="typo-4xl leading-tight">{title}</h2>
              <p className="typo-xl text-white/90 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="typo-base font-semibold text-white/80">
                OR CALL US DIRECTLY
              </p>
              <a
                href={`tel:${phoneText.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 typo-2xl font-bold hover:text-white/80 transition-colors w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                {phoneText}
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available 24/7 for Emergencies
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl pt-0 mt-0 text-foreground">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
