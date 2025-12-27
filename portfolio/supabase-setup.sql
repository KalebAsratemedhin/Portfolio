-- Create projects table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech TEXT[] NOT NULL,
  link TEXT NOT NULL,
  live TEXT,
  date TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert sample data (optional - you can delete this after setting up your own data)
INSERT INTO projects (title, description, tech, link, live, date) VALUES
(
  'Efoy Hospital Appointment Manager',
  'Efoy is a platform for hospitals aimed at facilitating appointment bookings. It provides a capability for patients to book appointments online. Doctors can easily manage their appointments and plan their day effectively. It aims to solve the challenges that patients face when it comes to booking appointments in Ethiopia and other developing countries as well.',
  ARRAY['React', 'Node.js', 'MongoDB', 'Redux Toolkit'],
  'https://github.com/KalebAsratemedhin/Efoy_Hospital_Appointment_Manager',
  'http://efoy-appointment-manager.onrender.com',
  'July, 2024 - Sept, 2024'
),
(
  'AutoFlash',
  'AutoFlash is a car rental platform. It provides a capability for users to rent cars from anywhere and even pay for it. It also allows admins to track rents easily and visualize their income and customer base.',
  ARRAY['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  'https://github.com/KalebAsratemedhin/Auto-Flash-car-rental',
  NULL,
  'Nov, 2024 - Present'
),
(
  'SkillTrade',
  'SkillTrade is a platform to connect skilled handy-people with customers. It provides an opportunity for people to use their technical skills to make money and create a difference.',
  ARRAY['Nest.js', 'Typescript', 'HTML', 'PostgreSQL'],
  'https://github.com/KalebAsratemedhin/SkillTrade',
  NULL,
  'Jan, 2023 - Feb, 2024'
);

-- Enable Row Level Security (RLS) - optional, but recommended for production
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read projects (public read access)
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT
  USING (true);



