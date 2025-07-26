import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://ohckaorfccmtudjdzlrb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oY2thb3JmY2NtdHVkamR6bHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MjE4MzIsImV4cCI6MjA2OTA5NzgzMn0.VZqMX7yEYJ8o7BXD_1K3D1ypqP6M3P0rBX_6YoiDzWs';

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