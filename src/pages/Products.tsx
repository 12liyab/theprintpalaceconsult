import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Image, CreditCard, Megaphone, Shirt, BookOpen, Gift, Shirt as TShirt } from 'lucide-react';
import printingProcess from '@/assets/printing-process.jpg';

const Products = () => {
const categories = [
    {
      letter: 'B',
      icon: <FileText className="h-8 w-8 text-primary icon-bounce" />,
      title: 'Banners & Booklets',
      products: ['Large Format Banners', 'Pull-up Banners', 'Vinyl Banners', 'Corporate Booklets', 'Product Catalogs', 'Annual Reports']
    },
    {
      letter: 'C',
      icon: <CreditCard className="h-8 w-8 text-secondary icon-bounce" />,
      title: 'Cards & Calendars',
      products: ['Business Cards', 'Wedding Cards', 'Greeting Cards', 'Wall Calendars', 'Desk Calendars', 'Pocket Calendars']
    },
    {
      letter: 'F',
      icon: <Image className="h-8 w-8 text-accent icon-bounce" />,
      title: 'Flyers & Forms',
      products: ['Promotional Flyers', 'Event Flyers', 'Business Forms', 'Invoice Books', 'Receipt Books', 'Letterheads']
    },
    {
      letter: 'O',
      icon: <Megaphone className="h-8 w-8 text-secondary icon-bounce" />,
      title: 'Outdoor Advertising',
      products: ['Billboards', 'Street Banners', 'Transit Advertising', 'Building Wraps', 'Trade Show Displays', 'Event Backdrops']
    },
    {
      letter: 'P',
      icon: <BookOpen className="h-8 w-8 text-highlight icon-bounce" />,
      title: 'Posters & Publications',
      products: ['Event Posters', 'Marketing Posters', 'Magazines', 'Newsletters', 'Brochures', 'Pamphlets']
    },
    {
      letter: 'V',
      icon: <TShirt className="h-8 w-8 text-primary icon-bounce" />,
      title: 'Souvenirs',
      products: ['Pens', 'Ceramic mugs', 'Notepads', 'Keyrings', 'Water Bottles', 'others to follow']
    },
    {
      letter: 'T',
      icon: <Shirt className="h-8 w-8 text-primary icon-bounce" />,
      title: 'T-Shirt Printing',
      products: ['DTF', 'DTG', 'Screen printing']
    },
    {
      letter: 'S',
      icon: <Shirt className="h-8 w-8 text-primary icon-bounce" />,
      title: 'Stickers & Signage',
      products: ['Custom Stickers', 'Vehicle Decals', 'Shop Signage', 'Directional Signs', 'Safety Signs', 'Window Graphics']
    }
  ];

  const printingTypes = [
    { name: 'Lithographic Printing', description: 'High-quality offset printing for large volumes' },
    { name: 'Digital Printing', description: 'Fast, cost-effective printing for small to medium runs' },
    { name: 'Screen Printing', description: 'Durable printing on various materials and surfaces' },
    { name: 'Large Format Printing', description: 'Banners, posters, and signage up to any size' },
    { name: 'Indoor Advertising', description: 'Professional indoor display solutions' },
    { name: 'Outdoor Advertising', description: 'Weather-resistant outdoor marketing materials' }
  ];

  const customOptions = [
    'Special Papers & Materials',
    'Metallic Inks & Foiling',
    'Embossing & Debossing',
    'Die Cutting & Perforation',
    'Lamination & UV Coating',
    'Binding & Finishing Services'
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative mb-6 sm:mb-8">
            <img 
              src={printingProcess} 
              alt="High-quality printing process in action" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant hover-scale transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">Services</h1>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-3 sm:mb-4 drop-shadow-md">
                From business cards to billboards, we offer comprehensive printing solutions 
                tailored to your needs. Explore our full range of products and services.
              </p>
              <Button size="lg" asChild className="bg-gradient-accent button-hover w-full sm:w-auto">
                <Link to="/pricing">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Organized by category for easy browsing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="interactive-card group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted group-hover:bg-primary/10 transition-smooth">
                      {category.icon}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        {category.letter}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">{category.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex} className="text-muted-foreground text-sm flex items-center hover-scale cursor-pointer">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {product}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Printing Specializations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Printing Specializations</h2>
            <p className="text-lg text-muted-foreground">
              Advanced printing technologies for every requirement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printingTypes.map((type, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card interactive-card group">
                <CardHeader>
                  <CardTitle className="text-lg text-primary group-hover:animate-pulse">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Custom Options */}
        <section className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Custom Printing Options</h2>
            <p className="text-lg text-muted-foreground">
              Premium finishes and special effects to make your project stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {customOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-sm hover-scale cursor-pointer group">
                <div className="w-3 h-3 bg-gradient-accent rounded-full group-hover:animate-pulse"></div>
                <span className="font-medium text-foreground group-hover:text-primary transition-smooth">{option}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Need something not listed? We specialize in custom solutions tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" asChild className="button-hover">
                <Link to="/pricing">Request Custom Quote</Link>
              </Button>
              <Button variant="outline" asChild className="button-hover">
                <Link to="/help">Speak with Expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;