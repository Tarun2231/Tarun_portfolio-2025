import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Agriculture = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const farmingTechniques = [
    {
      name: 'Traditional Crop Farming',
      description: 'Traditional farming methods for staple crops',
      crops: ['Paddy', 'Maize', 'Peanuts'],
      features: ['Soil Preparation', 'Seed Selection', 'Crop Rotation', 'Harvest Management']
    },
    {
      name: 'Hydroponics',
      description: 'Soil-less farming using nutrient-rich water solutions',
      crops: ['Leafy Greens', 'Herbs', 'Vegetables'],
      features: ['Water Conservation', 'Faster Growth', 'Year-round Production', 'Space Efficient']
    },
    {
      name: 'Aquaponics',
      description: 'Combined fish and plant farming system',
      crops: ['Fish', 'Leafy Greens', 'Herbs'],
      features: ['Eco-friendly', 'Self-sustaining', 'High Yield', 'Organic Production']
    },
    {
      name: 'Feed Stock Production',
      description: 'Production of high-quality animal feed',
      crops: ['Azolla', 'Spirulina', 'Alfalfa'],
      features: ['Nutrient Rich', 'Cost Effective', 'Sustainable', 'High Protein']
    },
    {
      name: 'Azolla Cultivation',
      description: 'Floating fern cultivation for feed and fertilizer',
      crops: ['Azolla'],
      features: ['Nitrogen Fixation', 'Feed Supplement', 'Water Purification', 'Fast Growing']
    },
    {
      name: 'Spirulina Farming',
      description: 'Blue-green algae cultivation for nutrition',
      crops: ['Spirulina'],
      features: ['High Protein', 'Nutrient Dense', 'Medicinal Properties', 'Sustainable']
    },
    {
      name: 'Honey Bee Farming',
      description: 'Beekeeping for honey production and pollination',
      crops: ['Honey', 'Beeswax', 'Pollination Services'],
      features: ['Natural Pollination', 'Honey Production', 'Ecosystem Support', 'Additional Income']
    }
  ];

  const services = [
    {
      name: 'Training Programs',
      description: 'Comprehensive training in modern farming techniques',
      features: ['Hands-on Learning', 'Expert Guidance', 'Certification', 'Follow-up Support'],
      price: 'Starting at $100/day'
    },
    {
      name: 'Agricultural Consultancy',
      description: 'Expert advice on farm planning and optimization',
      features: ['Farm Assessment', 'Crop Planning', 'Technology Integration', 'Market Analysis'],
      price: '$150/hour'
    },
    {
      name: 'Feed Stock Supply',
      description: 'High-quality feed stock for livestock and aquaculture',
      features: ['Azolla', 'Spirulina', 'Custom Mixes', 'Regular Supply'],
      price: 'Contact for Quote'
    },
    {
      name: 'System Setup',
      description: 'Complete setup of hydroponic and aquaponic systems',
      features: ['System Design', 'Installation', 'Training', 'Maintenance Support'],
      price: 'Starting at $2,000'
    },
    {
      name: 'Organic Farming Solutions',
      description: 'Sustainable and organic farming practices',
      features: ['Organic Certification', 'Natural Pest Control', 'Compost Production', 'Soil Health'],
      price: 'Starting at $500'
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-fade-in">🚜</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Tarun <span className="text-green-600">Farms</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Growing the future, naturally.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              This venture focuses on sustainable farming, including paddy, peanuts, maize, and future bio-CNG projects. 
              It's built on innovation and eco-friendly methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => alert('Tarun Farms website is under development. Please contact us for more information.')}
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

      {/* Key Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Tarun Farms?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading the way in sustainable agriculture with innovative farming techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Methods</h3>
              <p className="text-gray-600">Eco-friendly farming practices that protect the environment</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Techniques</h3>
              <p className="text-gray-600">Modern farming methods including hydroponics and aquaponics</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Yield</h3>
              <p className="text-gray-600">Optimized production for maximum crop yield and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Techniques Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Farming Techniques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced farming methods combining traditional wisdom with modern innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmingTechniques.map((technique, index) => (
              <div
                key={technique.name}
                className="card bg-green-50 border-green-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{technique.name}</h3>
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Crops:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technique.crops.map((crop, cropIndex) => (
                      <span
                        key={cropIndex}
                        className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technique.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded"
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

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive agricultural solutions and training programs
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
                        className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-bold text-green-600 mb-4">{service.price}</div>
                
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to agricultural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-green-100">Acres Managed</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-green-100">Farming Techniques</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="text-green-100">Yield Increase</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Farming</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We believe in farming practices that protect the environment while 
                  ensuring long-term profitability. Our approach focuses on soil health, 
                  water conservation, and biodiversity.
                </p>
                <p>
                  Through innovative techniques and modern technology, we help farmers 
                  reduce their environmental impact while increasing their yields and profits.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-green-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Sustainability Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Reduce water usage by 25%
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Eliminate chemical pesticides
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Improve soil health
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Increase biodiversity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Agriculture?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing farming with sustainable, innovative techniques. 
            Get training, consultancy, or partner with us for agricultural excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Training
            </button>
            <button className="bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Request Consultancy
            </button>
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
                Interested in our farming techniques or services? Get in touch with Tarun Farms!
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us about your farming needs, training requirements, or any questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
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

export default Agriculture;
