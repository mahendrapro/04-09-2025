import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, ExternalLink, Mail, CheckCircle, Lightbulb, Code, Brain } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Cutting-edge AI Projects",
      description: "Work on real-world AI applications using LangChain, LangGraph, and AutoGen"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mentorship Program",
      description: "Learn from experienced AI engineers and industry experts"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Hands-on Experience",
      description: "Build production-ready AI agents and automation systems"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Culture",
      description: "Contribute to innovative solutions that transform businesses"
    }
  ];

  const requirements = [
    "Bachelor's degree in Computer Science, AI, or related field",
    "Basic understanding of Python programming",
    "Familiarity with machine learning concepts",
    "Interest in AI agents and automation",
    "Strong problem-solving skills",
    "Excellent communication abilities",
    "Eagerness to learn and adapt quickly"
  ];

  const responsibilities = [
    "Assist in developing AI agents using LangChain and LangGraph",
    "Support automation workflow implementations",
    "Participate in client project development",
    "Contribute to research and development initiatives",
    "Help with testing and quality assurance",
    "Document processes and create technical content",
    "Collaborate with cross-functional teams"
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join <span className="text-red-500">The Brainy Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto">
            Build the future of AI automation with us. Shape tomorrow's intelligent systems today.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Current Opening */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Job Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  <span className="text-red-500">Agentic AI Engineer</span> Intern
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-red-500" />
                    <span>Full-time Internship</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-red-500" />
                    <span>Entry Level</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Link
                  to="https://www.linkedin.com/jobs/view/4293810629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-lg"
                >
                  Apply on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">About the Role</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We're looking for a passionate and driven individual to join our team as an Agentic AI Engineer Intern. 
                  This is an exciting opportunity to work on cutting-edge AI projects, develop intelligent automation systems, 
                  and contribute to real-world business transformations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You'll work closely with our experienced team to build AI agents using advanced frameworks like LangChain, 
                  LangGraph, and AutoGen, while gaining hands-on experience in enterprise AI implementations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apply Section */}
            <div className="bg-red-50 border-2 border-red-500/20 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-black mb-4">Ready to Apply?</h3>
              <p className="text-gray-700 mb-4">
                Join us in building the future of AI automation. Send your resume directly to our careers team.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:careers@thebrainy.agency"
                  className="inline-flex items-center justify-center border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-200"
                >
                  Send Your Resume
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join <span className="text-red-500">The Brainy Agency?</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the future of AI development in a supportive, innovative environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-red-500 transition-colors">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for More Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Don't See the Right <span className="text-red-500">Opportunity?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always looking for talented individuals. Send us your resume and let's explore possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@thebrainy.agency"
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-lg"
              >
                Apply Now
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;