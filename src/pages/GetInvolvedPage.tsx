import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVolunteerOpportunities } from '../api/mockData';
import { VolunteerOpportunity } from '../api/types';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import { Users, DollarSign, Handshake, CheckCircle, Calendar, MapPin, Clock } from 'lucide-react';

const GetInvolvedPage: React.FC = () => {
  const [opportunities, setOpportunities] = useState<VolunteerOpportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await fetchVolunteerOpportunities();
        setOpportunities(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch volunteer opportunities:', error);
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  return (
    <div>
      <PageHero 
        title="Get Involved" 
        subtitle="Join us in making a difference through football"
        backgroundImage="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="Ways to Support" 
            subtitle="There are many ways you can contribute to our mission"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 text-primary-500 mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your time and skills to support our programs. Whether it's coaching, 
                administrative support, or event assistance, your help makes a difference.
              </p>
              <a href="#volunteer-opportunities" className="text-primary-500 font-medium hover:text-primary-600">
                View Opportunities →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 text-primary-500 mb-6">
                <DollarSign className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Your financial support helps us provide equipment, facilities, 
                and opportunities for talented young players from underprivileged backgrounds.
              </p>
              <a href="#donation-options" className="text-primary-500 font-medium hover:text-primary-600">
                Support Us →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary-100 text-primary-500 mb-6">
                <Handshake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Organizations and businesses can partner with us through sponsorships, 
                joint initiatives, or in-kind support for our programs and events.
              </p>
              <a href="#partnership" className="text-primary-500 font-medium hover:text-primary-600">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="volunteer-opportunities" className="section bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Volunteer Opportunities" 
            subtitle="Join our team of dedicated volunteers making a difference in the community"
          />
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse h-64 bg-white rounded-lg shadow-md"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opportunity) => (
                <div 
                  key={opportunity.id} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {opportunity.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {opportunity.commitment}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits your skills? We're always looking for passionate people 
              to join our team. Contact us to discuss how you can contribute.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div id="donation-options" className="section">
        <div className="container">
          <SectionTitle 
            title="Support Our Cause" 
            subtitle="Your donation helps us empower youth through football"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Donate?</h3>
              <p className="text-gray-700 mb-4">
                Your support enables us to provide quality training, equipment, and opportunities 
                for young players, particularly those from underprivileged backgrounds. 
                Every contribution, no matter the size, makes a difference.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Equipment and Kits</h4>
                    <p className="text-sm text-gray-600">
                      Provide footballs, training equipment, and kits for youth players.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Scholarships</h4>
                    <p className="text-sm text-gray-600">
                      Support educational opportunities for talented young players.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Community Projects</h4>
                    <p className="text-sm text-gray-600">
                      Fund community initiatives that use football as a tool for social change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-500 mr-3 flex-shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Facility Improvements</h4>
                    <p className="text-sm text-gray-600">
                      Help us improve training facilities and playing surfaces.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary">
                Donate Today
              </Link>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sponsor a Player</h3>
              <p className="text-gray-700 mb-6">
                Make a direct impact by sponsoring a youth player's development. Your monthly 
                contribution covers training, equipment, tournament participation, and educational support.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Basic Sponsorship</h4>
                    <span className="font-bold text-primary-500">UGX 50,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Covers basic training and equipment needs.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Standard Sponsorship</h4>
                    <span className="font-bold text-primary-500">UGX 100,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Includes training, equipment, and tournament participation.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Comprehensive Sponsorship</h4>
                    <span className="font-bold text-primary-500">UGX 200,000/month</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Full coverage including education support and mentorship.
                  </p>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-outline w-full">
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="partnership" className="section bg-primary-500 text-white">
        <div className="container">
          <SectionTitle 
            title="Partnership Opportunities" 
            subtitle="Join forces with us to create positive change in our community"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Club Sponsorship</h3>
              <p className="text-gray-200 mb-4">
                Become a club sponsor with your brand featured on our kits, 
                stadium, and promotional materials. Gain visibility while supporting 
                our mission.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Project Partnership</h3>
              <p className="text-gray-200 mb-4">
                Collaborate on specific community projects aligned with your 
                organization's CSR goals. Create targeted impact in areas like 
                education, health, or infrastructure.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Event Sponsorship</h3>
              <p className="text-gray-200 mb-4">
                Sponsor tournaments, camps, or community events. 
                These high-visibility opportunities provide excellent 
                brand exposure and community engagement.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">In-Kind Support</h3>
              <p className="text-gray-200 mb-4">
                Provide goods or services that support our operations, 
                such as equipment, transportation, medical services, 
                or professional expertise.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Academy Sponsorship</h3>
              <p className="text-gray-200 mb-4">
                Support our youth academy by sponsoring a specific age group 
                or the entire academy program. Help develop the next generation 
                of talented players.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Media Partnership</h3>
              <p className="text-gray-200 mb-4">
                Partner with us to share our stories and impact. 
                Media organizations can help amplify our message 
                and reach a wider audience.
              </p>
              <Link to="/contact" className="text-white font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-gray-100">
              Discuss Partnership Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedPage;