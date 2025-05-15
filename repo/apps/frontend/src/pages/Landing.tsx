import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import {
  Mic,
  Video,
  Headphones,
  Share2,
  Edit3,
  DownloadCloud,
  CheckCircle,
  Star,
  Users,
  Check
} from 'lucide-react';

const LandingPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Testimonials data
  const testimonials = [
    {
      quote: "Wavecast has completely transformed how we produce our podcast. The quality is outstanding!",
      author: "Sarah Johnson",
      role: "Host, Tech Today Podcast",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "I've tried many recording platforms, but nothing matches the ease and quality of Wavecast.",
      author: "Michael Chen",
      role: "Content Creator",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Our remote interviews sound like we're all in the same studio. Game changer!",
      author: "Lisa Rodriguez",
      role: "Producer, Daily Insights",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      name: "Basic",
      price: "$15",
      period: "/month",
      description: "Perfect for podcasters just getting started",
      features: [
        "Up to 5 hours of recording",
        "720p video quality",
        "2 participants per session",
        "Basic editing tools",
        "MP3 downloads"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious creators and growing shows",
      features: [
        "Up to 15 hours of recording",
        "1080p video quality",
        "8 participants per session",
        "Advanced editing suite",
        "WAV & MP3 downloads",
        "Separate audio tracks",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "For professional studios and teams",
      features: [
        "Unlimited recording hours",
        "4K video quality",
        "Unlimited participants",
        "Full editing suite",
        "All audio formats",
        "Transcription included",
        "Priority support",
        "API access"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full opacity-10">
            <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="currentColor" d="M600 0C268.6 0 0 268.6 0 600s268.6 600 600 600 600-268.6 600-600S931.4 0 600 0zm0 1000c-220.9 0-400-179.1-400-400S379.1 200 600 200s400 179.1 400 400-179.1 400-400 400z"/>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Podcast Recording Made Simple
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
                Record studio-quality podcasts and videos remotely with your guests. 
                No complicated setup, just crystal-clear audio and video every time.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all">
                    Start Recording Free
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  See How It Works
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i} 
                      className="w-8 h-8 rounded-full border-2 border-indigo-900" 
                      src={`https://images.pexels.com/photos/${220453 + i * 10000}/pexels-photo-${220453 + i * 10000}.jpeg?auto=compress&cs=tinysrgb&w=300`} 
                      alt="User avatar" 
                    />
                  ))}
                </div>
                <p className="ml-4 text-sm">
                  <span className="font-medium">4,000+</span> creators trust Wavecast
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden border-4 border-white border-opacity-10 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Podcast Recording Session" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-40"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">RECORDING</span>
                    </div>
                    <div className="text-sm">00:24:18</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Creators Choose Wavecast</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our platform is built to make remote recording simple while delivering professional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Mic className="w-8 h-8 text-blue-500" />, 
                title: "Studio-Quality Audio", 
                description: "Pristine sound with local recording technology that prevents dropouts and internet issues."
              },
              { 
                icon: <Video className="w-8 h-8 text-blue-500" />, 
                title: "Crisp HD Video", 
                description: "Record up to 4K video that looks professional without expensive equipment."
              },
              { 
                icon: <Headphones className="w-8 h-8 text-blue-500" />, 
                title: "Separate Audio Tracks", 
                description: "Each participant is recorded on their own track for maximum editing flexibility."
              },
              { 
                icon: <Share2 className="w-8 h-8 text-blue-500" />, 
                title: "One-Click Invite", 
                description: "Guests join with a simple link—no downloads or accounts required."
              },
              { 
                icon: <Edit3 className="w-8 h-8 text-blue-500" />, 
                title: "Built-in Editor", 
                description: "Polish your recordings with our intuitive editing tools, right in your browser."
              },
              { 
                icon: <DownloadCloud className="w-8 h-8 text-blue-500" />, 
                title: "Flexible Export Options", 
                description: "Download in various formats or publish directly to popular platforms."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Wavecast Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Create professional podcasts and videos in three simple steps.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Schedule & Invite", 
                description: "Set up your recording session and invite guests with a simple link. No accounts needed for them to join."
              },
              { 
                step: "02", 
                title: "Record With Confidence", 
                description: "Our technology records locally on each person's device, eliminating internet issues and ensuring quality."
              },
              { 
                step: "03", 
                title: "Edit & Publish", 
                description: "Use our built-in editor to polish your content, then export or publish directly to your favorite platforms."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg relative z-10">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join thousands of podcasters who've elevated their content with Wavecast.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your podcasting needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden ${
                  plan.highlighted 
                    ? 'border-2 border-blue-500 relative shadow-xl' 
                    : 'border border-gray-200 shadow-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 bg-white ${plan.highlighted ? 'bg-gradient-to-b from-blue-50 to-white' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/signup">
                    <Button 
                      fullWidth 
                      variant={plan.highlighted ? 'primary' : 'outline'} 
                      className={plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Ready to create amazing podcasts?</h2>
              <p className="opacity-90 max-w-lg">
                Join thousands of creators who trust Wavecast for professional remote recordings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:bg-opacity-10"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;