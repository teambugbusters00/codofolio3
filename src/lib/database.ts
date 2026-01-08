import { databases } from './appwrite'; // Ensure appwrite.ts is in the same folder (src/lib/)
import { Query } from 'appwrite';

// Environment Variables
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const MENTORS_COLLECTION_ID = 'mentors'; // Or use import.meta.env.VITE_MENTORS_COLLECTION_ID
export const EXPERTS_COLLECTION_ID = 'experts';
export const FREELANCERS_COLLECTION_ID = 'freelancers';

// --- Interfaces ---

export interface Mentor {
  $id: string;
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

export interface Expert {
  $id: string;
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

export interface Freelancer {
  $id: string;
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

// --- Service Class ---

export class DatabaseService {
  
  // 1. Mentors
  static async getMentors(): Promise<Mentor[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        MENTORS_COLLECTION_ID,
        [
            Query.limit(100),
            Query.orderDesc('$createdAt') // Optional: Get newest first
        ]
      );
      
      // Map $id to id to ensure compatibility with your UI key={mentor.id}
      const documents = response.documents.map(doc => ({
        ...doc,
        id: doc.$id 
      })) as unknown as Mentor[];

      return documents;
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
      return { ...response, id: response.$id } as unknown as Mentor;
    } catch (error) {
      console.error('Error fetching mentor:', error);
      return null;
    }
  }

  // 2. Experts
  static async getExperts(): Promise<Expert[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        EXPERTS_COLLECTION_ID,
        [Query.limit(100)]
      );
      const documents = response.documents.map(doc => ({
        ...doc,
        id: doc.$id
      })) as unknown as Expert[];
      
      return documents;
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
      return { ...response, id: response.$id } as unknown as Expert;
    } catch (error) {
      console.error('Error fetching expert:', error);
      return null;
    }
  }

  // 3. Freelancers
  static async getFreelancers(): Promise<Freelancer[]> {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        FREELANCERS_COLLECTION_ID,
        [Query.limit(100)]
      );
      const documents = response.documents.map(doc => ({
        ...doc,
        id: doc.$id
      })) as unknown as Freelancer[];
      
      return documents;
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
      return { ...response, id: response.$id } as unknown as Freelancer;
    } catch (error) {
      console.error('Error fetching freelancer:', error);
      return null;
    }
  }
}