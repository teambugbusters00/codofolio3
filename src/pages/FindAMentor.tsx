import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatabaseService, Mentor } from '@/lib/database';

const FindAMentor: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await DatabaseService.getMentors();
        setMentors(data);
      } catch (error) {
        console.error('Failed to fetch mentors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSkill = skillFilter === 'all' || !skillFilter || mentor.skills.includes(skillFilter);
    const matchesExperience = experienceFilter === 'all' || !experienceFilter || mentor.experience.includes(experienceFilter);

    return matchesSearch && matchesSkill && matchesExperience;
  });

  const allSkills = Array.from(new Set(mentors.flatMap(mentor => mentor.skills)));

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Mentor</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with experienced developers for ongoing guidance and career support.
            Monthly subscriptions for personalized mentorship.
          </p>
        </div>

        {/* Filters */}
        <GlassCard className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <Input
                placeholder="Search by name or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Skill</label>
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="All skills" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="all">All skills</SelectItem>
                  {allSkills.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience</label>
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="All levels" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  <SelectItem value="all">All levels</SelectItem>
                  <SelectItem value="5">5+ years</SelectItem>
                  <SelectItem value="7">7+ years</SelectItem>
                  <SelectItem value="10">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </GlassCard>

        {/* Mentors Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Loading mentors...</p>
          </div>
        ) : filteredMentors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No mentors found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSkillFilter('');
                setExperienceFilter('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <GlassCard key={mentor.id} className="p-6 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
                    <p className="text-gray-300 text-sm mb-1">{mentor.title} at {mentor.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{mentor.experience} experience</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {mentor.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {mentor.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{mentor.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{mentor.bio}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white font-medium">{mentor.rating}</span>
                        <span className="text-gray-400 text-sm">({mentor.reviews} reviews)</span>
                      </div>
                      <span className="text-green-400 font-semibold">{mentor.price}</span>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Start Mentorship
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </Section>
    </Container>
  );
};

export default FindAMentor;