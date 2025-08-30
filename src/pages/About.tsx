import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Heart, Star, CheckCircle } from 'lucide-react';
import ashesiLogo from '@/assets/ashesi-logo.png';
import printShowcase from '@/assets/print-showcase.jpg';
import printingProcess from '@/assets/printing-process.jpg';
import quoteConsultation from '@/assets/quote-consultation.jpg';
import Stanley from '@/assets/Stanley 2.png';


const About = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Customer Service",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-secondary" />,
      title: "Integrity",
      description: "We maintain the highest principles of honesty and confidentiality in all our dealings."
    },
    {
      icon: <Star className="h-6 w-6 text-accent" />,
      title: "Innovation",
      description: "Continuously adopting new technologies and methods to serve you better."
    },
    {
      icon: <Target className="h-6 w-6 text-highlight" />,
      title: "Quality Delivery",
      description: "Every project meets our rigorous standards before reaching your hands."
    }
  ];

  const team = [
    {
      name: "Mak Stanley Anku",
      role: "Chief Executive Officer",
      description: "Visionary leader driving TPPC's mission across sub-Saharan Africa.",
      image: Stanley
    },
    {
      name: "Sally Doris",
      role: "Human Resources Manager", 
      description: "Ensuring our team delivers exceptional service with every interaction.",
      image: ashesiLogo
    },
    {
      name: "Martha James",
      role: "Executive Secretary", 
      description: "Coordinating operations and maintaining our high standards of service.",
      image: ashesiLogo
    },
    {
      name: "Edmund Darko",
      role: "Marketing Director",
      description: "Connecting with clients and showcasing our innovative solutions.",
      image: ashesiLogo
    },
    {
      name: "Dan Worgba",
      role: "Lead Technician",
      description: "Expert in advanced printing technologies and quality control.",
      image: ashesiLogo
    },
    {
      name: "George Osei",
      role: "Production Technician",
      description: "Specialized in digital and lithographic printing processes.",
      image: ashesiLogo
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">About TPPC</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Transforming the print industry in sub-Saharan Africa with innovative solutions, 
            unmatched quality, and a commitment to excellence that spans over a decade.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="text-center pb-6">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground">
                To <strong>transform the print industry in sub-Saharan Africa</strong> by setting new standards 
                of excellence, innovation, and customer service that inspire growth and creativity across the region.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader className="text-center pb-6">
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl text-secondary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground">
                To provide the <strong>highest levels of coverage</strong> and <strong>highest standard possible</strong> 
                print products while maintaining integrity, responsiveness, and innovation in everything we do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide every decision and interaction at TPPC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-muted/50">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground">
              Dedicated professionals committed to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="interactive-card bg-gradient-card group hover-scale">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-background shadow-soft group-hover:shadow-glow transition-all duration-300 w-32 h-32 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={`${member.name} profile`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-smooth">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Objectives */}
        <section className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Objectives</h2>
            <p className="text-lg text-muted-foreground">
              What drives us to excellence every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Responsiveness</h3>
                  <p className="text-muted-foreground">Prompt delivery of quotes and exceptional customer service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Innovation</h3>
                  <p className="text-muted-foreground">Embracing new technologies and creative solutions</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Expert Consultation</h3>
                  <p className="text-muted-foreground">Professional guidance for all your printing needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Confidentiality</h3>
                  <p className="text-muted-foreground">Maintaining the highest principles of client privacy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;