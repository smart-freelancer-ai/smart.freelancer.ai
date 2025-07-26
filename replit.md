# Replit.md

## Overview

This is a full-stack web application built with React frontend and Express backend, featuring an Arabic-language website called "المستقل الذكي" (Smart Freelancer). The application uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and Supabase for database operations with a dynamic blog content management system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Supabase (@supabase/supabase-js)
- **Database Provider**: Supabase (https://ygallbgbgowgygzzbvsi.supabase.co)
- **Content Management**: Dynamic blog system with CRUD operations
- **API Structure**: Direct Supabase client-side integration

### Key Design Decisions

**Monorepo Structure**: The application uses a shared folder architecture where:
- `client/` contains the React frontend
- `server/` contains the Express backend  
- `shared/` contains shared TypeScript types and database schema

**RTL Support**: The application is designed for Arabic content with RTL (right-to-left) text direction and uses the Tajawal Google Font for proper Arabic typography.

**Component Architecture**: Uses a component-based architecture with:
- Layout component wrapping all pages
- Reusable UI components from shadcn/ui
- Custom components for Navbar and Footer

## Key Components

### Database Schema
- **Posts Table**: Blog post management with id, title, slug, content, author_name, image_url, published, created_at fields
- **Supabase Configuration**: Configured for PostgreSQL with Row Level Security for anonymous access

### Frontend Pages
- **Home**: Landing page with feature cards and Arabic content
- **Blog**: Dynamic blog listing page with Supabase integration
- **Admin**: Content management interface for creating blog posts
- **Services**: Services showcase page (placeholder)  
- **Contact**: Contact information page (placeholder)
- **404**: Not found page with error handling

### Backend Services
- **Storage Interface**: Abstracted storage layer with CRUD operations
- **Memory Storage**: In-memory implementation for development
- **Route Registration**: Centralized route management system

## Data Flow

1. **Client-Side Rendering**: React components render on the client
2. **API Communication**: TanStack React Query manages server state and API calls
3. **Backend Processing**: Express routes handle API requests
4. **Database Operations**: Drizzle ORM provides type-safe database access
5. **Response Handling**: JSON responses with error handling middleware

## External Dependencies

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Class Variance Authority for component variants

### Database and Content Management
- Supabase for PostgreSQL database hosting and real-time features
- React Hook Form for form handling with Zod validation
- TanStack React Query for server state management

### Development Tools
- Vite for fast development and building
- TypeScript for type safety
- ESBuild for server bundling
- TSX for TypeScript execution

## Deployment Strategy

**Build Process**: 
- Frontend builds to `dist/public` using Vite
- Backend bundles to `dist/index.js` using ESBuild
- Shared types are included in both builds

**Environment Configuration**:
- Supabase project URL and anon key configured directly in client
- Current project: https://ygallbgbgowgygzzbvsi.supabase.co
- Row Level Security enabled for anonymous access
- Production/development modes supported
- Replit-specific development features included

**Serving Strategy**:
- Static files served from dist/public in production
- Development uses Vite middleware for HMR
- API routes prefixed with /api to avoid conflicts

The application follows modern web development best practices with TypeScript throughout, comprehensive error handling, and a scalable architecture suitable for a freelancer services platform with dynamic content management capabilities.

## Recent Changes (January 2025)

**Supabase Integration**: Migrated from Neon Database to Supabase for better real-time capabilities and easier management. Updated project to use new Supabase project (ygallbgbgowgygzzbvsi).

**Dynamic Blog System**: Implemented complete blog content management with:
- Dynamic blog post fetching and display
- Admin interface for content creation
- Arabic content support with proper RTL layout
- Automatic slug generation for Arabic titles
- Image support and publish/unpublish functionality

**UI/UX Improvements**: Fixed all React nested anchor warnings, improved navigation, and enhanced Arabic typography with proper RTL support throughout the application.