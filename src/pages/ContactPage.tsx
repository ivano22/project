import React, { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../api/types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is being edited
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission (would be replaced with actual API call to Contact Form 7)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with Gorilla Highland Sports Club"
        backgroundImage="https://images.pexels.com/photos/8761764/pexels-photo-8761764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We'd love to hear from you. Reach out with any questions, suggestions, or partnership inquiries."
                center={false}
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Gorilla Highland Stadium, Kisoro District, Uganda
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+256777123456" className="hover:text-primary-500">
                        +256 777 123 456
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+256712987654" className="hover:text-primary-500">
                        +256 712 987 654
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@gorillahighlandsc.com" className="hover:text-primary-500">
                        info@gorillahighlandsc.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:partnership@gorillahighlandsc.com" className="hover:text-primary-500">
                        partnership@gorillahighlandsc.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {submitSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Your message has been sent successfully! We'll get back to you soon.</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input ${errors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input ${errors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input ${errors.subject ? 'border-red-500' : ''}`}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Youth Academy">Youth Academy</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="h-5 w-5\" viewBox="0 0 24 24">
                            <circle 
                              className="opacity-25" 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="4" 
                              fill="none"
                            ></circle>
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Visit Our Stadium" 
            subtitle="Come experience the excitement of Gorilla Highland SC in person"
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-300">
              {/* Here we would normally embed a Google Map, but for mock purposes we're using an image */}
              <img 
                src="https://images.pexels.com/photos/6599760/pexels-photo-6599760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Stadium location" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Gorilla Highland Stadium</h3>
              <p className="text-gray-600 mb-4">
                Located in the beautiful Kisoro District of Uganda, our stadium is home to exciting 
                football matches, training sessions, and community events throughout the year.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Getting Here</h4>
                  <p className="text-gray-600 mb-2">
                    The stadium is easily accessible by both public and private transport.
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>35 minutes from Kisoro Town</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>Public transport available from central bus station</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>Ample parking available for private vehicles</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Match Days</h4>
                  <p className="text-gray-600 mb-2">
                    Join us for our home matches throughout the season!
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>League matches typically held on Saturdays at 3 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>Tickets available at the stadium entrance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 font-bold mr-2">•</span>
                      <span>Special rates for children and groups</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="#" className="btn btn-primary">
                  Get Directions <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding missing imports
import { CheckCircle } from 'lucide-react';

export default ContactPage;