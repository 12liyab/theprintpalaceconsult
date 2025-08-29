import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Search, HelpCircle, Clock, FileText, Palette } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General Questions",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question: "What types of printing services does TPPC offer?",
          answer: "We offer a comprehensive range of printing services including lithographic printing, digital printing, offset printing, screen printing, large format printing for banners and posters, business cards, booklets, flyers, and custom promotional materials. We also provide indoor and outdoor advertising solutions."
        },
        {
          question: "Do you serve clients outside of Accra?",
          answer: "Yes! While we're based in Accra, Ghana, we serve clients across Ghana and beyond. We have established partnerships and delivery networks that allow us to efficiently serve customers throughout the region."
        },
        {
          question: "How long has TPPC been in business?",
          answer: "The Print Palace Consult has been serving clients for over 15 years, building strong relationships and delivering high-quality printing solutions across sub-Saharan Africa."
        }
      ]
    },
    {
      category: "Pricing & Ordering", 
      icon: <FileText className="h-5 w-5" />,
      questions: [
        {
          question: "How do I get a quote for my printing project?",
          answer: "You can get a quote in three ways: 1) Fill out our online quote request form, 2) Call us directly at +233 244 470 246, or 3) Visit our office in Accra. We typically provide detailed quotes within 24 hours."
        },
        {
          question: "What information do you need to provide an accurate quote?",
          answer: "We need details about your project including: quantity needed, size/dimensions, color requirements (full color or black & white), paper type preferences, finishing options (lamination, binding, etc.), and your timeline. The more specific information you provide, the more accurate our quote will be."
        },
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes, we offer competitive pricing for large volume orders. Generally, the more you print, the lower the cost per unit becomes. Contact us with your quantity requirements for a customized bulk pricing quote."
        },
        {
          question: "Can I request samples before placing a large order?",
          answer: "Absolutely! We encourage requesting samples, especially for large orders or new projects. We provide free custom samples so you can see and feel the quality before making your final decision."
        }
      ]
    },
    {
      category: "File Preparation & Requirements",
      icon: <Palette className="h-5 w-5" />,
      questions: [
        {
          question: "What file formats do you accept?",
          answer: "We prefer EPS (Encapsulated PostScript) files, but also accept PDF, AI (Adobe Illustrator), and CDR (CorelDRAW) formats. All files should be in CMYK color mode with fonts outlined or converted to curves."
        },
        {
          question: "What resolution should my images be?",
          answer: "All images should be at least 300 DPI at the actual print size. Low resolution images (72 DPI) from websites won't print clearly and may appear pixelated in the final product."
        },
        {
          question: "How should I prepare my files for printing?",
          answer: "Use CMYK color mode, ensure all images are 300 DPI, outline all fonts, include bleed areas (usually 3mm), and save in a print-ready format like EPS or high-quality PDF. Check our Guidelines page for detailed specifications."
        },
        {
          question: "Can you help with file preparation if I'm not sure about the technical requirements?",
          answer: "Yes! Our experienced team can help prepare your files for optimal printing. We offer design consultation and file preparation services to ensure your project prints perfectly."
        },
        {
          question: "How can I submit my files to you?",
          answer: "You can submit files via email (for files under 10MB), upload to our FTP site for larger files, or bring them on CD, DVD, or USB flash drive to our office. We'll provide FTP details after you place your order."
        }
      ]
    },
    {
      category: "Production & Delivery",
      icon: <Clock className="h-5 w-5" />,
      questions: [
        {
          question: "What are your typical turnaround times?",
          answer: "Turnaround times vary by project type and complexity. Simple jobs like business cards typically take 2-3 business days, while larger projects may take 5-7 business days. Rush orders are available for urgent deadlines - please discuss timing when requesting your quote."
        },
        {
          question: "Do you offer rush or express services?",
          answer: "Yes, we understand that sometimes you need projects completed quickly. We offer rush services for urgent deadlines, though additional fees may apply. Contact us as early as possible to discuss rush order options."
        },
        {
          question: "How will I know when my order is ready?",
          answer: "We'll contact you via phone or email when your order is complete and ready for pickup or delivery. We provide regular updates on project status for larger or complex orders."
        },
        {
          question: "Do you offer delivery services?",
          answer: "Yes, we offer delivery services within Accra and surrounding areas. Delivery fees vary by location and order size. We can also arrange shipping for clients outside our immediate delivery area."
        }
      ]
    },
    {
      category: "Quality & Materials",
      icon: <Palette className="h-5 w-5" />,
      questions: [
        {
          question: "What types of paper and materials do you work with?",
          answer: "We work with a wide range of materials including various paper weights and finishes, cardstock, vinyl for banners and stickers, canvas, and specialty papers. We can source specific materials based on your project needs."
        },
        {
          question: "Do you offer eco-friendly printing options?",
          answer: "Yes! We're committed to sustainable printing practices and offer eco-friendly options including recycled papers, soy-based inks, and environmentally responsible printing processes. Ask about our green printing solutions."
        },
        {
          question: "What quality control measures do you have in place?",
          answer: "We maintain the highest quality standards through careful file review, color proofing, press checks, and final inspection before delivery. Our experienced technicians ensure every job meets our rigorous quality standards."
        },
        {
          question: "Can I get a proof before final printing?",
          answer: "Yes, we highly recommend proofs for important projects. We offer digital proofs for color and layout review, and can provide physical 'colour strike' proofs for critical color matching when using Pantone colors."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about our printing services, processes, and policies. 
            Can't find what you're looking for? Contact our expert team for personalized assistance.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-full bg-primary/10">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                <div className="h-px bg-border flex-1"></div>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex; // Unique index
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={faqIndex} className="overflow-hidden hover:shadow-card transition-smooth">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 hover:bg-muted/50 transition-smooth"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="prose prose-sm max-w-none text-muted-foreground">
                            <p>{faq.answer}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any FAQs matching "{searchTerm}". Try different keywords or contact us directly.
            </p>
            <Button asChild>
              <Link to="/help">Contact Support</Link>
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team is here to help! Contact us for personalized assistance with your printing needs, 
              technical questions, or custom project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-accent">
                <Link to="/help">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">Get Quote</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;