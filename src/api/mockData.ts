import { Player, NewsArticle, Project, Product, VolunteerOpportunity } from './types';

// Mock Team Players
export const mockPlayers: Player[] = [
  {
    id: 1,
    name: 'David Kato',
    position: 'Striker',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'A prolific goal scorer and club top scorer in 2024. David joined the club in 2020 and has been instrumental in our recent success.',
    stats: {
      appearances: 42,
      goals: 28,
      assists: 7,
      yellowCards: 3,
      redCards: 0,
    },
    socialMedia: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 2,
    name: 'Joseph Mugisha',
    position: 'Midfielder',
    image: 'https://images.pexels.com/photos/6605304/pexels-photo-6605304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'The engine of the team with exceptional passing ability. Joseph is a local talent who has been with the club since its founding.',
    stats: {
      appearances: 50,
      goals: 8,
      assists: 22,
      yellowCards: 5,
      redCards: 1,
    },
    socialMedia: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 3,
    name: 'Richard Okello',
    position: 'Defender',
    image: 'https://images.pexels.com/photos/7991497/pexels-photo-7991497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'A rock-solid center back and team captain. Richard leads by example and has been crucial to our defensive stability.',
    stats: {
      appearances: 48,
      goals: 2,
      assists: 1,
      yellowCards: 4,
      redCards: 0,
    },
    socialMedia: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 4,
    name: 'Samuel Byaruhanga',
    position: 'Goalkeeper',
    image: 'https://images.pexels.com/photos/7991495/pexels-photo-7991495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'A commanding presence between the posts. Samuel has kept 15 clean sheets this season and is known for his excellent distribution.',
    stats: {
      appearances: 45,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
    },
    socialMedia: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: 5,
    name: 'Martin Tumusiime',
    position: 'Midfielder',
    image: 'https://images.pexels.com/photos/8761764/pexels-photo-8761764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'A creative playmaker with exceptional technical skills. Martin can change the game in an instant with his vision and passing.',
    stats: {
      appearances: 38,
      goals: 6,
      assists: 15,
      yellowCards: 2,
      redCards: 0,
    },
    socialMedia: {
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 6,
    name: 'Alex Mutungi',
    position: 'Defender',
    image: 'https://images.pexels.com/photos/6605303/pexels-photo-6605303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'A versatile defender who can play across the backline. Alex is known for his speed and ability to join the attack.',
    stats: {
      appearances: 40,
      goals: 1,
      assists: 3,
      yellowCards: 7,
      redCards: 0,
    },
    socialMedia: {
      instagram: 'https://instagram.com',
    },
  },
];

// Mock News Articles
export const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Gorilla Highland SC wins regional championship',
    slug: 'gorilla-highland-sc-wins-regional-championship',
    excerpt: 'Our team lifted the trophy after a thrilling final match against Kisoro United.',
    content: 'In a thrilling match that went into extra time, Gorilla Highland Sports Club secured a 2-1 victory against Kisoro United to claim the regional championship trophy. David Kato scored the winning goal in the 112th minute, sending fans into wild celebrations.\n\nThe victory marks the club\'s third regional title in its history and qualifies the team for the national championship tournament next month.\n\n"This is a result of the hard work and dedication from everyone at the club," said head coach John Musoke. "From the players to the staff and our amazing supporters, this victory belongs to all of us."',
    date: '2025-05-10',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Competitions',
    author: 'Admin',
  },
  {
    id: 2,
    title: 'New Coach Appointed',
    slug: 'new-coach-appointed',
    excerpt: 'Coach John Musoke brings international experience to Gorilla Highland SC.',
    content: 'Gorilla Highland Sports Club is delighted to announce the appointment of John Musoke as the new head coach. Musoke joins us with extensive experience, having coached in Kenya, Tanzania, and most recently with the Uganda U-23 national team.\n\nWith over 15 years of coaching experience and a UEFA B License, Coach Musoke brings valuable knowledge and a modern approach to training methodology.\n\n"I\'m thrilled to join Gorilla Highland SC and be part of this ambitious project," said Musoke. "The club has tremendous potential, and I look forward to developing the talented players here and achieving success together."',
    date: '2025-05-01',
    image: 'https://images.pexels.com/photos/2042322/pexels-photo-2042322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Club News',
    author: 'Admin',
  },
  {
    id: 3,
    title: 'Youth Academy Expansion',
    slug: 'youth-academy-expansion',
    excerpt: 'Our club is investing in the future with an expanded youth development program.',
    content: 'Gorilla Highland Sports Club is proud to announce a significant expansion of our youth academy program. The expanded academy will now accommodate players from ages 8-18 across six different age groups.\n\nThe expansion includes hiring three new youth coaches, improving training facilities, and establishing partnerships with local schools to support talented young players with their education alongside football development.\n\n"Investing in youth development is crucial for the long-term success of our club," said Technical Director Robert Mugisha. "We believe in nurturing local talent and providing a pathway to professional football for promising players from the highlands region."',
    date: '2025-04-15',
    image: 'https://images.pexels.com/photos/3767442/pexels-photo-3767442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Youth Development',
    author: 'Admin',
  },
  {
    id: 4,
    title: 'Stadium Renovation Project Begins',
    slug: 'stadium-renovation-project-begins',
    excerpt: 'Major upgrades to our home ground will improve the experience for players and fans.',
    content: 'Work has begun on a comprehensive renovation of the Gorilla Highland Stadium. The project, expected to be completed in six months, includes expanding seating capacity to 5,000, installing a new drainage system, upgrading the playing surface, and improving spectator facilities.\n\nThe renovation is made possible by a grant from the Ugandan Football Federation and generous donations from club sponsors and supporters.\n\n"These improvements will not only benefit our team but will also allow us to host regional tournaments and provide a better experience for our loyal fans," said Club President Sarah Namukwaya. "We\'re grateful to everyone who has contributed to making this project a reality."',
    date: '2025-03-20',
    image: 'https://images.pexels.com/photos/6599760/pexels-photo-6599760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Infrastructure',
    author: 'Admin',
  },
];

// Mock Projects
export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'Youth Empowerment League',
    description: 'A football league for underprivileged teenagers, providing structured training, mentorship, and educational support.',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2024-01-15',
    impact: 'Currently supporting 120 young players from 8 communities.',
  },
  {
    id: 2,
    name: 'Girls in Football Initiative',
    description: 'Breaking down barriers to female participation in football through dedicated coaching, equipment provision, and community engagement.',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/3776861/pexels-photo-3776861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2023-09-01',
    impact: '85 girls now actively participating in regular training sessions.',
  },
  {
    id: 3,
    name: 'Community Pitch Renovation',
    description: 'Renovating five community football pitches to provide safe playing surfaces for local children and youth teams.',
    status: 'Completed',
    image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2023-03-10',
    endDate: '2023-12-15',
    impact: 'Created 5 safe playing areas serving over 500 children weekly.',
  },
  {
    id: 4,
    name: 'Football & Education Scholarships',
    description: 'Providing academic scholarships to talented young footballers to ensure they can continue their education while developing as athletes.',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/8197035/pexels-photo-8197035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2024-02-01',
    impact: '12 student-athletes currently receiving full scholarships.',
  },
  {
    id: 5,
    name: 'Coach Education Program',
    description: 'Training local coaches to international standards, improving the quality of football education throughout the region.',
    status: 'Ongoing',
    image: 'https://images.pexels.com/photos/2042322/pexels-photo-2042322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2023-11-05',
    impact: '25 coaches certified to date, impacting over 500 young players.',
  },
  {
    id: 6,
    name: 'Health & Wellness Outreach',
    description: 'Using football as a platform to deliver health education and wellness programs to communities across the highlands region.',
    status: 'Upcoming',
    image: 'https://images.pexels.com/photos/6111611/pexels-photo-6111611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    startDate: '2025-07-01',
  },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Gorilla SC Home Jersey 2024/25',
    slug: 'gorilla-sc-home-jersey-2024-25',
    price: 50000,
    image: 'https://images.pexels.com/photos/4148932/pexels-photo-4148932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The official home jersey for the 2024/25 season. Features our signature green design with highland-inspired patterns. Made from 100% recycled polyester.',
    category: 'Jerseys',
    inStock: true,
  },
  {
    id: 2,
    name: 'Gorilla SC Away Jersey 2024/25',
    slug: 'gorilla-sc-away-jersey-2024-25',
    price: 50000,
    image: 'https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The official away jersey for the 2024/25 season. Features a bold red design with black accents. Made from 100% recycled polyester.',
    category: 'Jerseys',
    inStock: true,
  },
  {
    id: 3,
    name: 'Gorilla SC Training Jacket',
    slug: 'gorilla-sc-training-jacket',
    price: 70000,
    salePrice: 60000,
    image: 'https://images.pexels.com/photos/10201047/pexels-photo-10201047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Stay warm during training with our official club jacket. Features water-resistant material and the club logo embroidered on the chest.',
    category: 'Training Wear',
    inStock: true,
  },
  {
    id: 4,
    name: 'Gorilla SC Football',
    slug: 'gorilla-sc-football',
    price: 25000,
    image: 'https://images.pexels.com/photos/3601093/pexels-photo-3601093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Official Gorilla Highland SC football. Size 5, match quality ball with club colors and logo.',
    category: 'Equipment',
    inStock: true,
  },
  {
    id: 5,
    name: 'Gorilla SC Cap',
    slug: 'gorilla-sc-cap',
    price: 15000,
    image: 'https://images.pexels.com/photos/8285741/pexels-photo-8285741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Adjustable club cap in green with embroidered club logo. One size fits all.',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 6,
    name: 'Gorilla SC Track Pants',
    slug: 'gorilla-sc-track-pants',
    price: 45000,
    image: 'https://images.pexels.com/photos/10201072/pexels-photo-10201072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Official club track pants with zippered pockets and ankle zips. Features club logo embroidered on the leg.',
    category: 'Training Wear',
    inStock: false,
  },
  {
    id: 7,
    name: 'Gorilla SC Scarf',
    slug: 'gorilla-sc-scarf',
    price: 20000,
    image: 'https://images.pexels.com/photos/12813099/pexels-photo-12813099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Show your support with our official club scarf. Features club colors and logo.',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: 8,
    name: 'Gorilla SC Water Bottle',
    slug: 'gorilla-sc-water-bottle',
    price: 12000,
    image: 'https://images.pexels.com/photos/3737784/pexels-photo-3737784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: '750ml BPA-free water bottle with club logo. Perfect for training or matchday.',
    category: 'Accessories',
    inStock: true,
  },
];

// Mock Volunteer Opportunities
export const mockVolunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 1,
    title: 'Youth Coach Assistant',
    description: 'Assist our youth coaches with training sessions, matchday preparation, and player development.',
    requirements: [
      'Basic understanding of football',
      'Enjoy working with children and teenagers',
      'Available at least 2 evenings per week',
      'Commitment to at least 3 months',
    ],
    location: 'Gorilla Highland Stadium',
    commitment: 'Part-time, 6-8 hours weekly',
  },
  {
    id: 2,
    title: 'Community Outreach Volunteer',
    description: 'Help us engage with local communities through football workshops, health initiatives, and educational programs.',
    requirements: [
      'Good communication skills',
      'Knowledge of local communities and culture',
      'Available for weekend events',
      'Own transportation preferred',
    ],
    location: 'Various locations in the highlands region',
    commitment: 'Flexible, 4-6 hours weekly',
  },
  {
    id: 3,
    title: 'Matchday Support',
    description: 'Assist with various aspects of matchday operations, including ticketing, stewarding, and fan engagement.',
    requirements: [
      'Reliable and punctual',
      'Good communication skills',
      'Able to work in a fast-paced environment',
      'Available on matchdays (primarily weekends)',
    ],
    location: 'Gorilla Highland Stadium',
    commitment: 'Event-based, 4-6 hours per match',
  },
  {
    id: 4,
    title: 'Social Media Content Creator',
    description: 'Help us create engaging content for our social media channels, including match highlights, player profiles, and community stories.',
    requirements: [
      'Experience with photography, videography, or graphic design',
      'Understanding of social media platforms',
      'Creative storytelling ability',
      'Own equipment (camera, smartphone, etc.)',
    ],
    location: 'Remote with occasional on-site work',
    commitment: 'Flexible, 5-10 hours weekly',
  },
];

// Mock API Functions
export const fetchPlayers = (): Promise<Player[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPlayers);
    }, 500);
  });
};

export const fetchPlayer = (id: number): Promise<Player | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPlayers.find(player => player.id === id));
    }, 500);
  });
};

export const fetchNews = (): Promise<NewsArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews);
    }, 500);
  });
};

export const fetchNewsArticle = (slug: string): Promise<NewsArticle | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews.find(article => article.slug === slug));
    }, 500);
  });
};

export const fetchProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects);
    }, 500);
  });
};

export const fetchProject = (id: number): Promise<Project | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects.find(project => project.id === id));
    }, 500);
  });
};

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

export const fetchProduct = (slug: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.find(product => product.slug === slug));
    }, 500);
  });
};

export const fetchVolunteerOpportunities = (): Promise<VolunteerOpportunity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVolunteerOpportunities);
    }, 500);
  });
};