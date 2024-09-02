'use client'
import { useRef, useEffect } from 'react'
import { Mail, X } from 'lucide-react'
import Image from 'next/image'
import type { Testimonial } from '@/type/type'
const Testimonial = ({ avatar, content, author }: Testimonial) => (
  <div className='bg-white shadow-lg rounded-lg p-4 flex flex-col h-full w-[280px] md:w-[320px] flex-shrink-0 mx-2'>
    <div className='flex items-start mb-2'>
      <Image
        src={avatar}
        alt={author}
        width={40}
        height={40}
        className='rounded-full mr-3'
      />
      <div className='flex-grow'>
        <p className='text-gray-600 text-sm line-clamp-3'>{content}</p>
      </div>
    </div>
    <div className='mt-auto'>
      <p className='font-semibold text-right text-sm'>{author}</p>
    </div>
  </div>
)

const TestimonialRow = ({ testimonials }: { testimonials: Testimonial[] }) => {
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
        <Testimonial
          key={index}
          {...testimonial}
        />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('ERROR fetching data', error)
  }
}
const LetterApp = ({ data }) => {
  console.log(data, '33333')

  // getStaticProps ，静态生成
  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await fetch('https://randomuser.me/api/?results=20')
  //       const data = await response.json()

  //     } catch (error) {
  //       console.log('ERROR fetching data', error)
  //     }
  //   }

  //   fetchUserInfo()
  // }, [])

  const testimonials = [
    {
      id: 1,
      avatar: '/api/placeholder/100',
      content:
        'This app revolutionized how I stay in touch with my loved ones. The personal touch of a letter in this digital age is refreshing!',
      author: 'John Doe',
    },
    {
      id: 2,
      avatar: '/api/placeholder/100',
      content:
        "I've reconnected with old friends thanks to this platform. It's user-friendly and brings back the joy of written communication.",
      author: 'Jane Smith',
    },
    {
      id: 3,
      avatar: '/api/placeholder/100',
      content:
        "As someone who values meaningful connections, this app is a gem. It allows me to express myself in ways that texts or emails can't match.",
      author: 'Alice Johnson',
    },
    {
      id: 4,
      avatar: '/api/placeholder/100',
      content:
        'The anticipation of receiving a letter is unmatched. This app has made that experience accessible and exciting again!',
      author: 'Bob Williams',
    },
    {
      id: 5,
      avatar: '/api/placeholder/100',
      content:
        'I love how this app combines the nostalgia of letter writing with modern convenience. It is a perfect blend of old and new.',
      author: 'Emma Brown',
    },
    {
      id: 6,
      avatar: '/api/placeholder/100',
      content:
        'I love how this app combines the nostalgia of letter writing with modern convenience. It is a perfect blend of old and new.',
      author: 'Emma Brown',
    },
    {
      id: 7,
      avatar: '/api/placeholder/100',
      content:
        'I love how this app combines the nostalgia of letter writing with modern convenience. It is a perfect blend of old and new.',
      author: 'Emma Brown',
    },
    {
      id: 8,
      avatar: '/api/placeholder/100',
      content:
        'I love how this app combines the nostalgia of letter writing with modern convenience. It is a perfect blend of old and new.',
      author: 'Emma Brown',
    },
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='p-4 bg-green-500 shadow-md sticky top-0 z-10'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-white'>Logo</h1>
          <button className='px-3 py-1 bg-white text-green-500 rounded hover:bg-green-100 transition text-sm'>
            Login
          </button>
        </div>
      </header>

      <main className='flex-grow container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <Mail
              size={64}
              className='text-green-600 mx-auto mb-4'
            />
            <h2 className='text-3xl font-bold mb-4'>Connect Through Letters</h2>
            <p className='text-xl text-gray-600'>
              Send and receive heartfelt messages with our letter service.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mb-12 justify-center'>
            <button className='px-4 py-2 bg-green-500 text-white rounded text-base hover:bg-green-600 transition w-full sm:w-auto'>
              Send a Letter
            </button>
            <button className='px-4 py-2 bg-yellow-500 text-white rounded text-base hover:bg-yellow-600 transition w-full sm:w-auto'>
              Get a Letter
            </button>
          </div>

          <div className='mb-12'>
            <h3 className='text-2xl font-semibold mb-6'>What Our Users Say</h3>
            <div className='hidden md:block'>
              <TestimonialRow testimonials={testimonials.slice(0, 5)} />
              <TestimonialRow testimonials={testimonials.slice(5, 10)} />
            </div>
            <div className='md:hidden'>
              <TestimonialRow testimonials={testimonials} />
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-gray-800 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h4 className='text-lg font-semibold mb-2'>Share our app</h4>
              <div className='flex space-x-4'>
                <X className='cursor-pointer hover:text-green-400' />
              </div>
            </div>
            <div>
              <p>&copy; 2024 Letter App. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LetterApp
