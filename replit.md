# Replit.md

## Overview

This is a full-stack web application built with React frontend and Express backend, featuring an Arabic-language website called "المستقل الذكي" (Smart Freelancer). The application uses a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and Drizzle ORM for database operations.

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
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Built-in storage interface with in-memory implementation
- **API Structure**: RESTful API with /api prefix routing

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
- **Users Table**: Basic user management with id, username, and password fields
- **Drizzle Configuration**: Configured for PostgreSQL with migrations support

### Frontend Pages
- **Home**: Landing page with feature cards and Arabic content
- **Blog**: Blog listing page (placeholder)
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

### Backend
- Express.js for server framework
- Drizzle ORM for database operations
- Neon Database for PostgreSQL hosting
- Connect-pg-simple for session storage

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
- Database URL required via `DATABASE_URL` environment variable
- Production/development modes supported
- Replit-specific development features included

**Serving Strategy**:
- Static files served from dist/public in production
- Development uses Vite middleware for HMR
- API routes prefixed with /api to avoid conflicts

The application follows modern web development best practices with TypeScript throughout, comprehensive error handling, and a scalable architecture suitable for a freelancer services platform.