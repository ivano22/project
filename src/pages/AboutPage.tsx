import React from 'react';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import { Users, Target, Award, Clock, Trophy } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="About Our Club" 
        subtitle="Discover the story, mission, and values of Gorilla Highland Sports Club"
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2012, Gorilla Highland Sports Club emerged from a passion to create opportunities 
                for talented young footballers in Uganda's highland region. What started as a small community 
                initiative has grown into one of the region's most respected football clubs.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began with a group of dedicated football enthusiasts who recognized the 
                untapped talent in the highlands. With limited resources but unlimited determination, 
                we established a club that would serve as a platform for these young talents to showcase 
                their skills and develop as athletes and individuals.
              </p>
              <p className="text-gray-700">
                Over the years, we've grown from strength to strength, developing infrastructure, 
                expanding our youth academy, and achieving success on the field. Today, we continue 
                to build on our foundation while staying true to our roots and commitment to the community.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Club History" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded shadow-lg">
                <div className="text-3xl font-bold">11</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-gray-100">
        <div className="container">
          <SectionTitle 
            title="Our Mission, Vision & Values" 
            subtitle="The principles that guide everything we do at Gorilla Highland Sports Club"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-5">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower youth through sports by providing high-quality football training, 
                education, and personal development opportunities. We aim to develop skilled 
                footballers who are also responsible citizens contributing positively to society.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-5">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become a premier sports hub for highland talent in Africa, recognized for excellence 
                in player development, community engagement, and competitive success. We envision creating 
                pathways for talented youth to reach professional levels while transforming communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Excellence:</strong> Striving for the highest standards in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Integrity:</strong> Acting with honesty and strong moral principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Community:</strong> Fostering a sense of belonging and giving back</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Innovation:</strong> Embracing new ideas and approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 font-bold mr-2">•</span>
                  <span><strong>Respect:</strong> Treating everyone with dignity and fairness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="Club Leadership" 
            subtitle="Meet the dedicated team that leads Gorilla Highland Sports Club"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Robert Mugisha" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">Robert Mugisha</h3>
              <p className="text-primary-500">Club President</p>
              <p className="text-gray-600 mt-2">
                Leading the club since 2018 with a vision for growth and community impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Sarah Namukwaya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">Sarah Namukwaya</h3>
              <p className="text-primary-500">Technical Director</p>
              <p className="text-gray-600 mt-2">
                Former national team player bringing expertise to our technical development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="John Musoke" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">John Musoke</h3>
              <p className="text-primary-500">Head Coach</p>
              <p className="text-gray-600 mt-2">
                An experienced coach with a modern approach to player development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-primary-500 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Our Achievements</h2>
              <p className="text-primary-100 mb-8">
                Since our founding in 2012, Gorilla Highland Sports Club has achieved numerous 
                milestones both on and off the pitch. We're proud of our growth and the impact 
                we've made in our community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-primary-500 mr-4 flex-shrink-0">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Regional Champions</h4>
                    <p className="text-primary-100">
                      3-time winners of the Highland Regional League (2017, 2020, 2025)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-primary-500 mr-4 flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Youth Development</h4>
                    <p className="text-primary-100">
                      Produced 12 players for the national youth teams and 3 for the senior national team
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white text-primary-500 mr-4 flex-shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Community Impact</h4>
                    <p className="text-primary-100">
                      Recognized with the 2023 Community Development Award by the Ugandan Football Federation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team celebrating with trophy" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;