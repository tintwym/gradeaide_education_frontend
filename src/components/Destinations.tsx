import { useState } from 'react'
import { getDestinationImage } from '../data/destinationImages'
import type { Destination } from '../types'

interface DestinationsProps {
  destinations: Destination[]
}

function DestinationCard({ destination }: { destination: Destination }) {
  const [imageUrl, setImageUrl] = useState(getDestinationImage(destination.name))

  return (
    <article className="group relative h-64 overflow-hidden rounded-2xl bg-navy">
      <img
        src={imageUrl}
        alt={destination.name}
        loading="lazy"
        decoding="async"
        onError={() => setImageUrl(getDestinationImage(destination.name))}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
        <p className="mt-1 text-sm text-white/80">
          {destination.institutionCount}+ TOP INSTITUTIONS
        </p>
      </div>
    </article>
  )
}

export function Destinations({ destinations }: DestinationsProps) {
  return (
    <section id="destinations" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-navy">STUDY DESTINATIONS</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Where Will Your Next Chapter Be?
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-navy hover:text-gold">
            View All Destinations →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  )
}
