import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      name: 'Dine-In Experience',
      description: 'Unique dining experiences with quality, taste, and exceptional service',
      features: ['Multiple Cuisines', 'Cozy Ambiance', 'Fresh Ingredients', 'Professional Service'],
      status: 'Coming Soon'
    },
    {
      name: 'Online Ordering',
      description: 'Convenient online ordering system for takeout and delivery',
      features: ['Easy Ordering', 'Fast Delivery', 'Menu Updates', 'Order Tracking'],
      status: 'Future'
    },
    {
      name: 'Catering Services',
      description: 'Professional catering for events, parties, and special occasions',
      features: ['Event Planning', 'Custom Menus', 'Professional Staff', 'Equipment Setup'],
      status: 'Future'
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
    alert('Thank you for your interest! I will get back to you when the restaurant opens.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-fade-in">🍽️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Tarun's <span className="text-yellow-600">Restaurant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Serving good food with love — coming soon!
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              This is my upcoming restaurant venture, focused on delivering unique dining experiences 
              with quality, taste, and service. It will offer multiple cuisines and a cozy ambiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button className="btn-primary text-lg px-8 py-3" disabled>
                Coming Soon
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
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-lg font-medium">
              🚧 Coming Soon - Restaurant Opening 2024
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
              Culinary experiences for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`card bg-white animate-slide-up ${
                  service.status === 'Coming Soon' || service.status === 'Future' ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    service.status === 'Coming Soon' ? 'bg-yellow-200 text-yellow-800' :
                    service.status === 'Future' ? 'bg-gray-200 text-gray-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {service.status}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Restaurant Concept */}
      <section className="section-padding bg-yellow-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Restaurant Concept
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A vision for exceptional dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🍷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fine Dining</h3>
              <p className="text-gray-600">Elegant atmosphere with exceptional cuisine and service</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Farm to Table</h3>
              <p className="text-gray-600">Fresh, locally sourced ingredients for the best flavors</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chef-Driven</h3>
              <p className="text-gray-600">Creative menus crafted by experienced culinary professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Opening Timeline</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We're excited to announce the opening of our fine dining restaurant in 2024. 
                  Our team is working hard to create an exceptional dining experience that 
                  combines culinary excellence with warm hospitality.
                </p>
                <p>
                  In the meantime, we're offering catering services, cooking classes, 
                  and private dining events to give you a taste of what's to come.
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Get Updates
                </button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-yellow-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Elegant dining room with modern design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Seasonal menus featuring local ingredients
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Extensive wine and cocktail selection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Private dining rooms for special events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Investment Form */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Invest / Partner With Us
              </h2>
              <p className="text-xl text-gray-300">
                Interested in investing in or partnering with Tarun's Restaurant? Get in touch!
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tell us about your investment interest or partnership proposal..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
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

export default Restaurant;
