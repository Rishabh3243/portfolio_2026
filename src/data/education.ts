import { Education } from '../types';

export const educationData: Education[] = [
  {
    id: 'bvm-btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'Birla Vishvakarma Mahavidyalaya (BVM)',
    location: 'Anand, Gujarat, India',
    period: '2021 – 2025',
    score: '8.55 / 10',
    scoreLabel: 'CPI (80.5%)',
    highlights: [
      'Focus: Deep Learning, Computer Vision, Edge Systems, Data Structures & Algorithms',
      'Chairperson of GeeksforGeeks Student Chapter (2023–2024)',
      'Smart India Hackathon 2023 National Winner'
    ],
  },
  {
    id: 'abps-hsc',
    degree: 'Higher Secondary Certificate (HSC - XII)',
    field: 'Science Stream (CBSE)',
    institution: 'The Aditya Birla Public School',
    location: 'Bharuch, Gujarat, India',
    period: '2020 – 2021',
    score: '90.4%',
    scoreLabel: 'CBSE Board',
    highlights: ['Focus in Physics, Chemistry, and Mathematics'],
  },
  {
    id: 'abps-ssc',
    degree: 'Secondary School Certificate (SSC - X)',
    field: 'General Academics (CBSE)',
    institution: 'The Aditya Birla Public School',
    location: 'Bharuch, Gujarat, India',
    period: '2018 – 2019',
    score: '87.0%',
    scoreLabel: 'CBSE Board',
    highlights: ['Distinction in Mathematics and Science'],
  },
];
