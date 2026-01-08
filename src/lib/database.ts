import { databases } from './appwrite';
import { ID, Query } from 'appwrite';

// Database and collection IDs (you'll need to create these in Appwrite console)
export const DATABASE_ID = '695ee878003afaae3a93'; // Replace with actual database ID
export const MENTORS_COLLECTION_ID = 'mentors';
export const EXPERTS_COLLECTION_ID = 'experts';
export const FREELANCERS_COLLECTION_ID = 'freelancers';

// Mentor interface
export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  skills: string[];
  rating: number;
  reviews: number;
  price: string;
  avatar: string;
  bio: string;
}

// Expert interface
export interface Expert {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  skills: string[];
  rating: number;
  reviews: number;
  price: string;
  avatar: string;
  bio: string;
}

// Freelancer interface
export interface Freelancer {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  skills: string[];
  rating: number;
  reviews: number;
  price: string;
  avatar: string;
  bio: string;
}

// Database service functions
export class DatabaseService {
  // Mentors
  static async getMentors(): Promise<Mentor[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        MENTORS_COLLECTION_ID,
        [Query.limit(100)]
      );
      return response.documents as unknown as Mentor[];
    } catch (error) {
      console.error('Error fetching mentors:', error);
      return [];
    }
  }

  static async getMentorById(id: string): Promise<Mentor | null> {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        MENTORS_COLLECTION_ID,
        id
      );
      return response as unknown as Mentor;
    } catch (error) {
      console.error('Error fetching mentor:', error);
      return null;
    }
  }

  // Experts
  static async getExperts(): Promise<Expert[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        EXPERTS_COLLECTION_ID,
        [Query.limit(100)]
      );
      return response.documents as unknown as Expert[];
    } catch (error) {
      console.error('Error fetching experts:', error);
      return [];
    }
  }

  static async getExpertById(id: string): Promise<Expert | null> {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        EXPERTS_COLLECTION_ID,
        id
      );
      return response as unknown as Expert;
    } catch (error) {
      console.error('Error fetching expert:', error);
      return null;
    }
  }

  // Freelancers
  static async getFreelancers(): Promise<Freelancer[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        FREELANCERS_COLLECTION_ID,
        [Query.limit(100)]
      );
      return response.documents as unknown as Freelancer[];
    } catch (error) {
      console.error('Error fetching freelancers:', error);
      return [];
    }
  }

  static async getFreelancerById(id: string): Promise<Freelancer | null> {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        FREELANCERS_COLLECTION_ID,
        id
      );
      return response as unknown as Freelancer;
    } catch (error) {
      console.error('Error fetching freelancer:', error);
      return null;
    }
  }
}