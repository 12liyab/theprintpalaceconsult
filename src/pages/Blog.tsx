import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Leaf, Printer, TrendingUp, BookOpen } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Going Green with Printing: Sustainable Solutions for Modern Businesses",
    excerpt: "Discover how eco-friendly printing practices can reduce your environmental impact while maintaining exceptional quality and saving costs.",
    date: "2024-01-15",
    author: "TPPC Team",
    category: "Sustainability",
    readTime: "5 min read",
    image: "featured"
  };

  const blogPosts = [
    {
      title: "The Future of Digital Printing Technology in Ghana",
      excerpt: "Exploring the latest innovations in digital printing and how they're transforming the industry across West Africa.",
      date: "2024-01-10",
      author: "Mak Stanley Anku",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      title: "Color Management: Getting Perfect Prints Every Time",
      excerpt: "A comprehensive guide to color profiles, calibration, and achieving consistent color reproduction in your print projects.",
      date: "2024-01-05",
      author: "Dan Worgba",
      category: "Technical Guide",
      readTime: "6 min read"
    },
    {
      title: "Choosing the Right Paper for Your Print Project",
      excerpt: "From glossy to matte, textured to smooth - understand how paper choice affects your final print quality and cost.",
      date: "2023-12-28",
      author: "George Osei",
      category: "Materials",
      readTime: "3 min read"
    },
    {
      title: "Large Format Printing: Making a Big Impact",
      excerpt: "Best practices for banners, posters, and signage that grab attention and deliver your message effectively.",
      date: "2023-12-20",
      author: "Edmund Darko",
      category: "Marketing",
      readTime: "5 min read"
    },
    {
      title: "Preparing Files for Professional Printing",
      excerpt: "Essential tips for designers and businesses to ensure their artwork prints perfectly the first time.",
      date: "2023-12-15",
      author: "TPPC Team",
      category: "Design Tips",
      readTime: "4 min read"
    },
    {
      title: "Cost-Effective Printing: Maximizing Your Budget",
      excerpt: "Smart strategies to reduce printing costs without compromising on quality or impact.",
      date: "2023-12-10",
      author: "Sally Doris",
      category: "Business",
      readTime: "3 min read"
    }
  ];

  const categories = [
    { name: "Sustainability", icon: <Leaf className="h-4 w-4" />, count: 8 },
    { name: "Technology", icon: <Printer className="h-4 w-4" />, count: 12 },
    { name: "Design Tips", icon: <BookOpen className="h-4 w-4" />, count: 15 },
    { name: "Business", icon: <TrendingUp className="h-4 w-4" />, count: 6 }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">TPPC Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and industry news from Ghana's leading printing consultants. 
            Stay informed about the latest trends and best practices in printing technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <section className="mb-12">
              <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                <div className="aspect-video bg-gradient-hero relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge className="bg-highlight text-highlight-foreground mb-3">
                      Featured Article
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/90 mb-4 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-white/80">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Jan 15, 2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {featuredPost.readTime}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button asChild className="bg-gradient-accent">
                    <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Read Full Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Blog Posts Grid */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-8">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-card transition-smooth">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/blog/category/${category.name.toLowerCase()}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-smooth group"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="text-primary group-hover:text-primary-light">
                            {category.icon}
                          </div>
                          <span className="font-medium text-foreground group-hover:text-primary">
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest printing tips, industry news, and exclusive insights delivered to your inbox.
                  </p>
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <Link to="/help">Subscribe to Newsletter</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-accent text-accent-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Printing Advice?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Our experts are here to help with your specific printing challenges.
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <Link to="/help">Get Expert Help</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;