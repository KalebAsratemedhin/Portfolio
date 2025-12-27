export interface Project {
  id: number
  idx?: number
  title: string
  description: string
  tags: string[]
  github_link: string
  demo_link: string | null
  demo_image_url: string | null
  created_at?: string
  updated_at?: string
}

