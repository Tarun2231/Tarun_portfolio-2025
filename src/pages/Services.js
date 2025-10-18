import React from 'react';

const Services = () => {
  const services = [
    {
      category: 'Web Development',
      icon: '🌐',
      services: [
        {
          name: 'Custom Website Development',
          description: 'Tailored web solutions built from scratch',
          price: 'Starting at $2,500',
          features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'E-commerce Integration']
        },
        {
          name: 'E-commerce Solutions',
          description: 'Complete online store setup and management',
          price: 'Starting at $5,000',
          features: ['Payment Gateway Setup', 'Inventory Management', 'Order Processing', 'Analytics Dashboard']
        },
        {
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications',
          price: 'Starting at $8,000',
          features: ['iOS & Android Support', 'Cross-platform Compatibility', 'Push Notifications', 'App Store Deployment']
        }
      ],
      color: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      category: 'Agriculture',
      icon: '🚜',
      services: [
        {
          name: 'Farm Management Consulting',
          description: 'Strategic planning and optimization for agricultural operations',
          price: '$150/hour',
          features: ['Crop Planning', 'Resource Optimization', 'Market Analysis', 'Sustainability Planning']
        },
        {
          name: 'Agricultural Technology',
          description: 'Digital solutions for modern farming',
          price: 'Starting at $3,000',
          features: ['IoT Integration', 'Weather Monitoring', 'Yield Tracking', 'Automated Systems']
        },
        {
          name: 'Farm Equipment Services',
          description: 'Maintenance and repair for agricultural machinery',
          price: 'Starting at $100/hour',
          features: ['Preventive Maintenance', 'Emergency Repairs', 'Equipment Training', 'Parts Supply']
        }
      ],
      color: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      category: 'Automotive',
      icon: '🧰',
      services: [
        {
          name: 'Car Repair & Maintenance',
          description: 'Comprehensive automotive services',
          price: 'Starting at $75/hour',
          features: ['Engine Diagnostics', 'Brake Services', 'Oil Changes', 'Transmission Work']
        },
        {
          name: 'Emergency Roadside Assistance',
          description: '24/7 emergency automotive support',
          price: '$200/call',
          features: ['Tire Changes', 'Jump Starts', 'Lockout Service', 'Towing Assistance']
        },
        {
          name: 'Automotive App Development',
          description: 'Custom apps for automotive businesses',
          price: 'Starting at $4,000',
          features: ['Service Booking', 'Customer Management', 'Inventory Tracking', 'Payment Processing']
        }
      ],
      color: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      category: 'Retail & Fashion',
      icon: '👗',
      services: [
        {
          name: 'Boutique Design & Setup',
          description: 'Complete retail space design and implementation',
          price: 'Starting at $2,000',
          features: ['Space Planning', 'Visual Merchandising', 'Brand Identity', 'Inventory Management']
        },
        {
          name: 'Fashion Consulting',
          description: 'Personal and business fashion guidance',
          price: '$100/hour',
          features: ['Personal Styling', 'Wardrobe Planning', 'Trend Analysis', 'Brand Development']
        },
        {
          name: 'Online Store Development',
          description: 'E-commerce solutions for fashion retailers',
          price: 'Starting at $3,500',
          features: ['Virtual Try-On', 'Size Guides', 'Product Catalogs', 'Social Media Integration']
        }
      ],
      color: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your needs, goals, and project requirements',
      icon: '💬'
    },
    {
      step: 2,
      title: 'Proposal',
      description: 'I provide a detailed proposal with timeline and pricing',
      icon: '📋'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Work begins with regular updates and milestone reviews',
      icon: '⚙️'
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Final delivery with training and ongoing support',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              My <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Comprehensive solutions across multiple industries
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              From web development to agricultural consulting, I offer specialized services 
              tailored to meet your unique business needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {services.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <div className="text-center mb-12">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional services in {category.category.toLowerCase()} to help your business grow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.name}
                    className={`card ${category.color} border-2 ${category.borderColor} animate-slide-up`}
                    style={{ animationDelay: `${(categoryIndex * 3 + serviceIndex) * 0.1}s` }}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2">
                      <button className="btn-primary flex-1">Book Now</button>
                      <button className="btn-secondary">Learn More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process to get your project started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-gray-50 animate-slide-up">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$500</div>
                <p className="text-gray-600">Perfect for small projects</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Basic consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Simple website setup
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  1 month support
                </li>
              </ul>
              <button className="btn-secondary w-full">Choose Starter</button>
            </div>

            <div className="card bg-blue-50 border-2 border-blue-200 animate-slide-up relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$2,500</div>
                <p className="text-gray-600">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Comprehensive consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Custom development
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  3 months support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Training included
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Professional</button>
            </div>

            <div className="card bg-gray-50 animate-slide-up">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$5,000+</div>
                <p className="text-gray-600">For large-scale projects</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Dedicated consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Full-stack development
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  6 months support
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Priority support
                </li>
              </ul>
              <button className="btn-secondary w-full">Contact for Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Free Consultation
            </a>
            <a href="/portfolio" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
