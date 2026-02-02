"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Calendar as CalendarIcon, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    serviceType: "",
    duration: "",
    startDate: undefined as Date | undefined,
    address: "",
    details: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.projectType)
      newErrors.projectType = "Please select a project type";
    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type";
    if (!formData.address.trim())
      newErrors.address = "Project address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Prepare data for submission - formatting date
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
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          serviceType: "",
          duration: "",
          startDate: undefined,
          address: "",
          details: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const data = await response.json();
        setErrors({
          submit: data.error || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      setErrors({
        submit: "Failed to connect to the server. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-slate-50 border-b p-8">
        <CardTitle className="typo-3xl">Request a Quote</CardTitle>
        <CardDescription className="typo-base mt-2">
          Tell us about your project requirements and we'll provide a detailed
          quote.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`h-12 md:h-14 text-base rounded-xl ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`h-12 md:h-14 text-base rounded-xl ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="020 XXXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`h-12 md:h-14 text-base rounded-xl ${errors.phone ? "border-red-500" : ""}`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Project Address/Postcode *</Label>
                <Input
                  id="address"
                  placeholder="e.g. SW1A 1AA"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className={`h-12 md:h-14 text-base rounded-xl ${errors.address ? "border-red-500" : ""}`}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">{errors.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b pb-2">
              Project Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => handleChange("projectType", value)}
                >
                  <SelectTrigger
                    className={`h-12 md:h-14 text-base rounded-xl ${errors.projectType ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">
                      Domestic / Residential
                    </SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="heritage">
                      Heritage / Restoration
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="text-sm text-red-500">{errors.projectType}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Required *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => handleChange("serviceType", value)}
                >
                  <SelectTrigger
                    className={`h-12 md:h-14 text-base rounded-xl ${errors.serviceType ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supply-erect">Supply & Erect</SelectItem>
                    <SelectItem value="hire-only">Hire Only</SelectItem>
                    <SelectItem value="temp-roof">Temporary Roof</SelectItem>
                    <SelectItem value="design">Scaffold Design</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-sm text-red-500">{errors.serviceType}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Approx. Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g. 4 weeks"
                  value={formData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                  className="h-12 md:h-14 text-base rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label>Desired Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal h-12 md:h-14 text-base rounded-xl",
                        !formData.startDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? (
                        format(formData.startDate, "PHP")
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

            <div className="space-y-2 mt-4">
              <Label htmlFor="details">Additional Project Details</Label>
              <Textarea
                id="details"
                placeholder="Please describe any specific requirements, access restrictions, or dimensions..."
                rows={5}
                value={formData.details}
                onChange={(e) => handleChange("details", e.target.value)}
                className="resize-y"
              />
            </div>
          </div>

          {submitSuccess && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="text-green-800 font-bold">Quote Request Sent!</p>
                <p className="text-green-700 text-sm">
                  We'll review your details and get back to you shortly.
                </p>
              </div>
            </div>
          )}

          {errors.submit && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">{errors.submit}</p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/25 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting Request..."
            ) : (
              <>
                Get My Free Quote
                <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
