import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when requesting quotes or services",
        "Contact details including name, email, phone number, and address",
        "Business information and printing requirements",
        "Website usage data and preferences",
        "Communication records and project specifications"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide printing services and process your orders",
        "To communicate about projects and delivery status",
        "To send quotes, invoices, and service updates",
        "To improve our services and customer experience",
        "To comply with legal and regulatory requirements"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Information Protection",
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted and stored securely",
        "Access is limited to authorized personnel only",
        "We regularly update our security protocols",
        "Payment information is processed through secure channels"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to correct or update your data",
        "Right to request deletion of your information",
        "Right to opt-out of marketing communications",
        "Right to data portability and transparency"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto mb-6 p-4 rounded-full bg-background/10 w-fit">
            <Shield className="h-12 w-12 text-background" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Privacy <span className="gradient-text-light">Policy</span>
          </h1>
          <p className="text-xl text-background/90 max-w-3xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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

          {/* Additional Information */}
          <Card className="mt-8 interactive-card bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                Contact Us About Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
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
                    href="https://wa.me/233244470246?text=Hello! I have a question about your Privacy Policy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-smooth"
                  >
                    WhatsApp Message
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;