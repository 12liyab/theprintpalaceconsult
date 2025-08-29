import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, FileText, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    urgent: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello TPPC Team,

*Project Inquiry*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Category: ${formData.category}
Subject: ${formData.subject}

Message: ${formData.message}

Please get back to me at your earliest convenience.

Thank you!`;
    
    const whatsappURL = `https://wa.me/233244470246?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your message has been prepared. Complete the process in WhatsApp.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactOptions = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Call Us",
      value: "+233 244 470 246",
      description: "Speak with our experts directly",
      available: "Mon-Fri, 8AM-6PM GMT",
      action: "tel:+233244470246"
    },
    {
      icon: <Mail className="h-8 w-8 text-secondary" />,
      title: "Email Support",
      value: "Use contact form below",
      description: "Detailed written responses",
      available: "24/7 - Response within 24 hours",
      action: "#contact-form"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Visit Our Office",
      value: "Accra, Ghana",
      description: "In-person consultation",
      available: "Mon-Fri, 8AM-5PM",
      action: null
    }
  ];

  const quickHelp = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "File Preparation Guide",
      description: "Learn how to prepare your artwork files for optimal printing results.",
      action: "/guidelines"
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-secondary" />,
      title: "Frequently Asked Questions", 
      description: "Find quick answers to common printing questions.",
      action: "/faq"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-accent" />,
      title: "Get a Quote",
      description: "Request detailed pricing for your specific printing project.",
      action: "/pricing"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the support you need for your printing projects. Our expert team is here to help 
            with technical questions, project guidance, and any challenges you may face.
          </p>
        </div>

        {/* Contact Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to reach our expert support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 rounded-full bg-muted/50">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-primary">{option.value}</p>
                  <p className="text-muted-foreground">{option.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{option.available}</span>
                  </div>
                  {option.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild={option.action.startsWith('/')}
                    >
                      {option.action.startsWith('/') ? (
                        <a href={option.action}>Contact Now</a>
                      ) : (
                        <a href={option.action}>Call Now</a>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Help */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Help</h2>
            <p className="text-lg text-muted-foreground">
              Self-service resources to get you started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickHelp.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-smooth group cursor-pointer">
                <a href={item.action} className="block">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-smooth">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="max-w-3xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>Send Us a Message</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our team will respond within 24 hours. 
                For urgent matters, please call us directly.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+233 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Quote Request</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="order-status">Order Status</SelectItem>
                        <SelectItem value="file-help">File Preparation Help</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry. Include project specifications, deadlines, or any specific requirements."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="space-y-4">
                  <Button type="submit" size="lg" className="w-full bg-gradient-cmyk shadow-magenta hover:shadow-cyan transition-all duration-300">
                    Send via WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours. For urgent matters, please call{' '}
                    <a href="tel:+233244470246" className="text-primary hover:underline">
                      +233 244 470 246
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* FTP Information */}
        <section className="mt-16">
          <Card className="bg-muted/30 border-dashed border-2 border-muted">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Large File Delivery</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                For large files that can't be emailed, we provide secure FTP access. 
                After placing your order, we'll send you FTP credentials for easy file upload.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-background rounded-lg">
                  <strong className="text-primary">FTP Address:</strong><br />
                  <span className="text-muted-foreground">Provided after order</span>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <strong className="text-secondary">Username:</strong><br />
                  <span className="text-muted-foreground">Unique per project</span>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <strong className="text-accent">Password:</strong><br />
                  <span className="text-muted-foreground">Secure & temporary</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Help;