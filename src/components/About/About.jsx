
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">About Us</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Our Mission</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit vestibulum neque, vitae lobortis velit fringilla ac. 
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Our Vision</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit vestibulum neque, vitae lobortis velit fringilla ac. 
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Our Values</h3>
            <ul className="mt-1 max-w-2xl text-sm text-gray-500 list-disc pl-5">
              <li className="mb-2">Integrity</li>
              <li className="mb-2">Customer Service</li>
              <li className="mb-2">Sustainability</li>
              <li className="mb-2">Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;