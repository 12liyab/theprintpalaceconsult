import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Palette, Monitor, AlertCircle, Download, CheckCircle } from 'lucide-react';

const Guidelines = () => {
  const supportedSoftware = [
    { name: 'Adobe Illustrator CS5+', recommended: true },
    { name: 'CorelDRAW X3+', recommended: true },
    { name: 'Adobe Photoshop', recommended: false },
    { name: 'Adobe InDesign', recommended: true },
    { name: 'Canva Pro', recommended: false }
  ];

  const fileRequirements = [
    {
      title: 'Preferred Format',
      value: 'EPS (Encapsulated PostScript)',
      icon: <FileText className="h-5 w-5 text-primary" />
    },
    {
      title: 'Resolution',
      value: '300 DPI minimum',
      icon: <Monitor className="h-5 w-5 text-secondary" />
    },
    {
      title: 'Color Profile',
      value: 'CMYK (Print Ready)',
      icon: <Palette className="h-5 w-5 text-accent" />
    },
    {
      title: 'Fonts',
      value: 'Outlined/Converted to Curves',
      icon: <CheckCircle className="h-5 w-5 text-highlight" />
    }
  ];

  const colorGuidelines = [
    'Use CMYK color mode for all print projects',
    'Include Pantone color references when specific colors are required',
    'Request a "colour strike" proof for critical color matching',
    'Avoid RGB colors as they may not reproduce accurately in print',
    'Consider color variations between screen and print output'
  ];

  const fileDelivery = [
    {
      method: 'Email',
      limit: 'Files under 10MB',
      description: 'Quick delivery for smaller files'
    },
    {
      method: 'FTP Upload',
      limit: 'Large files welcome',
      description: 'Secure file transfer for any size project'
    },
    {
      method: 'Physical Media',
      limit: 'CD, DVD, USB Flash Drive',
      description: 'Bring your files directly to our office'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Artwork & Print Guidelines</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these professional guidelines to ensure your artwork prints perfectly every time. 
            Proper file preparation is key to achieving exceptional results.
          </p>
        </div>

        {/* File Requirements */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">File Requirements</h2>
            <p className="text-lg text-muted-foreground">
              Essential specifications for optimal print quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {fileRequirements.map((req, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-smooth">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-3 p-3 rounded-full bg-muted/50">
                    {req.icon}
                  </div>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">{req.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="border-primary/20 bg-primary/5">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="text-muted-foreground">
              <strong>Pro Tip:</strong> Always keep a backup of your original files with fonts intact before outlining them for print submission.
            </AlertDescription>
          </Alert>
        </section>

        {/* Supported Software */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Supported Software</h2>
            <p className="text-lg text-muted-foreground">
              Professional design applications we work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedSoftware.map((software, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">{software.name}</h3>
                  <Badge variant={software.recommended ? "default" : "secondary"}>
                    {software.recommended ? "Recommended" : "Supported"}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className={`h-4 w-4 ${software.recommended ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="text-sm text-muted-foreground">
                    {software.recommended ? 'Best compatibility' : 'Basic support'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Color Management */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Color Management Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              Ensuring accurate color reproduction in your prints
            </p>
          </div>

          <Card className="p-8 bg-gradient-card">
            <CardContent className="space-y-6">
              {colorGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{guideline}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* File Delivery Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">File Delivery Options</h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to submit your artwork files
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fileDelivery.map((option, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{option.method}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {option.limit}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Download className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Help with Your Files?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert team is ready to assist with file preparation, color correction, 
              and design optimization to ensure perfect print results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-accent">
                <Link to="/help">Get Expert Help</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">Submit Files & Get Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;