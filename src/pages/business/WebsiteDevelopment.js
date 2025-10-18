import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: 'Custom Website Development',
      description: 'Tailored web solutions built from scratch to meet your specific needs',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Mobile-First'],
      price: 'Starting at $2,500'
    },
    {
      name: 'E-commerce Solutions',
      description: 'Complete online store setup with payment integration and inventory management',
      features: ['Payment Gateway', 'Inventory Management', 'Order Processing', 'Analytics'],
      price: 'Starting at $5,000'
    },
    {
      name: 'Web Application Development',
      description: 'Custom web applications for business processes and automation',
      features: ['User Management', 'Database Integration', 'API Development', 'Security'],
      price: 'Starting at $8,000'
    },
    {
      name: 'Website Maintenance',
      description: 'Ongoing support, updates, and optimization for your website',
      features: ['Regular Updates', 'Security Patches', 'Performance Optimization', 'Backup'],
      price: 'Starting at $200/month'
    }
  ];

  const technologies = ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Next.js', 'TypeScript'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-fade-in">🌐</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Website <span className="text-blue-600">Development</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Full-service web development and digital solutions
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              Creating modern, responsive, and scalable websites that drive business growth. 
              From simple landing pages to complex web applications, I deliver solutions that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button className="btn-primary text-lg px-8 py-3">
                Get Quote
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
              Comprehensive web development solutions tailored to your business needs
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
                        className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, proven technologies for reliable and scalable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering exceptional web solutions
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and project requirements</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <div className="w-8 h-8 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Creating wireframes and visual designs</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Building your website with clean, efficient code</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Start Your Project
            </button>
            <button 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
