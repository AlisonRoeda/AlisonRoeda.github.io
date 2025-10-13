'use client';

import Link from "next/link";
import Image from "next/image";
import LiquidEther from "../components/LiquidEther";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "EnforcAR",
      category: "AR/VR",
      description: "Revolutionary AR-powered license plate scanning system for law enforcement using Snap Spectacles. Features hands-free operation, real-time recognition, and pinch-to-capture gestures.",
      image: "/images/projects/EnforcAR.png",
      link: "http://enforcar.ojlennon.com/",
      github: "https://github.com/ojlennon/MHacks2025",
      technologies: ["AR", "Computer Vision", "Snap Spectacles", "AI"],
      featured: true
    },
    {
      id: 2,
      title: "Tree Simulator",
      category: "Game Development",
      description: "An immersive Unity-based tree simulation game that explores the lifecycle and growth patterns of trees in various environments.",
      image: "/images/projects/Treesim.png",
      link: "https://play.unity.com/en/games/74d6626a-1486-46e6-964a-35c5ec5c6890/tree-simulator",
      github: "https://github.com/AlisonRoeda/Tree-Simulator-",
      technologies: ["Unity", "C#", "3D Graphics", "Game Design"],
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Development",
      description: "A modern, interactive portfolio website built with Next.js featuring liquid animations, responsive design, and immersive visual effects.",
      image: "/images/projects/WebsiteHome.png",
      link: "https://alisonroeda.github.io/",
      github: "https://github.com/AlisonRoeda/AlisonRoeda.github.io",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"],
      featured: true
    }
  ];


  return (
    <div className="min-h-screen bg-black relative">
      {/* LiquidEther Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <LiquidEther
          colors={['#6366F1', '#8B5CF6', '#A855F7', '#C084FC', '#72c7f3']}
          mouseForce={80}
          cursorSize={40}
          resolution={0.4}
          autoDemo={false}
          isViscous={true}
          viscous={70}
          iterationsViscous={50}
          iterationsPoisson={50}
          dt={0.016}
          key="liquid-ether-stable"
          style={{ 
            width: '100%', 
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>

      {/* Header Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Projects
              </h1>
              <p className="text-lg text-gray-400">
                A collection of my work
              </p>
            </div>
            <Link
              href="/"
              className="inline-block text-white px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-lg border border-gray-600 hover:border-gray-400"
              style={{
                background: 'transparent',
                color: '#B9D5E3'
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>


      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ 
                      background: '#676388',
                      color: '#B9D5E3'
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full border"
                      style={{ 
                        background: 'transparent',
                        color: '#B9D5E3',
                        borderColor: '#676388'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-flex items-center justify-center flex-1 px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 rounded-lg border"
                    style={{ 
                      background: 'transparent',
                      color: '#B9D5E3',
                      borderColor: '#B9D5E3'
                    }}
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 rounded-lg border"
                      style={{ 
                        background: 'transparent',
                        color: '#B9D5E3',
                        borderColor: '#676388'
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
}
