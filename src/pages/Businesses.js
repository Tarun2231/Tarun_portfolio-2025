import React from 'react';
import { useNavigate } from 'react-router-dom';

const Businesses = () => {
  const navigate = useNavigate();
  const businesses = [
    {
      name: 'Website Development',
      icon: '🌐',
      description: 'Full-service web development and digital solutions',
      status: 'Active',
      details: [
        'Custom website design and development',
        'E-commerce solutions',
        'Mobile-responsive design',
        'SEO optimization',
        'Digital marketing services'
      ],
      website: '#',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800',
      route: '/business/website-development',
    },
    {
      name: 'Agriculture & Farming',
      icon: '🚜',
      description: 'Modern agricultural practices and farm management',
      status: 'Active',
      details: [
        'Crop planning and management',
        'Agricultural consultancy',
        'Farm equipment services',
        'Sustainable farming practices',
        'Market analysis and planning'
      ],
      website: '#',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      route: '/business/agriculture',
    },
    {
      name: 'Car Mechanic & Garage',
      icon: '🧰',
      description: 'Professional automotive repair and maintenance services',
      status: 'Active',
      details: [
        'Engine repair and maintenance',
        'Diagnostic services',
        'Brake and suspension work',
        'Oil changes and tune-ups',
        'Emergency roadside assistance'
      ],
      website: '#',
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-800',
      route: '/business/car-mechanic',
    },
    {
      name: 'Boutique & Fashion',
      icon: '👗',
      description: 'Fashion retail and lifestyle products',
      status: 'Active',
      details: [
        'Fashion design and retail',
        'Custom clothing services',
        'Accessories and lifestyle products',
        'Personal styling consultations',
        'Online and offline retail'
      ],
      website: 'https://tarun2231.github.io/Botique_Website-OCT12-V1.0/#/',
      color: 'bg-pink-50 border-pink-200',
      textColor: 'text-pink-800',
      route: '/business/boutique',
    },
    {
      name: 'Restaurant & Culinary',
      icon: '🍽️',
      description: 'Fine dining and culinary experiences',
      status: 'Coming Soon',
      details: [
        'Fine dining restaurant',
        'Catering services',
        'Cooking classes',
        'Private dining events',
        'Food delivery services'
      ],
      website: '#',
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-800',
      comingSoon: true,
      route: '/business/restaurant',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              My <span className="text-green-600">Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Diverse ventures across multiple industries
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              Explore the range of businesses I've built and continue to grow. Each venture represents 
              a different passion and opportunity to serve unique markets.
            </p>
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <div
                key={business.name}
                className={`card ${business.color} border-2 animate-slide-up cursor-pointer hover:scale-105 transition-transform duration-200`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(business.route)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{business.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${business.textColor} bg-white`}>
                        {business.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{business.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {business.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button
                    className={`btn-primary flex-1 text-center ${
                      business.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (business.comingSoon) {
                        e.preventDefault();
                        return;
                      }
                      // If website is a real URL, open it; otherwise navigate to landing page
                      if (business.website && business.website !== '#') {
                        window.open(business.website, '_blank');
                      } else {
                        navigate(business.route);
                      }
                    }}
                    disabled={business.comingSoon}
                  >
                    {business.comingSoon ? 'Coming Soon' : 'Visit Website'}
                  </button>
                  <button 
                    className="btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(business.route);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="animate-slide-up">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diversification</h3>
                <p className="text-gray-600">
                  Spreading risk and opportunity across multiple industries and markets.
                </p>
              </div>
              <div className="animate-slide-up">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Building businesses that are environmentally and economically sustainable.
                </p>
              </div>
              <div className="animate-slide-up">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  Creating value for communities and opportunities for others to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always looking for opportunities to collaborate, invest, or partner with like-minded individuals and organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/investment" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Explore Partnerships
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;
