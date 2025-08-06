'use client';

import { useState } from 'react';
import { 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  Code
} from 'lucide-react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Debug Website
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to the{' '}
            <span className="text-blue-600 dark:text-blue-400">Debug Website</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            This is a simple React/TypeScript/Tailwind website template for testing the Azure publish feature. 
            No AI was used in the generation of this website.
          </p>
          
          {/* Interactive Counter */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Interactive Counter: <span className="font-bold text-blue-600">{count}</span>
            </p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Increment
            </button>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Get Started</span>
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-32">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fast Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with Next.js for optimal performance and SEO.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Type Safe
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full TypeScript support for better development experience.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beautiful Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Styled with Tailwind CSS for modern, responsive design.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-32">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About This Template
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a debug website template created specifically for testing the Azure publish functionality. 
              It includes all the necessary files for a complete Next.js application with TypeScript and Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              The template demonstrates:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>React components with TypeScript</li>
              <li>Tailwind CSS styling</li>
              <li>Interactive elements (counter)</li>
              <li>Responsive design</li>
              <li>Dark mode support</li>
              <li>Proper file structure</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-32">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Test?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This template is ready to be published to Azure Container Apps for testing the deployment pipeline.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
              <Heart className="h-5 w-5" />
              <span>Test Publish Feature</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Debug Website Template - Created for Azure Publish Testing
          </p>
          <p className="text-gray-500 text-sm mt-2">
            No AI was used in the generation of this website
          </p>
        </div>
      </footer>
    </div>
  );
}