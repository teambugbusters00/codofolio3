import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, DollarSign, Search } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  title: string;
  skills: string[];
  rating: number;
  reviews: number;
  pricePer15Min: number;
  avatar: string;
  available: boolean;
}

const mockExperts: Expert[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Senior Python Developer',
    skills: ['Python', 'Django', 'Machine Learning', 'Data Science'],
    rating: 4.9,
    reviews: 127,
    pricePer15Min: 25,
    avatar: '/placeholder.svg',
    available: true,
  },
  {
    id: '2',
    name: 'Mike Johnson',
    title: 'React Expert',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux'],
    rating: 4.8,
    reviews: 89,
    pricePer15Min: 30,
    avatar: '/placeholder.svg',
    available: true,
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    title: 'Full Stack Developer',
    skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    rating: 4.7,
    reviews: 156,
    pricePer15Min: 28,
    avatar: '/placeholder.svg',
    available: false,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    title: 'DevOps Engineer',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    rating: 4.9,
    reviews: 94,
    pricePer15Min: 35,
    avatar: '/placeholder.svg',
    available: true,
  },
];

const techStacks = [
  'All',
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'Java',
  'C++',
  'Go',
  'Rust',
  'Machine Learning',
  'Data Science',
  'DevOps',
  'AWS',
  'Docker',
];

const FindExperts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [filteredExperts, setFilteredExperts] = useState(mockExperts);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterExperts(term, selectedTech);
  };

  const handleTechFilter = (tech: string) => {
    setSelectedTech(tech);
    filterExperts(searchTerm, tech);
  };

  const filterExperts = (search: string, tech: string) => {
    let filtered = mockExperts;

    if (search) {
      filtered = filtered.filter(expert =>
        expert.name.toLowerCase().includes(search.toLowerCase()) ||
        expert.title.toLowerCase().includes(search.toLowerCase()) ||
        expert.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (tech !== 'All') {
      filtered = filtered.filter(expert =>
        expert.skills.includes(tech)
      );
    }

    setFilteredExperts(filtered);
  };

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Expert Help
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get instant help from experienced developers. Filter by tech stack and start a session in minutes.
          </p>
        </div>

        {/* Search and Filter */}
        <GlassCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search experts by name, title, or skills..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-600 text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {techStacks.slice(0, 8).map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTechFilter(tech)}
                  className={selectedTech === tech ? "bg-blue-600 hover:bg-blue-700" : "border-gray-600 text-gray-300 hover:bg-gray-700"}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => (
            <GlassCard key={expert.id} className="p-6 hover:bg-gray-800/60 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={expert.avatar} alt={expert.name} />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {expert.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
                  <p className="text-gray-300 text-sm">{expert.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{expert.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({expert.reviews} reviews)</span>
                    {expert.available && (
                      <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                        Available now
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {expert.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                  {expert.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      +{expert.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-gray-300">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">${expert.pricePer15Min}</span>
                  <span className="text-sm">/ 15 min</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Instant or scheduled</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={!expert.available}
                >
                  {expert.available ? 'Start Session' : 'Schedule Later'}
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  View Profile
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No experts found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => {
                setSearchTerm('');
                setSelectedTech('All');
                setFilteredExperts(mockExperts);
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Session Types */}
        <GlassCard className="p-6 mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">What can experts help you with?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-gray-800/30">
              <h3 className="text-lg font-semibold text-white mb-2">Debugging</h3>
              <p className="text-gray-300 text-sm">Fix bugs and errors in your code</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-800/30">
              <h3 className="text-lg font-semibold text-white mb-2">Pair Programming</h3>
              <p className="text-gray-300 text-sm">Code together in real-time</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-800/30">
              <h3 className="text-lg font-semibold text-white mb-2">Concept Explanation</h3>
              <p className="text-gray-300 text-sm">Understand complex programming concepts</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-800/30">
              <h3 className="text-lg font-semibold text-white mb-2">Code Review</h3>
              <p className="text-gray-300 text-sm">Get feedback on your code quality</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default FindExperts;