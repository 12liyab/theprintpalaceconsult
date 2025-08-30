import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import quoteConsultation from '@/assets/quote-consultation.jpg';

const Pricing = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    quantity: '',
    details: '',
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    location: '',
    requestSamples: false,
    filesIncluded: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*Quote Request - The Print Palace Consult*

*PROJECT DETAILS:*
• Project Name: ${formData.projectName}
• Quantity: ${formData.quantity}
• Details: ${formData.details}

*CLIENT INFORMATION:*
• Company: ${formData.companyName || 'Not specified'}
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Location: ${formData.location || 'Not specified'}

*ADDITIONAL OPTIONS:*
• Request Samples: ${formData.requestSamples ? 'Yes' : 'No'}
• Files Ready: ${formData.filesIncluded ? 'Yes' : 'No'}

Please provide a detailed quote for this project. Thank you!`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/233244470246?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your quote request is being sent to our team.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Call Us Direct',
      value: '+233 244 470 246',
      description: 'Speak with our experts immediately'
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: 'Email Quote',
      value: 'Use the form below',
      description: 'Detailed quote within 24 hours'
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Visit Our Office',
      value: 'Accra, Ghana',
      description: 'Personal consultation available'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative mb-8">
            <img 
              src={quoteConsultation} 
              alt="Professional printing consultation" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant hover-scale transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Pricing & Ordering</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Get accurate pricing for your print projects. Our transparent pricing ensures 
                no surprises - just professional results at competitive rates.
              </p> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get Your Quote</h2>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-4 hover:shadow-card hover-scale transition-smooth group cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-smooth">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">{method.title}</h3>
                        <p className="text-primary font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Info */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg text-primary">Quick Response</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quotes delivered within 24 hours</li>
                    <li>• Free samples available on request</li>
                    <li>• Expert consultation included</li>
                    <li>• No hidden fees or charges</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calculator className="h-6 w-6 text-primary animate-pulse" />
                  <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll provide you with a detailed quote for your project.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-2" />
                      Project Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectName">Project Name *</Label>
                        <Input
                          id="projectName"
                          placeholder="e.g., Business Cards for Marketing Campaign"
                          value={formData.projectName}
                          onChange={(e) => handleInputChange('projectName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Select onValueChange={(value) => handleInputChange('quantity', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select quantity range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-50">1 - 50 pieces</SelectItem>
                            <SelectItem value="51-100">51 - 100 pieces</SelectItem>
                            <SelectItem value="101-500">101 - 500 pieces</SelectItem>
                            <SelectItem value="501-1000">501 - 1,000 pieces</SelectItem>
                            <SelectItem value="1000+">1,000+ pieces</SelectItem>
                            <SelectItem value="custom">Custom quantity</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="details">Project Details *</Label>
                      <Textarea
                        id="details"
                        placeholder="Describe your project: size, colors, paper type, finishing requirements, deadlines, etc."
                        value={formData.details}
                        onChange={(e) => handleInputChange('details', e.target.value)}
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Client Information */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground">Client Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          placeholder="Your company name"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="+233 XXX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
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

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="City, Region"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground">Additional Options</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="requestSamples"
                          checked={formData.requestSamples}
                          onCheckedChange={(checked) => handleInputChange('requestSamples', checked as boolean)}
                        />
                        <Label htmlFor="requestSamples" className="text-sm">
                          Request free samples of similar work
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="filesIncluded"
                          checked={formData.filesIncluded}
                          onCheckedChange={(checked) => handleInputChange('filesIncluded', checked as boolean)}
                        />
                        <Label htmlFor="filesIncluded" className="text-sm">
                          I have artwork files ready to submit
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full bg-gradient-accent shadow-glow hover-scale transition-smooth group">
                      <span className="group-hover:animate-pulse">Submit Quote Request</span>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-3">
                      We'll respond within 24 hours with a detailed quote and next steps.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;