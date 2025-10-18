import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const businesses = [
    {
      name: 'Website Development',
      icon: '🌐',
      description: 'Custom web solutions and digital presence',
      href: '/businesses',
      color: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      name: 'Agriculture',
      icon: '🚜',
      description: 'Modern farming and agricultural consultancy',
      href: '/businesses',
      color: 'bg-green-50 hover:bg-green-100',
    },
    {
      name: 'Car Mechanic',
      icon: '🧰',
      description: 'Professional automotive services',
      href: '/businesses',
      color: 'bg-orange-50 hover:bg-orange-100',
    },
    {
      name: 'Boutique',
      icon: '👗',
      description: 'Fashion and lifestyle retail',
      href: '/businesses',
      color: 'bg-pink-50 hover:bg-pink-100',
    },
    {
      name: 'Restaurant',
      icon: '🍽️',
      description: 'Coming Soon - Culinary excellence',
      href: '/businesses',
      color: 'bg-yellow-50 hover:bg-yellow-100',
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hi, I'm <span className="text-blue-600">Tarun</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Entrepreneur • Developer • Innovator
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              Building diverse businesses and creating opportunities through technology, agriculture, automotive services, and retail. 
              Ready to partner with visionaries who want to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/about" className="btn-primary text-lg px-8 py-3">
                Learn More About Me
              </Link>
              <Link to="/investment" className="btn-secondary text-lg px-8 py-3">
                Partner With Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Business Ventures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the diverse range of businesses I'm building and growing across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <div
                key={business.name}
                className={`card ${business.color} transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{business.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {business.name}
                    {business.comingSoon && (
                      <span className="ml-2 text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <Link
                    to={business.href}
                    className="btn-primary w-full"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/businesses" className="btn-secondary text-lg px-8 py-3">
              View All Businesses
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to invest, partner, or work together on a project, 
            I'm always open to exploring new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/investment" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Investment Opportunities
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
