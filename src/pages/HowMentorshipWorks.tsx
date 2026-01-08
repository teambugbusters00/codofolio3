import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, MessageSquare } from "lucide-react";

const HowMentorshipWorks = () => {
  return (
    <Container>
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            How Mentorship Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Long-term guidance for your career growth. Not instant debugging, but ongoing support and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Browse Mentors
              </CardTitle>
              <CardDescription>
                Explore our directory of experienced mentors across various technologies and career stages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Filter by technology stack
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  View mentor profiles and experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Read reviews from past mentees
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="h-5 w-5 text-purple-600" />
                Choose a Plan
              </CardTitle>
              <CardDescription>
                Select a monthly subscription that fits your needs and budget.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Monthly subscriptions (not per-minute)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flexible plans for different commitment levels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cancel anytime
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                Schedule Recurring Sessions
              </CardTitle>
              <CardDescription>
                Set up regular meetings to maintain consistent progress.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Weekly or bi-weekly calls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Calendar integration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-orange-600" />
                Communicate Async + Live
              </CardTitle>
              <CardDescription>
                Stay connected between sessions and during live meetings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Asynchronous messaging
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Live video calls
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Code sharing and reviews
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
              <p className="text-blue-100">Strategic advice for your professional development and career planning.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Regular Code Reviews</h3>
              <p className="text-blue-100">Ongoing feedback on your projects and coding practices.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Learning Plans</h3>
              <p className="text-blue-100">Customized roadmaps to help you achieve your goals.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-blue-100">Continuous guidance as you grow in your development journey.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Perfect for beginners, career switchers, and those preparing for new job opportunities.
          </p>
          <p className="text-sm text-muted-foreground">
            Note: This is for long-term guidance, not immediate debugging. For instant help, check out our Expert Help section.
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default HowMentorshipWorks;