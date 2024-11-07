import React from 'react';
import { Award, BookOpen, Users2 } from 'lucide-react';
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Ramesh Babu"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold text-blue-600">15+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-gray-600">Success</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience as a Chartered Accountant, I've helped hundreds of individuals
              and businesses achieve their financial goals through strategic planning and expert guidance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Certified Excellence</h3>
                  <p className="text-gray-600">Chartered Accountant with advanced certifications in tax law and financial planning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="text-gray-600">Regular participation in professional development to stay current with financial regulations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Client-Focused Approach</h3>
                  <p className="text-gray-600">Dedicated to providing personalized solutions and building long-term relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
