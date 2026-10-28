export type DescriptionPoint =
  | string
  | {
      text: string
      children?: string[]
    }

export interface Experience {
  id: number
  idx?: number
  title: string
  company_name: string
  city: string
  country: string
  from: string
  to: string
  description: DescriptionPoint[]
  type: 'work' | 'education'
  created_at?: string
  updated_at?: string
}
