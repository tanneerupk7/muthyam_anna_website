import React from 'react';
import { Calculator, PieChart, FileText, TrendingUp, Building2, Users } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Tax Planning & Preparation',
    description: 'Comprehensive tax services for individuals and businesses, ensuring compliance and maximizing returns.'
  },
  {
    icon: PieChart,
    title: 'Financial Planning',
    description: 'Strategic financial planning to help you achieve your long-term goals and secure your future.'
  },
  {
    icon: FileText,
    title: 'Bookkeeping',
    description: 'Accurate and timely bookkeeping services to keep your finances organized and compliant.'
  },
  {
    icon: TrendingUp,
    title: 'Business Advisory',
    description: 'Expert guidance on business growth, strategy, and financial decision-making.'
  },
  {
    icon: Building2,
    title: 'Corporate Finance',
    description: 'Specialized services for corporate entities including auditing and financial reporting.'
  },
  {
    icon: Users,
    title: 'Estate Planning',
    description: 'Comprehensive estate planning services to protect and transfer your wealth effectively.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Services Offered</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive financial services tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-6 rounded-lg">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}