import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Send, Check } from "lucide-react";

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
  phoneText = "020 8XXX XXXX",
  id,
}: CTAProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwvqwbel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id={id} className="bg-primary text-white py-24">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8">
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
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-foreground">
            <h3 className="typo-2xl font-bold mb-2">Request a Quote</h3>
            <p className="text-muted-foreground mb-8 typo-base">
              Fill out the form below and we'll get back to you within 2 hours.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    placeholder="020 8XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Service Required
                  </Label>
                  <Input
                    id="service"
                    name="service"
                    required
                    placeholder="e.g. Domestic"
                    value={formData.service}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Project Details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-14 rounded-full font-bold typo-base transition-all shadow-lg flex items-center justify-center gap-2 group ${
                  isSuccess
                    ? "bg-green-600 hover:bg-green-700 shadow-green-200"
                    : "bg-primary hover:bg-primary/90 shadow-primary/20"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    {buttonText}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
