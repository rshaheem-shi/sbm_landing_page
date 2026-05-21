import { Phone, Mail, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GOLD, WA_LINK, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

const formSchema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  phone:   z.string().min(10, "Enter a valid phone number"),
  email:   z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", email: "", company: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const subject = encodeURIComponent(`SBM-Pranav Investment Inquiry — ${values.name}`);
    const body = encodeURIComponent(
      `New investor inquiry from the SBM-Pranav landing page:\n\n` +
      `Name: ${values.name}\n` +
      `Phone: ${values.phone}\n` +
      `Email: ${values.email}\n` +
      `Company: ${values.company || "—"}\n` +
      `Message:\n${values.message || "—"}`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank", "noopener");
    toast({
      title: "Opening Email Client",
      description: "Your details are pre-filled — just hit Send.",
    });
    form.reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-14 md:py-20 bg-card relative">
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-primary/6 blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20">

          {/* Left column — contact info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div
              className="inline-flex items-center space-x-2 font-bold uppercase tracking-widest text-xs mb-4"
              style={{ color: GOLD }}
              aria-hidden="true"
            >
              <div className="w-2 h-2" style={{ background: GOLD }} />
              <span>Limited Opportunity</span>
            </div>
            <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Your Investor Consultation
            </h2>
            <p className="text-muted-foreground font-light text-sm mb-7 leading-relaxed">
              Discuss acquisition, zoning details, and regional development plans directly with our
              executive team.
            </p>

            <address className="not-italic space-y-5">
              <div className="flex items-center">
                <div
                  className="w-10 h-10 bg-background border border-border flex items-center justify-center mr-3 shrink-0"
                  style={{ color: GOLD }}
                  aria-hidden="true"
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Direct Line</div>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="text-foreground font-serif text-base hover:text-primary transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="w-10 h-10 bg-background border border-border flex items-center justify-center mr-3 shrink-0"
                  style={{ color: GOLD }}
                  aria-hidden="true"
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Email Inquiries</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-foreground font-serif text-base hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3 bg-background border border-border p-7 shadow-md relative">
            <div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-500"
              aria-hidden="true"
            />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                aria-label="Investor consultation request form"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">
                          Full Name <span aria-hidden="true">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            autoComplete="name"
                            className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">
                          Phone Number <span aria-hidden="true">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91"
                            autoComplete="tel"
                            className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">
                          Email Address <span aria-hidden="true">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            autoComplete="email"
                            className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">
                          Company <span className="font-normal normal-case">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Corp"
                            autoComplete="organization"
                            className="bg-transparent border-border focus-visible:border-primary h-10 rounded-none text-foreground"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground uppercase tracking-widest text-[10px]">
                        Additional Details
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          className="bg-transparent border-border focus-visible:border-primary text-foreground min-h-[80px] rounded-none resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-sm font-bold rounded-none"
                  >
                    Request Consultation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white h-11 text-sm font-bold rounded-none bg-transparent transition-colors"
                    onClick={() => window.open(WA_LINK, "_blank", "noopener,noreferrer")}
                    aria-label="Connect on WhatsApp — opens in new tab"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" aria-hidden="true" /> WhatsApp
                  </Button>
                </div>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
