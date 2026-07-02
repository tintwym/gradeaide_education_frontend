export interface Destination {
  id: number
  name: string
  institutionCount: number
  imageUrl: string
  displayOrder: number
}

export interface Scholarship {
  id: number
  country: string
  title: string
  fundingAmount: string
  deadline: string
  applyUrl: string
  displayOrder: number
}

export interface ServiceOffering {
  id: number
  badge: string
  title: string
  description: string
  displayOrder: number
}

export interface Testimonial {
  id: number
  studentName: string
  university: string
  quote: string
  avatarUrl: string
  displayOrder: number
}

export interface ConsultationRequest {
  fullName: string
  email: string
  message: string
}
