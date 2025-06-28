import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About Wheelz
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in seamless car rental experiences. We're
            revolutionizing the way people travel by making car rental simple,
            affordable, and reliable.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2025, Wheelz began with a simple mission: to make car
                rental accessible to everyone. What started as a small local
                service has grown into a nationwide network of trusted car
                rental partners.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that everyone deserves the freedom to explore,
                whether it's a weekend getaway, a business trip, or a family
                vacation. Our platform connects travelers with reliable vehicles
                from trusted owners, creating a community built on trust and
                shared experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve thousands of customers across the country,
                offering everything from compact cars to luxury vehicles, all
                with transparent pricing and exceptional customer service.
              </p>
            </div>
            <div className="relative">
              <img
                src={assets.carImg2}
                alt="Wheelz car rental"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We're driven by our commitment to provide exceptional service and
              create meaningful connections between car owners and renters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={assets.shieldIcon} alt="Trust" className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                Trust & Safety
              </h3>
              <p className="text-gray-600">
                Every vehicle on our platform is verified and insured. We
                prioritize your safety with comprehensive background checks and
                24/7 support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src={assets.carIcon}
                  alt="Convenience"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                Convenience
              </h3>
              <p className="text-gray-600">
                Book your perfect car in minutes with our streamlined process.
                Pick up and drop off at your convenience with flexible options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src={assets.starIcon} alt="Quality" className="w-8 h-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-4">
                Quality Service
              </h3>
              <p className="text-gray-600">
                We maintain high standards for all vehicles and provide
                exceptional customer support to ensure your rental experience
                exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Wheelz by the Numbers
            </h2>
            <p className="text-blue-100 text-lg">
              Our impact in numbers - serving communities across the country
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Vehicles Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our dedicated team works tirelessly to ensure you have the best
              car rental experience possible. We're here to help you every step
              of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Abdelrahman Ezzelregal
              </h3>
              <p className="text-blue-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about revolutionizing the car rental industry and
                creating meaningful connections between travelers and car
                owners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Mahmoud Reda
              </h3>
              <p className="text-blue-600 mb-4">CTO</p>
              <p className="text-gray-600 text-sm">
                Leading our technology initiatives to create seamless, secure,
                and user-friendly car rental experiences for our community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Salah El-Refaey
              </h3>
              <p className="text-blue-600 mb-4">Head of Customer Success</p>
              <p className="text-gray-600 text-sm">
                Ensuring every customer has an exceptional experience with
                personalized support and innovative solutions to meet their
                needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Omar Samir
              </h3>
              <p className="text-blue-600 mb-4">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Overseeing day-to-day operations and ensuring smooth logistics
                for our nationwide car rental network and fleet management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Abdelrahman Fathy
              </h3>
              <p className="text-blue-600 mb-4">Head of Marketing</p>
              <p className="text-gray-600 text-sm">
                Driving brand awareness and customer acquisition through
                innovative marketing strategies and partnerships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Omar Header
              </h3>
              <p className="text-blue-600 mb-4">Head of Finance</p>
              <p className="text-gray-600 text-sm">
                Managing financial operations and ensuring sustainable growth
                through strategic financial planning and risk management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img
                  src={assets.userIcon}
                  alt="Team member"
                  className="w-16 h-16 text-gray-400"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                Yousef Shaheen
              </h3>
              <p className="text-blue-600 mb-4">Head of Legal</p>
              <p className="text-gray-600 text-sm">
                Ensuring compliance with regulations and protecting our business
                interests while maintaining the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Wheelz for their car
            rental needs. Start exploring today with our wide selection of
            vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Cars
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
