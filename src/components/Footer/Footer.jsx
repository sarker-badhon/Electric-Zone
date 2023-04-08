import React from 'react';
import {HandRaisedIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6      lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                        <p className="text-sm">123 Main St, Bangladesh dhaka 12345</p>
                        <p className="text-sm">Email: electriczone01@gmail.com</p>
                        <p className="text-sm">Phone: 555-555-5555</p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-lg font-medium mb-2">Quick Links</h3>
                        <ul className="text-sm">
                            <li className="mb-1">
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li className="mb-1">
                                <Link to="/about">About</Link>
                            </li>
                           
                            <li className="mb-1">  
                                <Link to="/contacts">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            
                            <Link className="text-gray-400 hover:text-gray-300"  to="https://www.facebook.com/">
                            <HandRaisedIcon className="h-6 w-6 text-blue-500" />
                            </Link>
                        </div>

                    </div>
                </div>
             </div>   
        </footer>
    )
};

export default Footer;                   
