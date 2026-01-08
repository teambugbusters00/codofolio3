import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// To use EmailJS, sign up at https://www.emailjs.com/, create a service, template, and get your IDs
// Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual values
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Users, HelpCircle, Briefcase, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_hfkhu1j', // Your EmailJS service ID
        'template_zfhk4yk', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          category: formData.category,
          message: formData.message,
        },
        'dmk2XbP9mh68vRLVu' // Your EmailJS public key
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'jopingvijay47@gmail.com',
      response: 'Within 24 hours'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-400" />,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 9 AM - 6 PM EST',
      response: 'Instant response'
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-400" />,
      title: 'Phone Support',
      description: 'Speak with an expert',
      contact: '894906332',
      response: 'Mon-Fri 9 AM - 5 PM EST'
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-yellow-400" />,
      title: 'Help Center',
      description: 'Self-service resources',
      contact: 'Browse FAQs & guides',
      response: '24/7 access'
    }
  ];

  const offices = [
    {
      city: 'Jodhpur',
      address: 'Nh-65, Pali Rd, Jodhpur, Rajasthan 342002',
      phone: '894906332',
      email: 'jopingvijay47@gmail.com'
    },
    {
      city: 'Jodhpur',
      address: 'Nh-65, Pali Rd, Jodhpur, Rajasthan 342002',
      phone: '894906332',
      email: 'jopingvijay47@gmail.com'
    },
    {
      city: 'Jodhpur',
      address: 'Nh-65, Pali Rd, Jodhpur, Rajasthan 342002',
      phone: '894906332',
      email: 'jopingvijay47@gmail.com'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Jodhpur Institute of Engineering & Technology?',
      answer: 'Simply sign up for a free account, browse our mentors and experts, and book your first session. We offer a 100% satisfaction guarantee on your first session.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.'
    },
    {
      question: 'Can I cancel or reschedule sessions?',
      answer: 'Yes, you can cancel or reschedule sessions up to 24 hours in advance with no penalty. For same-day cancellations, a small fee may apply.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 100% satisfaction guarantee on your first session. For other sessions, refunds are available within 7 days if you\'re not satisfied.'
    },
    {
      question: 'How do I become a mentor or expert?',
      answer: 'Visit our "Become a Mentor" page to learn about the requirements and application process. We look for experienced developers with a passion for teaching.'
    },
    {
      question: 'What if I need help with something urgent?',
      answer: 'For urgent technical issues, we recommend booking an expert help session. Our experts are available for instant or scheduled sessions.'
    }
  ];

  return (
    <Container>
      <Section className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions about Jodhpur Institute of Engineering & Technology? Need help with your account? We're here to help.
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <GlassCard key={index} className="p-6 text-center hover:bg-gray-800/70 transition-colors">
              <div className="bg-gray-700/50 rounded-lg p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{method.description}</p>
              <p className="text-blue-400 font-medium mb-1">{method.contact}</p>
              <p className="text-gray-400 text-xs">{method.response}</p>
            </GlassCard>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-700/50 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-700/50 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category" className="text-white">Category</Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press & Media</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject *</Label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-700/50 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="flex min-h-[80px] w-full rounded-md border border-gray-600 bg-gray-700/50 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </GlassCard>

          <div className="space-y-8">
            {/* Office Locations */}
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-white mb-2">{office.city}</h3>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-gray-400" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Business Hours */}
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Monday - Friday</p>
                    <p className="text-gray-300 text-sm">9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-medium">Saturday - Sunday</p>
                    <p className="text-gray-300 text-sm">Limited support via email</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-600/20 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    <AlertCircle className="h-4 w-4 inline mr-2" />
                    For urgent technical issues, book an expert help session anytime.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* FAQ Section */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              View All FAQs <HelpCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default Contact;