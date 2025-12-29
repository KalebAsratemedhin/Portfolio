-- Storage RLS Policies for portfolio-images bucket
-- Run this SQL in your Supabase SQL Editor

-- IMPORTANT: First, make sure:
-- 1. The bucket 'portfolio-images' exists (create it in Supabase Dashboard > Storage)
-- 2. The bucket is set to PUBLIC for reading (in bucket settings)
-- 3. RLS is enabled on the storage.objects table

-- Delete any existing policies for this bucket first (optional, but recommended)
-- DROP POLICY IF EXISTS "Allow authenticated users to upload images" ON storage.objects;
-- DROP POLICY IF EXISTS "Allow public to read images" ON storage.objects;
-- DROP POLICY IF EXISTS "Allow authenticated users to update any image" ON storage.objects;
-- DROP POLICY IF EXISTS "Allow authenticated users to delete any image" ON storage.objects;

-- Policy 1: Allow authenticated users to upload (INSERT) any image file
CREATE POLICY "Allow authenticated users to upload images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'portfolio-images' AND
  (storage.extension(name) IN ('jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico'))
);

-- Policy 2: Allow public users to read (SELECT) any file from the bucket
CREATE POLICY "Allow public to read images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'portfolio-images');

-- Policy 3: Allow authenticated users to update any file in the bucket
CREATE POLICY "Allow authenticated users to update any image"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'portfolio-images')
WITH CHECK (bucket_id = 'portfolio-images');

-- Policy 4: Allow authenticated users to delete any file in the bucket
CREATE POLICY "Allow authenticated users to delete any image"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'portfolio-images');

