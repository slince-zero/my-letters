'use client'
import { useRef, useEffect } from 'react'
import { Testimonial } from '@/type'
import TestimonialColumn from './TestimonialColumn'
export default function TsetimonialRow({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollAnimation = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0
        } else {
          scrollRef.current.scrollLeft += 1
        }
      }
    }

    const animationId = setInterval(scrollAnimation, 50)
    return () => clearInterval(animationId)
  }, [])

  return (
    <div
      ref={scrollRef}
      className='flex overflow-x-hidden pb-4'>
      {testimonials.concat(testimonials).map((testimonial, index) => (
        <TestimonialColumn
          key={index}
          {...testimonial}
        />
      ))}
    </div>
  )
}
