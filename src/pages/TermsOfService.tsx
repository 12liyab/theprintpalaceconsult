import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Gavel, CreditCard, Truck, AlertCircle, Phone, Mail } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Services Provided",
      content: [
        "Digital and offset printing services for various materials",
        "Design consultation and artwork preparation",
        "Large format printing and signage solutions",
        "Binding, finishing, and packaging services",
        "Rush orders and express delivery options"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Terms",
      content: [
        "Payment is due upon completion unless credit terms are arranged",
        "We accept cash, bank transfers, and mobile money payments",
        "50% deposit may be required for large orders",
        "Prices are subject to change based on material costs",
        "Late payment fees may apply to overdue accounts"
      ]
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Delivery & Completion",
      content: [
        "Delivery times are estimates and may vary based on order complexity",
        "Rush orders available at additional cost",
        "Delivery within Accra and surrounding areas",
        "Customer pickup available at our facility",
        "Force majeure events may affect delivery schedules"
      ]
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Quality & Returns",
      content: [
        "We guarantee quality printing according to industry standards",
        "Proofs must be approved before final production",
        "Returns accepted only for production errors on our part",
        "Customer approval of proofs releases us from design liability",
        "Reprints at our cost for verified production errors"
      ]
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Liability & Limitations",
      content: [
        "Our liability is limited to the cost of the printing service",
        "We are not responsible for delays caused by customer changes",
        "Copyright compliance is the customer's responsibility",
        "We retain the right to refuse inappropriate content",
        "Disputes will be resolved through mediation or Ghanaian courts"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto mb-6 p-4 rounded-full bg-background/10 w-fit">
            <Gavel className="h-12 w-12 text-background" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Terms of <span className="gradient-text-light">Service</span>
          </h1>
          <p className="text-xl text-background/90 max-w-3xl mx-auto mb-4">
            Please read these terms carefully before using our printing services. By engaging our services, you agree to these terms.
          </p>
          <p className="text-sm text-background/75">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="interactive-card bg-gradient-card hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="mt-8 interactive-card bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                Questions About Terms?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service or need clarification on any aspect of our services, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href="tel:+233244470246" 
                    className="text-primary hover:text-primary/80 transition-smooth"
                  >
                    +233 244 470 246
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a 
                    href="https://wa.me/233244470246?text=Hello! I have a question about your Terms of Service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-smooth"
                  >
                    WhatsApp Message
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                The Print Palace Consult Limited reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;