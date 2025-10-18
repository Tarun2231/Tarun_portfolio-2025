import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      category: 'Web Development',
      description: 'Complete e-commerce solution with payment integration and inventory management',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Live',
      link: '#',
      color: 'bg-blue-50',
    },
    {
      title: 'Farm Management System',
      category: 'Agriculture',
      description: 'Digital platform for crop planning, weather tracking, and yield optimization',
      image: '🌾',
      technologies: ['React', 'Python', 'PostgreSQL', 'Weather API'],
      status: 'Live',
      link: '#',
      color: 'bg-green-50',
    },
    {
      title: 'Automotive Service App',
      category: 'Automotive',
      description: 'Mobile app for booking car services, tracking repairs, and maintenance schedules',
      image: '🚗',
      technologies: ['React Native', 'Firebase', 'Google Maps'],
      status: 'Live',
      link: '#',
      color: 'bg-orange-50',
    },
    {
      title: 'Fashion Boutique Website',
      category: 'Retail',
      description: 'Modern online store with virtual try-on features and personalized recommendations',
      image: '👗',
      technologies: ['Next.js', 'Shopify', 'AI/ML'],
      status: 'Live',
      link: '#',
      color: 'bg-pink-50',
    },
    {
      title: 'Restaurant Management System',
      category: 'Food & Beverage',
      description: 'Complete POS system with inventory management and customer analytics',
      image: '🍽️',
      technologies: ['Vue.js', 'Express.js', 'MySQL'],
      status: 'In Development',
      link: '#',
      color: 'bg-yellow-50',
    },
    {
      title: 'Investment Portfolio Tracker',
      category: 'Finance',
      description: 'Real-time portfolio tracking with market analysis and investment recommendations',
      image: '📈',
      technologies: ['React', 'Python', 'Financial APIs'],
      status: 'Live',
      link: '#',
      color: 'bg-purple-50',
    },
  ];

  const categories = ['All', 'Web Development', 'Agriculture', 'Automotive', 'Retail', 'Food & Beverage', 'Finance'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              My <span className="text-purple-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Projects and solutions across all my business ventures
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto animate-slide-up">
              From web development to agricultural technology, explore the diverse range of projects 
              I've completed and continue to work on.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    index === 0
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`card ${project.color} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{project.image}</div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-200 text-green-800' 
                        : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                </div>

                <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={project.link}
                    className="btn-primary flex-1 text-center text-sm"
                  >
                    View Project
                  </a>
                  <button className="btn-secondary text-sm px-3">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Statistics</h2>
            <p className="text-lg text-gray-600">Numbers that speak to my commitment and success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-600">Feedback from satisfied clients across different industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-blue-50 animate-slide-up">
              <div className="text-center">
                <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">
                  "Tarun delivered an exceptional e-commerce website that exceeded our expectations. 
                  The attention to detail and user experience is outstanding."
                </p>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">Retail Client</div>
              </div>
            </div>
            <div className="card bg-green-50 animate-slide-up">
              <div className="text-center">
                <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">
                  "The farm management system revolutionized our operations. We've seen a 30% increase 
                  in efficiency since implementing Tarun's solution."
                </p>
                <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                <div className="text-sm text-gray-600">Farm Owner</div>
              </div>
            </div>
            <div className="card bg-orange-50 animate-slide-up">
              <div className="text-center">
                <div className="text-2xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4">
                  "Professional, reliable, and innovative. Tarun's automotive app has streamlined our 
                  service bookings and improved customer satisfaction significantly."
                </p>
                <div className="font-semibold text-gray-900">David Chen</div>
                <div className="text-sm text-gray-600">Garage Owner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with innovative solutions and expert execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              View Services
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg">
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
