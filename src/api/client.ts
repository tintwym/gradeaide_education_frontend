const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, init)
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response.json() as Promise<T>
}

export const api = {
  getDestinations: () => fetchJson<import('../types').Destination[]>('/api/destinations'),
  getScholarships: () => fetchJson<import('../types').Scholarship[]>('/api/scholarships'),
  getServices: () => fetchJson<import('../types').ServiceOffering[]>('/api/services'),
  getTestimonials: () => fetchJson<import('../types').Testimonial[]>('/api/testimonials'),
  submitConsultation: (data: import('../types').ConsultationRequest) =>
    fetchJson('/api/consultations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }),
}
