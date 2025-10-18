import React, { useState } from 'react';

const Investment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    investmentType: ''
  });

  const investmentOpportunities = [
    {
      name: 'Website Development Expansion',
      status: 'Active',
      description: 'Scaling web development services with new team and advanced technologies',
      investmentNeeded: '$50,000 - $100,000',
      expectedReturn: '25-35% annually',
      timeline: '12-18 months',
      icon: '🌐',
      color: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Agricultural Technology Platform',
      status: 'Active',
      description: 'Developing IoT-based farm management system for modern agriculture',
      investmentNeeded: '$75,000 - $150,000',
      expectedReturn: '30-40% annually',
      timeline: '18-24 months',
      icon: '🚜',
      color: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      name: 'Automotive Service Chain',
      status: 'Planning',
      description: 'Expanding automotive services to multiple locations',
      investmentNeeded: '$100,000 - $200,000',
      expectedReturn: '20-30% annually',
      timeline: '24-36 months',
      icon: '🧰',
      color: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      name: 'Fashion Retail Network',
      status: 'Active',
      description: 'Growing boutique business with online and offline presence',
      investmentNeeded: '$30,000 - $75,000',
      expectedReturn: '22-32% annually',
      timeline: '12-24 months',
      icon: '👗',
      color: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      name: 'Restaurant Chain',
      status: 'Coming Soon',
      description: 'Launching fine dining restaurant with expansion plans',
      investmentNeeded: '$150,000 - $300,000',
      expectedReturn: '15-25% annually',
      timeline: '36-48 months',
      icon: '🍽️',
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    }
  ];

  const whyInvest = [
    {
      title: 'Proven Track Record',
      description: 'Successfully launched and scaled multiple businesses across different industries',
      icon: '📈'
    },
    {
      title: 'Diversified Portfolio',
      description: 'Reduced risk through investments across multiple sectors and markets',
      icon: '🎯'
    },
    {
      title: 'Innovation Focus',
      description: 'Constantly adapting to market changes and implementing cutting-edge solutions',
      icon: '💡'
    },
    {
      title: 'Strong Leadership',
      description: 'Experienced entrepreneur with clear vision and execution capabilities',
      icon: '👨‍💼'
    },
    {
      title: 'Market Opportunities',
      description: 'Identifying and capitalizing on emerging trends and underserved markets',
      icon: '🌍'
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates, clear reporting, and open communication with investors',
      icon: '📊'
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! I will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Investment <span className="text-green-600">Opportunities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Partner with me to build the future
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              Join me in building diverse, sustainable businesses across multiple industries. 
              I'm seeking strategic partners and investors who share my vision for growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the investment opportunities available across my business portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <div
                key={opportunity.name}
                className={`card ${opportunity.color} border-2 ${opportunity.borderColor} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{opportunity.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.name}</h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        opportunity.status === 'Active' 
                          ? 'bg-green-200 text-green-800'
                          : opportunity.status === 'Planning'
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {opportunity.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{opportunity.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Investment Needed</h4>
                    <p className="text-sm text-gray-600">{opportunity.investmentNeeded}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expected Return</h4>
                    <p className="text-sm text-gray-600">{opportunity.expectedReturn}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Timeline</h4>
                    <p className="text-sm text-gray-600">{opportunity.timeline}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Status</h4>
                    <p className="text-sm text-gray-600">{opportunity.status}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="btn-primary flex-1">View Details</button>
                  <button className="btn-secondary">Contact Me</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Invest With Me?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key reasons why partnering with me is a smart investment decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInvest.map((reason, index) => (
              <div
                key={reason.title}
                className="card bg-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent and structured approach to investment partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💬</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Discussion</h3>
              <p className="text-gray-600">We discuss your investment goals and my opportunities</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">📋</span>
              </div>
              <div className="w-8 h-8 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Due Diligence</h3>
              <p className="text-gray-600">Comprehensive review of business plans and financials</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Agreement</h3>
              <p className="text-gray-600">Legal documentation and investment terms finalization</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth & Returns</h3>
              <p className="text-gray-600">Regular updates and profit sharing as planned</p>
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
                Interested in Investing?
              </h2>
              <p className="text-xl text-gray-300">
                Let's discuss how we can work together to achieve mutual success
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="investmentType" className="block text-sm font-medium text-gray-300 mb-2">
                  Investment Interest
                </label>
                <select
                  id="investmentType"
                  name="investmentType"
                  value={formData.investmentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="website">Website Development</option>
                  <option value="agriculture">Agriculture Technology</option>
                  <option value="automotive">Automotive Services</option>
                  <option value="retail">Fashion Retail</option>
                  <option value="restaurant">Restaurant Chain</option>
                  <option value="multiple">Multiple Opportunities</option>
                </select>
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your investment goals and how we can work together..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Send Investment Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
