import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      details: 'tarun@example.com',
      description: 'Send me an email anytime',
      action: 'mailto:tarun@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call me during business hours',
      action: 'tel:+15551234567'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+1 (555) 123-4567',
      description: 'Quick messages and updates',
      action: 'https://wa.me/15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Your City, Country',
      description: 'Available for local meetings',
      action: '#'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Let's start a conversation
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              Whether you're interested in my services, investment opportunities, or just want to connect, 
              I'd love to hear from you. Reach out using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="card bg-gray-50 hover:bg-gray-100 transition-colors duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">{method.details}</p>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="btn-primary w-full"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development Services</option>
                    <option value="agriculture">Agriculture Consulting</option>
                    <option value="automotive">Automotive Services</option>
                    <option value="retail">Retail & Fashion</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project, needs, or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-3"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              {/* Business Hours */}
              <div className="card bg-white mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="card bg-blue-50 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Phone: Same day</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">WhatsApp: Within 2 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Me</h2>
            <p className="text-lg text-gray-600">Located in the heart of the city</p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🗺️</div>
              <p>Interactive map would be embedded here</p>
              <p className="text-sm">Your City, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you start a new project?</h3>
              <p className="text-gray-600">Most projects can begin within 1-2 weeks after initial consultation and agreement.</p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
              <p className="text-gray-600">Yes, I work with clients worldwide. Remote collaboration is one of my specialties.</p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's your minimum investment amount?</h3>
              <p className="text-gray-600">Investment opportunities start from $10,000, with various options available for different budgets.</p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, all projects include post-launch support. Extended support packages are also available.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
