'use client'
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Clock, MapPin, Mail, Star, Menu, X, ChevronRight, Heart, Stethoscope, Ambulance, Baby, Activity, Shield } from 'lucide-react';

const HospitalLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Ambulance, title: "24/7 Emergency Care", desc: "Round-the-clock emergency medical services with expert trauma care" },
    { icon: Stethoscope, title: "OPD & Diagnostics", desc: "Comprehensive outpatient services with advanced diagnostic facilities" },
    { icon: Activity, title: "Surgery & ICU", desc: "State-of-the-art operation theaters and intensive care units" },
    { icon: Baby, title: "Maternity & Child Care", desc: "Complete maternal and pediatric healthcare with NICU facilities" },
    { icon: Heart, title: "Cardiology", desc: "Advanced cardiac care with cutting-edge treatment options" },
    { icon: Shield, title: "Pharmacy & Lab", desc: "In-house pharmacy and fully equipped diagnostic laboratory" }
  ];

  const doctors = [
    { name: "Dr. Sarah Mitchell", spec: "Cardiologist", exp: "15+ years", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" },
    { name: "Dr. James Rodriguez", spec: "Orthopedic Surgeon", exp: "12+ years", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop" },
    { name: "Dr. Emily Chen", spec: "Pediatrician", exp: "10+ years", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop" },
    { name: "Dr. Michael Patel", spec: "Neurologist", exp: "18+ years", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop" }
  ];

  const testimonials = [
    { name: "Robert Johnson", text: "Exceptional care and attention. The staff made me feel safe and comfortable throughout my treatment.", rating: 5 },
    { name: "Maria Garcia", text: "The emergency team saved my life. Professional, quick, and compassionate. Forever grateful!", rating: 5 },
    { name: "David Kim", text: "Best hospital experience I've had. Clean facilities, expert doctors, and caring nurses.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 rounded-full p-2">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HealthCare Plus</h1>
                <p className="text-xs text-gray-500">Your Health, Our Priority</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition">Doctors</a>
              <a href="#facilities" className="text-gray-700 hover:text-blue-600 transition">Facilities</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+911234567890" className="text-blue-600 font-semibold flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>Emergency: +91 123 456 7890</span>
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
              <a href="#doctors" className="block text-gray-700 hover:text-blue-600">Doctors</a>
              <a href="#facilities" className="block text-gray-700 hover:text-blue-600">Facilities</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
              <a href="tel:+911234567890" className="block text-blue-600 font-semibold">Emergency: +91 123 456 7890</a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Action Bar */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" 
           className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="tel:+911234567890" 
           className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110">
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Healthcare Since 1995
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health & Safety is Our{' '}
                <span className="text-blue-600">Top Priority</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience world-class healthcare with 24/7 emergency services, expert specialists, and state-of-the-art medical facilities. Your well-being is in trusted hands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition transform hover:scale-105 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer"
                   className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition transform hover:scale-105 shadow-lg">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">ISO Certified</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop" 
                   alt="Hospital" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50,000+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare solutions with cutting-edge technology and compassionate care</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1 group">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#contact" className="text-blue-600 font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Highly qualified specialists dedicated to your health and recovery</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="relative overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{doc.spec}</p>
                  <p className="text-gray-600 text-sm mb-4">Experience: {doc.exp}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Advanced medical infrastructure for superior patient care</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Care Units</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span>24-Bed ICU with Ventilators</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span>Advanced Cardiac Care Unit</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span>Neonatal ICU (NICU)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnostics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>3 Tesla MRI & CT Scan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Digital X-Ray & Ultrasound</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>24/7 Laboratory Services</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                  <span>24/7 Ambulance Service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                  <span>Cashless Insurance Support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
                  <span>In-House Pharmacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">Real experiences from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex space-x-1 mb-4">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">{test.text}</p>
                <p className="font-semibold text-white">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Medical Plaza, Healthcare District<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">Emergency: +91 123 456 7890<br />Appointment: +91 098 765 4321</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@healthcareplus.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="text-gray-600">24/7 Emergency Services<br />OPD: Mon-Sat 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"></textarea>
                <button onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your inquiry! We will contact you shortly.');
                }} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">Send Message</button>
              </div>
            </div>
            <div className="h-96 md:h-auto rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995!3d19.082177449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold">HealthCare Plus</span>
              </div>
              <p className="text-gray-400 text-sm">Committed to excellence in healthcare, serving our community with compassion and expertise.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#doctors" className="hover:text-white transition">Doctors</a></li>
                <li><a href="#facilities" className="hover:text-white transition">Facilities</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Emergency Care</li>
                <li>Surgery</li>
                <li>Maternity</li>
                <li>Diagnostics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://wa.me/911234567890" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <a href="tel:+911234567890" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">Emergency: +91 123 456 7890</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 HealthCare Plus. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HospitalLanding;