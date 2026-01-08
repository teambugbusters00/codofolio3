import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, User, ArrowRight, TrendingUp, BookOpen, Code, Users, Star, MessageSquare } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: 'The Future of Remote Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping remote development, from AI-powered coding assistants to the rise of low-code platforms.',
    author: 'Sarah Chen',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    category: 'Industry Trends',
    image: '/placeholder.svg',
    tags: ['Remote Work', 'AI', 'Future Tech']
  };

  const posts = [
    {
      title: 'Mastering React Hooks: A Complete Guide',
      excerpt: 'Learn how to effectively use React Hooks to build more efficient and maintainable components.',
      author: 'Mike Johnson',
      date: 'Jan 12, 2024',
      readTime: '12 min read',
      category: 'React',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      title: 'Building Scalable Node.js Applications',
      excerpt: 'Best practices for architecting and deploying production-ready Node.js applications.',
      author: 'Alex Rodriguez',
      date: 'Jan 10, 2024',
      readTime: '15 min read',
      category: 'Backend',
      tags: ['Node.js', 'Backend', 'Scalability']
    },
    {
      title: 'The Complete Guide to TypeScript',
      excerpt: 'Everything you need to know to start using TypeScript in your projects effectively.',
      author: 'Emma Davis',
      date: 'Jan 8, 2024',
      readTime: '20 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'Best Practices']
    },
    {
      title: 'Career Transition to Tech: A Success Story',
      excerpt: 'How I went from marketing to software engineering in 18 months.',
      author: 'David Kim',
      date: 'Jan 5, 2024',
      readTime: '10 min read',
      category: 'Career',
      tags: ['Career Change', 'Success Story', 'Motivation']
    },
    {
      title: 'Docker for Developers: Getting Started',
      excerpt: 'Learn the fundamentals of containerization with Docker and improve your development workflow.',
      author: 'Lisa Wang',
      date: 'Jan 3, 2024',
      readTime: '14 min read',
      category: 'DevOps',
      tags: ['Docker', 'DevOps', 'Containers']
    },
    {
      title: 'Advanced CSS Grid Techniques',
      excerpt: 'Master complex layouts with CSS Grid and create responsive designs that work everywhere.',
      author: 'Tom Anderson',
      date: 'Jan 1, 2024',
      readTime: '11 min read',
      category: 'CSS',
      tags: ['CSS', 'Frontend', 'Responsive Design']
    }
  ];

  const categories = [
    { name: 'All Posts', count: 156 },
    { name: 'React', count: 23 },
    { name: 'JavaScript', count: 31 },
    { name: 'Career', count: 18 },
    { name: 'Python', count: 15 },
    { name: 'DevOps', count: 12 },
    { name: 'CSS', count: 9 },
    { name: 'TypeScript', count: 8 }
  ];

  const popularTags = [
    'React', 'JavaScript', 'Python', 'Career', 'Node.js', 'CSS', 'TypeScript', 'DevOps',
    'Machine Learning', 'Web Development', 'Mobile', 'Database', 'API', 'Testing'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and stories from the world of software development. Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Featured Post */}
        <GlassCard className="p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center mb-4">
                <BookOpen className="h-16 w-16 text-gray-400" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <Badge className="bg-blue-600 text-white mb-4">{featuredPost.category}</Badge>
              <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
              <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-400">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get the latest articles and tutorials delivered to your inbox.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <GlassCard key={index} className="p-6 hover:bg-gray-800/50 transition-colors cursor-pointer">
                  <Badge className="bg-green-600 text-white mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </GlassCard>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <GlassCard className="p-8 mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Career Growth</h3>
              <p className="text-gray-300 text-sm">Read stories of developers who advanced their careers through mentorship and learning.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Project Success</h3>
              <p className="text-gray-300 text-sm">Discover how our community members built impressive projects and portfolios.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Impact</h3>
              <p className="text-gray-300 text-sm">Learn about developers who found their tribe and built lasting connections.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default Blog;