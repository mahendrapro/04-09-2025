import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, Rocket, Globe, CheckCircle, Mail, Calendar, Award, Target } from 'lucide-react';

const Career = () => {
  const openPositions = [
    {
      title: "Generative AI Engineer",
      type: "Full-time",
      location: "Bangalore, India / Remote",
      experience: "3-5 years",
      skills: ["Python", "LangChain", "LangGraph", "OpenAI API", "GPT Models", "RAG Systems", "Vector Databases"],
      description: "Design and implement advanced generative AI solutions, including RAG systems, AI agents, and custom LLM applications for enterprise clients."
    },
    {
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Bangalore, India / Remote",
      experience: "2-4 years",
      skills: ["Python", "LangChain", "LangGraph", "OpenAI API", "Machine Learning"],
      description: "Build and deploy AI agents and automation systems for enterprise clients."
    },
    {
      title: "Frontend Developer",
      type: "Full-time", 
      location: "Bangalore, India / Remote",
      experience: "1-3 years",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "API Integration"],
      description: "Create beautiful, responsive interfaces for AI-powered applications."
    },
    {
      title: "Business Development Associate",
      type: "Full-time",
      location: "Bangalore, India",
      experience: "0-2 years",
      skills: ["Sales", "Client Relations", "Market Research", "Communication"],
      description: "Help expand our client base and build relationships with enterprise customers."
    },
    {
      title: "AI Automation Specialist",
      type: "Internship",
      location: "Bangalore, India / Remote",
      experience: "Fresher",
      skills: ["Python", "Automation Tools", "Problem Solving", "Learning Mindset"],
      description: "Learn and implement workflow automation solutions using cutting-edge AI tools."
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI frameworks and tools"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Impact",
      description: "Build solutions for clients worldwide"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and skill development"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Culture",
      description: "Work with passionate, talented professionals"
    }
  ];

  const internshipProgram = [
    "3-6 month structured internship program",
    "Hands-on experience with real client projects",
    "Mentorship from senior engineers",
    "Potential for full-time conversion",
    "Certificate of completion",
    "Stipend provided"
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
            Build the future of AI automation with a passionate team of innovators
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-red-500">The Brainy Agency?</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join a team that's shaping the future of business automation
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

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open <span className="text-red-500">Positions</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border-2 border-red-500/20 rounded-2xl p-8 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">{position.title}</h3>
                  <span className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {position.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-gray-600"><strong>Location:</strong> {position.location}</p>
                  <p className="text-gray-600"><strong>Experience:</strong> {position.experience}</p>
                </div>

                <p className="text-gray-700 mb-6">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:career@thebrainy.agency"
                  className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 inline-flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-red-500/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                <span className="text-red-500">Internship</span> Program
              </h2>
              <p className="text-xl text-gray-700">
                Perfect for freshers looking to start their AI career
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">What We Offer:</h3>
                <ul className="space-y-3">
                  {internshipProgram.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <Award className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-black mb-2">Launch Your Career</h4>
                  <p className="text-gray-700">
                    Get hands-on experience with real AI projects and mentorship from industry experts
                  </p>
                </div>
                
                <a
                  href="mailto:career@thebrainy.agency"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 inline-flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Apply for Internship
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our <span className="text-red-500">Team?</span>
          </h2>
          <p className="text-xl text-white mb-8">
            Send your resume and let's discuss how you can contribute to our mission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:career@thebrainy.agency"
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-200 shadow-xl inline-flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Your Resume
            </a>
            <Link
              to="/contact"
              className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-500/10 transition-all duration-200 inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;