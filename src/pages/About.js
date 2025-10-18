import React from 'react';

const About = () => {
  const skills = [
    {
      category: 'Technology',
      items: ['Website Development', 'Frontend Development', 'UI/UX Design', 'Digital Marketing'],
      icon: '💻',
    },
    {
      category: 'Agriculture',
      items: ['Farm Management', 'Crop Planning', 'Agricultural Consultancy', 'Sustainable Farming'],
      icon: '🌱',
    },
    {
      category: 'Automotive',
      items: ['Car Repair', 'Engine Maintenance', 'Diagnostic Services', 'Garage Management'],
      icon: '🔧',
    },
    {
      category: 'Retail',
      items: ['Fashion Design', 'Boutique Management', 'Customer Relations', 'Inventory Management'],
      icon: '👗',
    },
    {
      category: 'Business',
      items: ['Entrepreneurship', 'Project Management', 'Strategic Planning', 'Team Leadership'],
      icon: '📈',
    },
  ];

  const achievements = [
    'Successfully launched multiple businesses across different industries',
    'Built and maintained 50+ websites for clients',
    'Managed agricultural operations spanning 100+ acres',
    'Established profitable automotive service center',
    'Created thriving boutique retail business',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About <span className="text-blue-600">Tarun</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up">
              Entrepreneur, Innovator, and Multi-Industry Leader
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate entrepreneur who believes in the power of diversification and innovation. 
                  My journey began with a simple idea: why limit yourself to one industry when you can excel in multiple?
                </p>
                <p>
                  Starting with website development, I quickly realized that my skills and passion could be applied 
                  across various sectors. This led me to explore agriculture, automotive services, and retail, 
                  creating a unique portfolio of businesses that complement each other.
                </p>
                <p>
                  Today, I'm focused on building sustainable businesses that not only generate profit but also 
                  create value for communities and provide opportunities for others to grow alongside me.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission Statement</h3>
                <p className="text-gray-600">
                  "To build diverse, sustainable businesses that create value, 
                  empower communities, and provide opportunities for growth and innovation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse skill set spanning multiple industries and disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="card bg-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones and accomplishments across my business ventures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide my business decisions and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">
                I believe in the power of partnerships and collaborative growth.
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Building businesses that are environmentally and economically sustainable.
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly seeking new ways to improve and innovate in every industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
