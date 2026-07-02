import { useEffect, useState } from 'react'
import { api } from './api/client'
import { About } from './components/About'
import { Advantages } from './components/Advantages'
import { Contact } from './components/Contact'
import { Destinations } from './components/Destinations'
import { Footer, Partners } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Scholarships } from './components/Scholarships'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { destinationImages } from './data/destinationImages'
import type { Destination, Scholarship, ServiceOffering, Testimonial } from './types'

const fallbackServices: ServiceOffering[] = [
  {
    id: 1,
    badge: 'UP',
    title: 'University Placement',
    description:
      'Expert guidance on selecting the right universities and courses based on your career goals.',
    displayOrder: 1,
  },
  {
    id: 2,
    badge: 'SG',
    title: 'Scholarship Guidance',
    description:
      'Access to exclusive scholarship opportunities and assistance with application materials.',
    displayOrder: 2,
  },
  {
    id: 3,
    badge: 'VC',
    title: 'Visa Counseling',
    description:
      'Support through the entire student visa process, ensuring all documentation is correct.',
    displayOrder: 3,
  },
  {
    id: 4,
    badge: 'PB',
    title: 'Pre-departure Briefing',
    description: 'Preparing you for life abroad, from accommodation to cultural adjustment.',
    displayOrder: 4,
  },
]

const fallbackDestinations: Destination[] = [
  { id: 1, name: 'Singapore', institutionCount: 30, imageUrl: destinationImages.Singapore, displayOrder: 1 },
  { id: 2, name: 'Thailand', institutionCount: 60, imageUrl: destinationImages.Thailand, displayOrder: 2 },
  {
    id: 3,
    name: 'South Korea',
    institutionCount: 70,
    imageUrl: destinationImages['South Korea'],
    displayOrder: 3,
  },
  { id: 4, name: 'Australia', institutionCount: 40, imageUrl: destinationImages.Australia, displayOrder: 4 },
  { id: 5, name: 'China', institutionCount: 120, imageUrl: destinationImages.China, displayOrder: 5 },
  { id: 6, name: 'Canada', institutionCount: 90, imageUrl: destinationImages.Canada, displayOrder: 6 },
]

const fallbackScholarships: Scholarship[] = [
  {
    id: 1,
    country: 'United Kingdom',
    title: 'Global Excellence Scholarship',
    fundingAmount: 'Up to £10,000',
    deadline: 'June 2026',
    applyUrl: '#',
    displayOrder: 1,
  },
  {
    id: 2,
    country: 'Japan',
    title: 'MEXT Government Scholarship',
    fundingAmount: 'Full Tuition + Stipend',
    deadline: 'May 2026',
    applyUrl: '#',
    displayOrder: 2,
  },
  {
    id: 3,
    country: 'Canada',
    title: 'International Entrance Award',
    fundingAmount: 'Up to $15,000 CAD',
    deadline: 'Ongoing',
    applyUrl: '#',
    displayOrder: 3,
  },
]

const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    studentName: 'Sai Yom Kham',
    university: "Queen's University Belfast",
    quote:
      'GradeAide guided me through the complex process of Russell Group applications and helped me secure a significant scholarship.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    displayOrder: 1,
  },
  {
    id: 2,
    studentName: 'Aye Myat Mon',
    university: 'University of Sheffield',
    quote:
      "The career counseling sessions were eye-opening. They didn't just find me a university; they helped me find my path.",
    avatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    displayOrder: 2,
  },
]

function App() {
  const [services, setServices] = useState<ServiceOffering[]>(fallbackServices)
  const [destinations, setDestinations] = useState<Destination[]>(fallbackDestinations)
  const [scholarships, setScholarships] = useState<Scholarship[]>(fallbackScholarships)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials)

  useEffect(() => {
    Promise.allSettled([
      api.getServices(),
      api.getDestinations(),
      api.getScholarships(),
      api.getTestimonials(),
    ]).then(([servicesResult, destinationsResult, scholarshipsResult, testimonialsResult]) => {
      if (servicesResult.status === 'fulfilled' && servicesResult.value.length > 0) {
        setServices(servicesResult.value)
      }
      if (destinationsResult.status === 'fulfilled' && destinationsResult.value.length > 0) {
        setDestinations(destinationsResult.value)
      }
      if (scholarshipsResult.status === 'fulfilled' && scholarshipsResult.value.length > 0) {
        setScholarships(scholarshipsResult.value)
      }
      if (testimonialsResult.status === 'fulfilled' && testimonialsResult.value.length > 0) {
        setTestimonials(testimonialsResult.value)
      }
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services services={services} />
        <Advantages />
        <Destinations destinations={destinations} />
        <Scholarships scholarships={scholarships} />
        <Testimonials testimonials={testimonials} />
        <Contact />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

export default App
