import { supabase } from './supabase';

// SQL commands to set up the posts table and RLS
const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    author_name TEXT NOT NULL,
    image_url TEXT,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
`;

const SETUP_RLS_SQL = `
  -- Enable RLS on posts table
  ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
  
  -- Allow anonymous users to read published posts
  CREATE POLICY IF NOT EXISTS "Allow anonymous read access" ON posts
    FOR SELECT USING (published = true);
  
  -- Allow anonymous users to insert posts (for demo purposes)
  CREATE POLICY IF NOT EXISTS "Allow anonymous insert access" ON posts
    FOR INSERT WITH CHECK (true);
  
  -- Allow anonymous users to update posts (for demo purposes)
  CREATE POLICY IF NOT EXISTS "Allow anonymous update access" ON posts
    FOR UPDATE USING (true);
`;

export async function setupDatabase() {
  try {
    console.log('Setting up database...');
    
    // Test connection first
    const { data: connectionTest, error: connectionError } = await supabase
      .from('posts')
      .select('count', { count: 'exact', head: true });
    
    if (connectionError) {
      if (connectionError.message.includes('relation "posts" does not exist')) {
        console.log('Posts table does not exist, it needs to be created manually in Supabase Dashboard');
        throw new Error(`
          Posts table does not exist. Please follow these steps:
          
          1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/ygallbgbgowgygzzbvsi
          2. Click on "SQL Editor" in the left sidebar
          3. Run this SQL command:
          
          ${CREATE_TABLE_SQL}
          ${SETUP_RLS_SQL}
          
          Then try again.
        `);
      } else {
        throw new Error(`Database connection failed: ${connectionError.message}`);
      }
    }
    
    console.log('Database connection successful');
    return { success: true, message: 'Database is ready' };
    
  } catch (error) {
    console.error('Database setup error:', error);
    throw error;
  }
}

export async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      throw new Error(`Connection test failed: ${error.message}`);
    }
    
    return { success: true, count: data?.[0]?.count || 0 };
  } catch (error) {
    console.error('Connection test error:', error);
    throw error;
  }
}