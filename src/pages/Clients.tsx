import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Handshake, Star, Phone, FileText, Truck, MessageCircle, ArrowRight } from 'lucide-react';

const Clients = () => {
  const partners = [
    {
      name: "Ashesi University",
      logo: "/lovable-uploads/ashesi.png",
      category: "Education",
      description: "Leading private university in Ghana focused on innovation and excellence in education.",
      services: ["Academic Materials", "Event Branding", "Digital Printing"]
    },
    {
      name: "Thenovus Solutions",
      logo: "/lovable-uploads/novus.png",
      category: "Technology",
      description: "Innovative technology solutions provider specializing in digital transformation.",
      services: ["Corporate Branding", "Marketing Materials", "Large Format Printing"]
    },
    {
      name: "EmpowerAbility Organization",
      logo: "/lovable-uploads/empowerAbility_LogoRound.png",
      category: "Non-Profit",
      description: "Organization dedicated to empowering individuals with disabilities through various programs.",
      services: ["Awareness Campaigns", "Educational Materials", "Community Outreach Materials"]
    },
    {
      name: "Axes Human Capital",
      logo: "/lovable-uploads/AXIS.jpg",
      category: "Human Capital",
      description: "A leading human capital solutions provider focused on talent development and organizational growth.",
      services: ["Talent Acquisition", "Training & Development", "HR Consulting"]
    }
  ];

  const testimonials = [
    {
      company: "Ashesi University",
      quote: "The Print Palace Consult has been our trusted partner for all printing needs. Their quality and reliability are unmatched.",
      author: "Academic Affairs Department"
    },
    {
      company: "Local Business Network",
      quote: "Professional service, quick turnaround, and excellent quality. They understand our business needs perfectly.",
      author: "Business Development Manager"
    },
    {
      company: "Government Agency",
      quote: "Consistent quality and timely delivery. The Print Palace Consult has never let us down on any project.",
      author: "Communications Director"
    }
  ];

  const clientStats = [
    { icon: <Building className="h-8 w-8" />, number: "200+", label: "Corporate Clients" },
    { icon: <Users className="h-8 w-8" />, number: "50+", label: "Educational Partners" },
    { icon: <Handshake className="h-8 w-8" />, number: "98%", label: "Client Retention" },
    { icon: <Star className="h-8 w-8" />, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-0 sm:px-4 lg:px-8 bg-gradient-hero text-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
            Our Valued <span className="gradient-text-light">Clients & Partners</span>
          </h1>
          <p className="text-base sm:text-xl text-background/90 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in">
            We're proud to work with leading organizations across Ghana, delivering exceptional printing solutions that help them achieve their goals.
          </p>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center group hover-scale cursor-pointer">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-pulse">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From educational institutions to technology companies, our partners trust us to deliver quality printing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="interactive-card bg-gradient-card group hover-scale">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-6 rounded-2xl bg-background shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="h-16 w-auto mx-auto object-contain"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                    {partner.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {partner.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-smooth"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our satisfied clients about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="interactive-card bg-background border-2 border-muted group hover:border-primary/20 hover-scale">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Star className="h-5 w-5 text-yellow fill-yellow inline mr-1" />
                    <Star className="h-5 w-5 text-yellow fill-yellow inline mr-1" />
                    <Star className="h-5 w-5 text-yellow fill-yellow inline mr-1" />
                    <Star className="h-5 w-5 text-yellow fill-yellow inline mr-1" />
                    <Star className="h-5 w-5 text-yellow fill-yellow inline" />
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.company}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.author}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Carousel Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Carousel */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex animate-slide-infinite">
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-cyan/20 to-magenta/20 rounded-lg mx-4" />
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-magenta/20 to-yellow/20 rounded-lg mx-4" />
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-yellow/20 to-black/20 rounded-lg mx-4" />
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-black/20 to-cyan/20 rounded-lg mx-4" />
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-cyan/20 to-magenta/20 rounded-lg mx-4" />
            <div className="flex-shrink-0 w-80 h-full bg-gradient-to-r from-magenta/20 to-yellow/20 rounded-lg mx-4" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="bg-background/95 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-12 shadow-elegant hover:shadow-glow transition-all duration-500 hover-scale">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Join Our Growing Client Family?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Experience the same quality and service that our clients have come to trust. Let's discuss your printing needs today and transform your vision into reality.
              </p>
            </div>
            
            {/* Professional Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-cyan/10 to-magenta/10 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover-scale">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Quick Consultation</h3>
                <p className="text-sm text-muted-foreground">Get instant expert advice on your printing project</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-magenta/10 to-yellow/10 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover-scale">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">Tailored printing solutions for your unique needs</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-yellow/10 to-cyan/10 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover-scale">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround times without compromising quality</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://wa.me/233244470246?text=Hello! I'd like to discuss a printing project with you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-primary text-background font-bold text-lg rounded-xl hover:shadow-glow transition-all duration-300 hover-scale group"
              >
                <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                Start Your Project Today
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Join 200+ satisfied clients • Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;