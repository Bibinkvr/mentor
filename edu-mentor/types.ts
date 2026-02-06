
export interface Batch {
  id: string;
  category: string;
  title: string;
  description: string;
  mentor: string;
  startDate: string;
  duration: string;
  studentsEnrolled: number;
  price: number;
  seatsLeft?: number;
  image?: string;
  examType?: string;
  classLevel?: string;
  progress?: number; // Completion percentage (0-100)
  rating?: number; // Instructor rating (0-5)
  reviewCount?: number; // Number of reviews
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  photo: string;
}
