
import { Batch, Testimonial } from './types';

export const BATCHES: Batch[] = [
  {
    id: '1',
    category: 'ENTRANCE',
    title: 'NEET Repeaters Batch 2025',
    description: 'Intensive preparation for NEET with focus on high-yield topics and regular mock tests.',
    mentor: 'Dr. Sarah Wilson',
    startDate: '15 Aug 2024',
    duration: '10 Months',
    studentsEnrolled: 850,
    price: 45000,
    seatsLeft: 25,
    examType: 'NEET',
    classLevel: 'Repeaters',
    progress: 45,
    rating: 4.9,
    reviewCount: 342
  },
  {
    id: '2',
    category: 'ACADEMICS',
    title: 'Plus Two Science Crash Course',
    description: 'Comprehensive syllabus coverage for Class 12 Boards in a fast-paced environment.',
    mentor: 'Prof. James Miller',
    startDate: '01 Sep 2024',
    duration: '3 Months',
    studentsEnrolled: 1200,
    price: 15000,
    seatsLeft: 100,
    examType: 'Boards',
    classLevel: 'Plus Two',
    progress: 12,
    rating: 4.7,
    reviewCount: 856
  },
  {
    id: '3',
    category: 'GOVERNMENT',
    title: 'PSC Foundation Batch',
    description: 'Starting from basics to advanced levels for all major PSC competitive exams.',
    mentor: 'Mr. Robert Chen',
    startDate: '10 Aug 2024',
    duration: '12 Months',
    studentsEnrolled: 2500,
    price: 25000,
    seatsLeft: 50,
    examType: 'PSC',
    classLevel: 'Graduate',
    rating: 4.8,
    reviewCount: 1205
  },
  {
    id: '4',
    category: 'SKILLS',
    title: 'Python for Beginners',
    description: 'Master coding from scratch with hands-on projects and real-world applications.',
    mentor: 'Eng. Alice Baker',
    startDate: '20 Aug 2024',
    duration: '2 Months',
    studentsEnrolled: 500,
    price: 9999,
    seatsLeft: 10,
    examType: 'Certificate',
    classLevel: 'Open',
    progress: 85,
    rating: 4.9,
    reviewCount: 215
  },
  {
    id: '5',
    category: 'ENTRANCE',
    title: 'JEE Advanced Mastery',
    description: 'Advanced problem-solving sessions for JEE aspirants aiming for top IITs.',
    mentor: 'Prof. David Stark',
    startDate: '05 Sep 2024',
    duration: '8 Months',
    studentsEnrolled: 400,
    price: 35000,
    seatsLeft: 15,
    examType: 'JEE',
    classLevel: 'Plus Two',
    rating: 4.6,
    reviewCount: 189
  },
  {
    id: '6',
    category: 'GOVERNMENT',
    title: 'SSC CGL Tier-1 Batch',
    description: 'Focused training for quantitative aptitude, reasoning and general awareness.',
    mentor: 'Ms. Linda Gray',
    startDate: '12 Aug 2024',
    duration: '6 Months',
    studentsEnrolled: 1800,
    price: 18000,
    seatsLeft: 30,
    examType: 'SSC',
    classLevel: 'Graduate',
    rating: 4.7,
    reviewCount: 562
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Menon',
    course: 'NEET Repeaters Batch',
    quote: 'The structured approach at Edu Mentor helped me boost my score from 450 to 620 within a single attempt.',
    photo: 'https://picsum.photos/seed/anjali/100/100'
  },
  {
    id: '2',
    name: 'Kevin Thomas',
    course: 'Python for Beginners',
    quote: 'Even without a tech background, I could build a full-stack app in 2 months. The mentors are exceptional.',
    photo: 'https://picsum.photos/seed/kevin/100/100'
  },
  {
    id: '3',
    name: 'Sneha Paul',
    course: 'Plus Two Science',
    quote: 'The concepts were explained so clearly. I scored 98% in my board exams thanks to the crash course.',
    photo: 'https://picsum.photos/seed/sneha/100/100'
  },
  {
    id: '4',
    name: 'Rahul Varma',
    course: 'PSC Foundation',
    quote: 'Edu Mentor provides the most updated study material. Highly recommended for any serious aspirant.',
    photo: 'https://picsum.photos/seed/rahul/100/100'
  }
];
