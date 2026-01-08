import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Briefcase, MessageSquare, Star, TrendingUp, Users, DollarSign, Clock, Send } from 'lucide-react';

const BecomeAFreelancer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    portfolio: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_hfkhu1j',
        'template_zfhk4yk',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Freelancer Application',
          category: 'Freelancer Application',
          message: `Phone: ${formData.phone}\nSkills: ${formData.skills}\nExperience: ${formData.experience}\nPortfolio: ${formData.portfolio}\n\n${formData.message}`,
        },
        'dmk2XbP9mh68vRLVu'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', skills: '', experience: '', portfolio: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const benefits = [
    {
      icon: DollarSign,
      title: 'Flexible Income',
      description: 'Set your own rates and work on projects that match your schedule and interests.'
    },
    {
      icon: Briefcase,
      title: 'Project Variety',
      description: 'Work on diverse projects from startups to established companies across different industries.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Choose when and how much you work. Take breaks between projects or work full-time.'
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Connect with clients worldwide and build long-term professional relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Expand your skills, gain experience in new technologies, and build your portfolio.'
    },
    {
      icon: Star,
      title: 'Client Reviews',
      description: 'Build your reputation through client feedback and showcase successful projects.'
    }
  ];

  const requirements = [
    'Strong technical skills in your area of expertise',
    'Professional communication and project management abilities',
    'Portfolio showcasing past work and projects',
    'Reliability and commitment to deadlines',
    'Understanding of client needs and business requirements',
    'Experience with relevant tools and technologies'
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: 'Create Your Profile',
      description: 'Build a compelling profile highlighting your skills, experience, and past projects.',
      details: [
        'Add your technical skills and expertise areas',
        'Showcase your portfolio and past work',
        'Write a professional bio that explains your background',
        'Set your hourly or project rates'
      ]
    },
    {
      step: 2,
      title: 'Get Verified',
      description: 'Complete our verification process to build trust with potential clients.',
      details: [
        'Verify your identity and contact information',
        'Submit proof of your technical skills',
        'Complete background checks if required',
        'Get approved to start receiving project proposals'
      ]
    },
    {
      step: 3,
      title: 'Find Projects',
      description: 'Browse available projects and submit proposals that match your expertise.',
      details: [
        'Search projects by technology and requirements',
        'Review project details and client needs',
        'Submit competitive proposals with timelines',
        'Highlight why you\'re the right fit for the project'
      ]
    },
    {
      step: 4,
      title: 'Deliver Excellence',
      description: 'Complete projects successfully and build your reputation through great work.',
      details: [
        'Communicate regularly with clients',
        'Deliver high-quality work on time',
        'Request feedback and reviews',
        'Use successful projects to attract more work'
      ]
    }
  ];

  const successTips = [
    'Be responsive to client messages and questions',
    'Set clear expectations about timelines and deliverables',
    'Document your work and provide regular updates',
    'Ask for feedback and use it to improve',
    'Network with other freelancers and share opportunities',
    'Keep your skills updated with latest technologies',
    'Maintain a professional online presence',
    'Deliver work ahead of deadlines when possible'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Become a Freelancer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our community of experienced developers. Turn your skills into a thriving freelance career with flexible projects and competitive rates.
          </p>
        </div>

        {/* Benefits */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Become a Freelancer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Requirements */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What We Look For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{requirement}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Getting Started Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Getting Started</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gettingStartedSteps.map((step, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600/20 rounded-full p-3 flex-shrink-0">
                    <span className="text-blue-400 font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Success Tips */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {successTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <Star className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Portfolio Focus */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Build Your Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Past Projects</h3>
              <p className="text-gray-300 text-sm">Showcase completed work with detailed descriptions and outcomes.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Client Communication</h3>
              <p className="text-gray-300 text-sm">Highlight your ability to understand requirements and deliver results.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Success Stories</h3>
              <p className="text-gray-300 text-sm">Share testimonials and case studies of successful collaborations.</p>
            </div>
          </div>
        </GlassCard>

        {/* Application Form */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Apply to Become a Freelancer</h2>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Application Submitted!</h3>
              <p className="text-gray-300">Thank you for your application. We'll review it and get back to you within 24 hours.</p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-white mb-2">Technical Skills *</label>
                <input
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., React, Node.js, Python, etc."
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-white mb-2">Years of Experience *</label>
                <input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 3 years"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-white mb-2">Portfolio/LinkedIn URL</label>
                <input
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Tell us about yourself *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your background, past projects, and why you want to become a freelancer..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Freelancing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have built successful freelance careers on our platform.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Apply to Become a Freelancer
          </Button>
        </div>
      </Section>
    </Container>
  );
};

export default BecomeAFreelancer;