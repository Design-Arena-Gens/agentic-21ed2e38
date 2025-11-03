'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-paleGreen-400 to-paleGreen-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">NEXIFY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-paleGreen-500 transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-700 hover:text-paleGreen-500 transition-colors duration-300">About</a>
              <a href="#features" className="text-gray-700 hover:text-paleGreen-500 transition-colors duration-300">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-paleGreen-500 transition-colors duration-300">Contact</a>
            </div>
            <button className="px-6 py-2.5 bg-paleGreen-500 text-white rounded-full hover:bg-paleGreen-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-paleGreen-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-paleGreen-500">NEXIFY</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                Simplify management. Empower your workforce.
              </p>
              <p className="text-lg text-gray-500">
                A smart workforce and client management platform that bridges the gap between field and office, bringing efficiency to every aspect of your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-paleGreen-500 text-white rounded-full text-lg font-medium hover:bg-paleGreen-600 transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Get Started Free
                </button>
                <button className="px-8 py-4 border-2 border-paleGreen-500 text-paleGreen-500 rounded-full text-lg font-medium hover:bg-paleGreen-50 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className={`relative ${isVisible ? 'animate-float' : 'opacity-0'}`}>
              <div className="relative w-full h-[500px] bg-gradient-to-br from-paleGreen-100 to-paleGreen-200 rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                {/* Desktop Mockup */}
                <div className="absolute top-8 left-8 right-8 h-72 bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-gray-200">
                  <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-paleGreen-400"></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-paleGreen-200 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-20 bg-paleGreen-100 rounded-2xl mt-4"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-gray-100 rounded-xl"></div>
                      <div className="h-16 bg-gray-100 rounded-xl"></div>
                      <div className="h-16 bg-gray-100 rounded-xl"></div>
                    </div>
                  </div>
                </div>
                {/* Mobile Mockup */}
                <div className="absolute bottom-8 right-8 w-40 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200">
                  <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-paleGreen-200 rounded-full w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-24 bg-paleGreen-100 rounded-2xl mt-3"></div>
                    <div className="space-y-2">
                      <div className="h-10 bg-gray-100 rounded-xl"></div>
                      <div className="h-10 bg-gray-100 rounded-xl"></div>
                      <div className="h-10 bg-gray-100 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-paleGreen-500">NEXIFY</span>
            </h2>
            <div className="w-24 h-1 bg-paleGreen-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                NEXIFY was born from a simple vision: to create a platform that truly understands the challenges of modern workforce management. In today's fast-paced business environment, teams are scattered across locations, and coordination can become a nightmare.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We built NEXIFY to organize teams and streamline daily operations, making it effortless to manage your workforce from anywhere. Whether your team is in the field or in the office, NEXIFY keeps everyone connected and productive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Developed by <span className="font-semibold text-paleGreen-500">IT SOUQ LLP</span>, NEXIFY bridges the gap between field and office, bringing together cutting-edge technology with human-centered design. We believe management should be simple, intuitive, and empowering.
              </p>
            </div>
            <div className="bg-gradient-to-br from-paleGreen-50 to-paleGreen-100 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paleGreen-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">Empower businesses with tools that make workforce management effortless and efficient.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paleGreen-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the trusted platform that connects teams and transforms how businesses operate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-paleGreen-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                    <p className="text-gray-600">Simplicity, reliability, and putting people first in everything we build.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-paleGreen-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Powerful <span className="text-paleGreen-500">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your workforce and clients effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Team Management',
                description: 'Organize your workforce efficiently with intuitive team management tools. Assign roles, track performance, and keep everyone aligned.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                )
              },
              {
                title: 'Client Portal',
                description: 'Give your clients a seamless experience with a dedicated portal. Share updates, documents, and communicate in real-time.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                )
              },
              {
                title: 'Real-time Tracking',
                description: 'Monitor field activities in real-time with GPS tracking and live updates. Know exactly where your team is and what they\'re working on.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                )
              },
              {
                title: 'Task Automation',
                description: 'Automate repetitive tasks and workflows. Set up custom rules and let NEXIFY handle the routine work so you can focus on what matters.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              },
              {
                title: 'Analytics Dashboard',
                description: 'Make data-driven decisions with comprehensive analytics. Track KPIs, monitor trends, and get insights that drive growth.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                )
              },
              {
                title: 'Mobile Access',
                description: 'Access NEXIFY anywhere, anytime. Our mobile-first design ensures your team stays connected whether in the field or office.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                )
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-paleGreen-400 to-paleGreen-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-paleGreen-500 to-paleGreen-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses that trust NEXIFY to manage their operations
          </p>
          <button className="px-10 py-4 bg-white text-paleGreen-500 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get in <span className="text-paleGreen-500">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="bg-gradient-to-br from-paleGreen-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border border-paleGreen-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-paleGreen-500 focus:ring-2 focus:ring-paleGreen-200 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-paleGreen-500 focus:ring-2 focus:ring-paleGreen-200 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-paleGreen-500 focus:ring-2 focus:ring-paleGreen-200 outline-none transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-paleGreen-500 focus:ring-2 focus:ring-paleGreen-200 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-paleGreen-500 text-white rounded-full text-lg font-semibold hover:bg-paleGreen-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-paleGreen-400 to-paleGreen-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold">NEXIFY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses with smart workforce and client management solutions.
              </p>
              <p className="text-sm text-gray-500">
                Developed by <span className="text-paleGreen-400 font-semibold">IT SOUQ LLP</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-paleGreen-400 transition-colors">About</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Features</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-paleGreen-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-paleGreen-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NEXIFY by IT SOUQ LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
