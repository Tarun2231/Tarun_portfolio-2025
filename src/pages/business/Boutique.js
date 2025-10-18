import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Boutique = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      name: 'Custom Stitching',
      description: 'Personalized clothing tailored to your exact measurements and preferences',
      features: ['Custom Fitting', 'Design Consultation', 'Premium Fabrics', 'Alterations'],
      price: 'Starting at $50'
    },
    {
      name: 'Traditional Wear',
      description: 'Authentic traditional clothing and cultural attire',
      features: ['Cultural Designs', 'Traditional Patterns', 'Quality Materials', 'Custom Sizing'],
      price: 'Starting at $75'
    },
    {
      name: 'Designer Collections',
      description: 'Exclusive fashion collections and trendy designs',
      features: ['Latest Trends', 'Unique Designs', 'Limited Editions', 'Premium Quality'],
      price: 'Starting at $100'
    },
    {
      name: 'Bulk Orders',
      description: 'Large quantity orders for events, organizations, or businesses',
      features: ['Volume Discounts', 'Custom Branding', 'Fast Turnaround', 'Quality Assurance'],
      price: 'Contact for Quote'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-100 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-fade-in">👗</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Tarun's <span className="text-pink-600">Boutique</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Where elegance meets style.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              A space dedicated to custom clothing, fashion design, and stitching services. 
              We provide personalized designs that make every outfit unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => window.open('https://tarun2231.github.io/Botique_Website-OCT12-V1.0/#/', '_blank')}
              >
                Visit Boutique Website
              </button>
              <button 
                className="btn-secondary text-lg px-8 py-3"
                onClick={() => navigate('/businesses')}
              >
                ← Back to Businesses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Status Badge */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-lg font-medium">
              ✅ Active Business
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete fashion and lifestyle solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="card bg-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-bold text-pink-600 mb-4">{service.price}</div>
                
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Fashion Philosophy */}
      <section className="section-padding bg-pink-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fashion Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What drives our passion for fashion and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Individuality</h3>
              <p className="text-gray-600">Celebrating unique personal style and self-expression</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Ethical fashion choices that care for people and planet</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Premium materials and craftsmanship in every piece</p>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Styling Services</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Transform your wardrobe with our professional styling services. 
                  Our expert stylists help you discover your personal style and 
                  create looks that make you feel confident and beautiful.
                </p>
                <p>
                  From wardrobe planning to special event styling, we provide 
                  personalized guidance to help you look and feel your best.
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Book Styling Session
                </button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-pink-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Styling Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Personal color analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Body type styling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Wardrobe organization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Shopping assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-300">
                Need custom clothing or fashion services? Get in touch with Tarun's Boutique!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Tell us about your fashion needs, custom requirements, or any questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="text-center mt-8">
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => navigate('/businesses')}
              >
                ← Back to Businesses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boutique;
