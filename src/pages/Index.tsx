import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Palette, Truck, Shield, Zap, Users } from 'lucide-react';
import printShowcase from '@/assets/print-showcase.jpg';
import teamCollaboration from '@/assets/team-collaboration.jpg';

const Index = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-primary icon-bounce" />,
      title: "Custom Design",
      description: "From business cards to large format banners - we bring your vision to life with precision and creativity."
    },
    {
      icon: <FileText className="h-8 w-8 text-secondary icon-bounce" />,
      title: "Digital & Offset Printing",
      description: "High-quality lithographic, offset, and digital printing solutions for all your business needs."
    },
    {
      icon: <Truck className="h-8 w-8 text-accent icon-bounce" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality. We understand deadlines matter."
    },
    {
      icon: <Shield className="h-8 w-8 text-highlight icon-bounce" />,
      title: "Quality Guarantee",
      description: "Highest standard possible with every project. Your satisfaction is our commitment."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10K+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
                If You Can{' '}
                <span className="gradient-text">
                  Imagine It
                </span>
                , We Can Print It!
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Transform your ideas into reality with Ghana's leading printing consultants. 
                From concept to completion, we deliver exceptional print solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button size="lg" variant="secondary" asChild className="shadow-glow button-hover">
                  <Link to="/pricing">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-background text-background hover:bg-background hover:text-primary button-hover">
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="lg:block animate-fade-in">
              <img 
                src={printShowcase} 
                alt="Professional printing services showcase" 
                className="w-full rounded-2xl shadow-elegant hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-scale group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-pulse">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose The Print Palace Consult?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with years of expertise to deliver printing solutions that make your business stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 interactive-card bg-gradient-card border-muted group">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-highlight mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of satisfied clients who trust us with their printing needs. 
            Get your custom quote in minutes and see why we're Ghana's preferred print partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="button-hover">
              <Link to="/pricing">Request Quote Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary button-hover">
              <Link to="/help">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Users className="h-8 w-8 text-primary mr-3 icon-bounce" />
                <h3 className="text-2xl font-bold text-foreground">Trusted by Businesses Across Ghana</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                "You can trust us for your printing projects... we have a fruitful business relationship with many clients in Ghana and beyond."
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover-scale cursor-pointer">Lithographic Printing</div>
                <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover-scale cursor-pointer">Digital Solutions</div>
                <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover-scale cursor-pointer">Outdoor Advertising</div>
                <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover-scale cursor-pointer">Custom Design</div>
                <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover-scale cursor-pointer">Screen Printing</div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={teamCollaboration} 
                alt="Professional team collaboration in printing services" 
                className="w-full rounded-2xl shadow-elegant hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;