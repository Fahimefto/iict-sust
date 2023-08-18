export const routes = [
  {
    name: 'Home',
    path: '/',
    sub: [],
  },
  {
    name: 'About IICT',
    path: '/about',
    sub: [
      {
        name: 'Institution',
        path: '/about/institute',
        sub: [],
      },
      {
        name: 'Aim & Objective',
        path: '/about/aim&objective',
        sub: [],
      },
      {
        name: 'History',
        path: '/about/history',
        sub: [],
      },
      {
        name: 'Faculty',
        path: '/about/faculty',
        sub: [],
      },
      {
        name: 'Officer & Staff',
        path: '/about/officer&staff',
        sub: [],
      },
    ],
  },
  {
    name: 'Programs',
    path: '#',
    sub: [
      {
        name: 'UnderGraduation Program',
        path: '/programs/undergraduate',
        sub: [],
      },
      {
        name: 'Graduation Program',
        path: '/programs/graduate',
        sub: [],
      },
      {
        name: 'Certificate Course',
        path: '/programs/certificate',
        sub: [],
      },
      {
        name: 'Diploma Course',
        path: '/programs/diploma',
        sub: [],
      },
    ],
  },
  {
    name: 'Notice',
    path: '#',
    sub: [
      {
        name: 'General',
        path: '/notice/general',
        sub: [],
      },
      {
        name: 'Projects',
        path: '/notice/projects',
        sub: [],
      },
      {
        name: 'UnderGraduation Program',
        path: '/notice/undergraduate',
        sub: [],
      },
      {
        name: 'Graduation Program',
        path: '/notice/graduate',
        sub: [],
      },
      {
        name: 'Certificate Course',
        path: '/notice/certificate',
        sub: [],
      },
      {
        name: 'Diploma Course',
        path: '/notice/diploma',
        sub: [],
      },
    ],
  },
  {
    name: 'Life at IICT',
    path: '#',
    sub: [
      {
        name: 'News & Events',
        path: '/life_at_iict/news',
        sub: [],
      },
      {
        name: 'Upcomming Events',
        path: '/life_at_iict/upcomming_events',
        sub: [],
      },
      {
        name: 'Achievements',
        path: '/life_at_iict/achievements',
        sub: [],
      },
    ],
  },
  {
    name: 'Research',
    path: '/research',
    sub: [],
  },
  {
    name: 'People',
    path: '#',
    sub: [
      {
        name: 'Alumni',
        path: '/people/alumni',
        sub: [],
      },
      {
        name: 'Faculty',
        path: '/people/faculty',
        sub: [],
      },
      {
        name: 'Student',
        path: '/people/student',
        sub: [],
      },
      {
        name: 'Staff',
        path: '/about/officer&staff',
        sub: [],
      },
    ],
  },
  {
    name: 'Contact',
    path: '/contact',
    sub: [],
  },
];
