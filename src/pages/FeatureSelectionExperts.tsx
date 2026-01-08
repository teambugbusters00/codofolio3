import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, MessageCircle, Video } from 'lucide-react';

const FeatureSelectionExperts: React.FC = () => {
  const experts = [
    
  ];

  const techniques = [
    'Filter Methods (Correlation, Mutual Information)',
    'Wrapper Methods (Recursive Feature Elimination)',
    'Embedded Methods (LASSO, Ridge Regression)',
    'Dimensionality Reduction (PCA, t-SNE)',
    'Feature Importance from Tree-based Models',
    'Statistical Tests (Chi-square, ANOVA)',
    'Information Gain and Entropy',
    'Regularization Techniques'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Feature Selection Experts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimize your machine learning models with expert guidance on selecting the most relevant features for better performance and interpretability.
          </p>
        </div>

        {/* Feature Selection Techniques */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Feature Selection Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techniques.map((technique, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors cursor-pointer">
                <h3 className="text-white font-medium">{technique}</h3>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Experts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Available Feature Selection Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert) => (
              <GlassCard key={expert.id} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{expert.name}</h3>
                    <p className="text-gray-300">{expert.title}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{expert.rating}</span>
                        <span className="text-gray-400">({expert.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400">{expert.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">${expert.price}</div>
                    <div className="text-sm text-gray-400">per 15 min</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {expert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      expert.availability === 'Available now' ? 'bg-green-400' :
                      expert.availability.includes('min') ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm text-gray-300">{expert.availability}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Video className="h-4 w-4 mr-2" />
                      Start Session
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Why Choose Feature Selection Experts */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Feature Selection Matters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Better Model Performance</h3>
              <p className="text-gray-300">Reduce overfitting and improve accuracy by selecting the most relevant features.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Faster Training</h3>
              <p className="text-gray-300">Reduce computational costs and training time with fewer, more meaningful features.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Model Interpretability</h3>
              <p className="text-gray-300">Create more understandable models that are easier to explain and debug.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default FeatureSelectionExperts;