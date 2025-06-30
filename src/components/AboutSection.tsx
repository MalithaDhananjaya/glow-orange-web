
import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Target, number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechSolutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading IT services company dedicated to helping businesses thrive in the digital age
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Our team working together" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in the IT industry, we have helped hundreds of businesses 
              transform their operations through innovative technology solutions. Our team of certified 
              professionals is committed to delivering excellence in every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From small startups to large enterprises, we provide tailored IT services that drive growth, 
              improve efficiency, and secure your digital infrastructure. We believe in building long-term 
              partnerships with our clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Certified IT professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Industry-leading security practices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">24/7 monitoring and support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
