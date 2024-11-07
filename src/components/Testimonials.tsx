import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Thompson',
    role: 'Small Business Owner',
    content: 'Ramesh\'s expertise in tax planning saved our business thousands of dollars. His attention to detail and proactive approach is exactly what we needed.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    content: 'Working with Ramesh has been transformative for our startup. His strategic financial guidance helped us make informed decisions during critical growth phases.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'David Chen',
    role: 'Real Estate Investor',
    content: 'Ramesh\'s deep understanding of real estate taxation and investment strategies has been invaluable. He\'s more than an accountant; he\'s a trusted advisor.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
