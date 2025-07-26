import { createClient } from '@supabase/supabase-js';

// Supabase configuration with new project credentials
const supabaseUrl = 'https://ygallbgbgowgygzzbvsi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnYWxsYmdiZ293Z3lnenpidnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNDM0OTYsImV4cCI6MjA2ODkxOTQ5Nn0.skOcQKEhsiT81Iq9NAjL-yI2h18CqFRKCziYTBP7tPA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: number;
          title: string;
          slug: string;
          content: string;
          author_name: string;
          image_url: string | null;
          published: boolean;
          created_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          content: string;
          author_name: string;
          image_url?: string | null;
          published?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          content?: string;
          author_name?: string;
          image_url?: string | null;
          published?: boolean;
        };
      };
    };
  };
};