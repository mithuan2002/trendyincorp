# Overview

Trendy Incorp is a modern full-stack web application for a garment manufacturing company based in Tirupur, Tamil Nadu. The application serves as a corporate website showcasing the company's manufacturing capabilities, services, and contact information, specifically targeting European markets for garment exports. Built with a React frontend and Express.js backend, the project follows a monorepo structure with shared types and schemas.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 and TypeScript, utilizing modern development practices:

- **Framework**: React with TypeScript for type safety and component-based architecture
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI design
- **Routing**: React Router DOM for client-side navigation with a single-page application approach
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Extensive use of Radix UI primitives through shadcn/ui for accessible, customizable components

The frontend follows a component-based architecture with sections for navigation, hero, about, services, contact, and footer. The design emphasizes modern aesthetics with gradient backgrounds, smooth transitions, and responsive layouts targeting both desktop and mobile users.

## Backend Architecture
The backend uses Express.js with TypeScript in an ESM (ES Modules) configuration:

- **Framework**: Express.js for REST API development
- **Runtime**: Node.js with TypeScript compilation via tsx for development
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Layer**: Abstracted storage interface with both in-memory and database implementations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload support with Vite integration for seamless full-stack development

The backend follows a clean architecture pattern with separated concerns for routing, storage, and business logic. The storage layer uses an interface-based approach allowing for easy switching between different storage implementations.

## Database Design
The application uses PostgreSQL as the primary database with Drizzle ORM:

- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Automatic TypeScript type generation from database schema
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Models**: User management with username/password authentication structure
- **Validation**: Zod integration for runtime type validation and schema enforcement

The database schema is defined in a shared module, ensuring consistency between frontend and backend type definitions.

## Development Workflow
The project uses a modern development setup optimized for full-stack development:

- **Monorepo Structure**: Organized into client, server, and shared directories
- **Type Sharing**: Common types and schemas shared between frontend and backend
- **Hot Reload**: Vite-powered development with instant updates
- **Path Aliases**: Configured import aliases for clean, maintainable code organization
- **Environment Configuration**: Environment-based configuration for different deployment stages

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for REST API development
- **TypeScript**: Type safety across the entire application stack
- **Vite**: Build tool and development server for optimal performance

## Database and ORM
- **PostgreSQL**: Primary database system via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database toolkit with automatic TypeScript generation
- **@neondatabase/serverless**: Serverless PostgreSQL connection for cloud deployment
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built component library based on Radix UI primitives
- **Radix UI**: Comprehensive set of accessible, unstyled UI components
- **Lucide React**: Icon library for consistent iconography throughout the application

## Development and Build Tools
- **tsx**: TypeScript execution environment for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching solution
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Form validation resolvers for various schema libraries
- **Zod**: Runtime type validation and schema definition

## Additional Integrations
- **date-fns**: Date manipulation and formatting utilities
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility for dynamic styling
- **cmdk**: Command palette component for enhanced user experience

The application is designed to be deployed on Replit with specific plugins and configurations for that environment, including cartographer for code visualization and runtime error handling.