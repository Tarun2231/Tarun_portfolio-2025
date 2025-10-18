import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarMechanic = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      name: 'General Car Service',
      description: 'Comprehensive car maintenance and service for all vehicle types',
      features: ['Oil Changes', 'Filter Replacement', 'Fluid Checks', 'Tire Rotation'],
      price: 'Starting at $75'
    },
    {
      name: 'Engine & Brake Repairs',
      description: 'Professional engine diagnostics and brake system repairs',
      features: ['Engine Diagnostics', 'Brake Pad Replacement', 'Rotor Service', 'Caliper Repair'],
      price: 'Starting at $150'
    },
    {
      name: 'Periodic Maintenance',
      description: 'Scheduled maintenance to keep your vehicle running smoothly',
      features: ['Scheduled Service', 'Preventive Care', 'Inspection Reports', 'Maintenance Records'],
      price: 'Starting at $100'
    },
    {
      name: 'Vehicle Inspection',
      description: 'Thorough vehicle inspection and safety checks',
      features: ['Safety Inspection', 'Emission Testing', 'Diagnostic Scan', 'Detailed Report'],
      price: 'Starting at $50'
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
      <section className="bg-gradient-to-br from-orange-50 to-red-100 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-fade-in">🧰</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Tarun's Auto <span className="text-orange-600">Garage</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Reliable car repair & service at your doorstep.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              With hands-on experience in automobile mechanics, my garage focuses on affordable, 
              transparent, and quality car services for all types of vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => alert('Tarun\'s Auto Garage website is under development. Please contact us for more information.')}
              >
                Visit Website
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
              Comprehensive automotive services for all makes and models
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
                        className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-bold text-orange-600 mb-4">{service.price}</div>
                
                <button className="btn-primary w-full">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section-padding bg-orange-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Garage?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in automotive service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified mechanics with years of experience</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast turnaround without compromising quality</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600">Transparent pricing with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Service</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Car trouble doesn't wait for business hours. Our emergency roadside 
                  assistance is available 24/7 to help you when you need it most.
                </p>
                <p>
                  From flat tires to dead batteries, we'll get you back on the road 
                  quickly and safely, no matter the time or place.
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Call Emergency Service
                </button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-orange-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Tire changes and repairs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Jump starts and battery service
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Lockout assistance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Towing to our garage
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
                Need car service? Get in touch with Tarun's Auto Garage!
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Describe your car service needs or any questions you have..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
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

export default CarMechanic;
