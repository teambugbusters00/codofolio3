import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Clock, DollarSign, Users, Shield, Send } from "lucide-react";

const BecomeAMentor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    linkedin: '',
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
          subject: 'Mentor Application',
          category: 'Mentor Application',
          message: `Phone: ${formData.phone}\nExpertise: ${formData.expertise}\nExperience: ${formData.experience}\nLinkedIn: ${formData.linkedin}\n\n${formData.message}`,
        },
        'dmk2XbP9mh68vRLVu'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', expertise: '', experience: '', linkedin: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Container>
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Become a Mentor
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your expertise and help shape the next generation of developers while building your personal brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                Requirements
              </CardTitle>
              <CardDescription>
                What we look for in our mentors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Industry Experience</span>
                    <p className="text-sm text-muted-foreground">3+ years of professional development experience</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Technical Expertise</span>
                    <p className="text-sm text-muted-foreground">Deep knowledge in your specialized areas</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Communication Skills</span>
                    <p className="text-sm text-muted-foreground">Ability to explain complex concepts clearly</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium">Interview & Vetting</span>
                    <p className="text-sm text-muted-foreground">Pass our thorough screening process</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Set Your Availability
              </CardTitle>
              <CardDescription>
                Control your schedule and commitment level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Set your own hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Choose your mentees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Weekly or bi-weekly commitments
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-purple-600" />
                Set Your Pricing
              </CardTitle>
              <CardDescription>
                Competitive rates based on your experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Monthly subscription model
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Transparent pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flexible plans
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Direct payments
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-600" />
                Quality Control
              </CardTitle>
              <CardDescription>
                Ensuring the best experience for everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Rigorous vetting process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Ongoing performance reviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Community standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Support and training
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Become a Mentor?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-green-200" />
              <h3 className="text-lg font-semibold mb-2">Supply-Side Growth</h3>
              <p className="text-green-100 text-sm">Help expand our mentor network and reach more developers in need.</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-green-200" />
              <h3 className="text-lg font-semibold mb-2">Build Your Brand</h3>
              <p className="text-green-100 text-sm">Establish yourself as a thought leader in your field.</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-200" />
              <h3 className="text-lg font-semibold mb-2">Earn Income</h3>
              <p className="text-green-100 text-sm">Generate additional revenue through mentoring subscriptions.</p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800 p-8 mb-8">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Apply to Become a Mentor</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below and we'll review your application within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground">Thank you for your application. We'll review it and get back to you within 24 hours.</p>
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
                    <label htmlFor="name" className="block text-foreground mb-2">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-foreground mb-2">Areas of Expertise *</label>
                  <input
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React, Node.js, Python, etc."
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-foreground mb-2">Years of Experience *</label>
                  <input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 5+ years"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-foreground mb-2">LinkedIn Profile</label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">Why do you want to be a mentor? *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your background, mentoring experience, and why you want to help others..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white disabled:opacity-50 py-3"
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
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
            Apply to Become a Mentor
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join our community of expert mentors and make a lasting impact on developers' careers.
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default BecomeAMentor;