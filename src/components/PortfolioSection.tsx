
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Banking Mobile App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      tech: ['React Native', 'Firebase', 'API Integration']
    },
    {
      title: 'Cloud Infrastructure',
      category: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure migration for a growing enterprise company.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tech: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Healthcare System',
      category: 'Custom Software',
      description: 'Comprehensive healthcare management system with patient records and scheduling.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Analytics',
      description: 'Real-time business intelligence dashboard with interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tech: ['Python', 'D3.js', 'PostgreSQL']
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with CMS and multi-language support.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop',
      tech: ['WordPress', 'PHP', 'MySQL']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/5 p-0"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
