import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Phone, Send, Check, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    projectType: "",
    serviceType: "",
    duration: "",
    startDate: undefined as Date | undefined,
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Simple validation for required fields
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.projectType) newErrors.projectType = "Required";
    if (!formData.serviceType) newErrors.serviceType = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const dataToSubmit = {
        ...formData,
        startDate: formData.startDate
          ? format(formData.startDate, "yyyy-MM-dd")
          : "",
      };

      const response = await fetch("https://formspree.io/f/xwvqwbel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          serviceType: "",
          duration: "",
          startDate: undefined,
          address: "",
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

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section id={id} className="bg-primary text-white py-24">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8 sticky top-8">
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
          <div className="bg-white rounded-3xl p-8 lg:p-10 text-foreground">
            <h3 className="typo-2xl font-bold mb-2">Request a Quote</h3>
            <p className="text-muted-foreground mb-8 typo-base">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.name ? "border-red-500" : ""}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.email ? "border-red-500" : ""}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    required
                    placeholder="020 XXXX XXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.phone ? "border-red-500" : ""}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Project Address *
                  </Label>
                  <Input
                    id="address"
                    required
                    placeholder="e.g. SW1A 1AA"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className={`h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 ${errors.address ? "border-red-500" : ""}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="projectType"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Project Type *
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleChange("projectType", value)
                    }
                  >
                    <SelectTrigger
                      className={`h-12 rounded-xl border-slate-200 ${errors.projectType ? "border-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="domestic">Domestic</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="heritage">Heritage</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="serviceType"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Service Required *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      handleChange("serviceType", value)
                    }
                  >
                    <SelectTrigger
                      className={`h-12 rounded-xl border-slate-200 ${errors.serviceType ? "border-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supply-erect">
                        Supply & Erect
                      </SelectItem>
                      <SelectItem value="hire-only">Hire Only</SelectItem>
                      <SelectItem value="temp-roof">Temporary Roof</SelectItem>
                      <SelectItem value="design">Scaffold Design</SelectItem>
                      <SelectItem value="inspection">Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="duration"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Approx. Duration
                  </Label>
                  <Input
                    id="duration"
                    placeholder="e.g. 4 weeks"
                    value={formData.duration}
                    onChange={(e) => handleChange("duration", e.target.value)}
                    className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="startDate"
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Start Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal h-12 rounded-xl border-slate-200",
                          !formData.startDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.startDate ? (
                          format(formData.startDate, "PP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.startDate}
                        onSelect={(date) => handleChange("startDate", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Project Details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-[100px] rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-14 rounded-full font-bold typo-base text-white transition-all flex items-center justify-center gap-2 group `}
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
