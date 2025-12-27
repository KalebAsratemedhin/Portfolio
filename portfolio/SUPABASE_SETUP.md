# Supabase Setup Guide

This guide will help you set up Supabase integration for your portfolio project.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A Supabase project created

## Step 1: Create Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings:
- Go to your Supabase project dashboard
- Navigate to Settings → API
- Copy the "Project URL" and "anon public" key

## Step 2: Set Up the Database Table

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `supabase-setup.sql` file

This will:
- Create the `projects` table with the required schema
- Insert sample data (optional - you can delete the INSERT statements if you want to add your own data)
- Set up Row Level Security (RLS) policies for public read access

## Step 3: Verify the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the projects section of your portfolio
3. The projects should now be loaded from your Supabase database

## Database Schema

The `projects` table has the following structure:

- `id` (BIGSERIAL) - Primary key
- `title` (TEXT) - Project title
- `description` (TEXT) - Project description
- `tech` (TEXT[]) - Array of technologies used
- `link` (TEXT) - GitHub repository link
- `live` (TEXT, nullable) - Live demo URL (optional)
- `date` (TEXT) - Project date range
- `created_at` (TIMESTAMP) - Auto-generated timestamp
- `updated_at` (TIMESTAMP) - Auto-generated timestamp

## Adding Projects

You can add projects through:
1. Supabase Dashboard → Table Editor → projects table
2. SQL Editor (using INSERT statements)
3. Supabase API (programmatically)

## Troubleshooting

- **"Missing Supabase environment variables"**: Make sure your `.env.local` file exists and contains the correct values
- **"Failed to load projects"**: Check your Supabase project URL and anon key are correct, and that the `projects` table exists
- **Empty projects list**: Verify that you have data in your `projects` table



