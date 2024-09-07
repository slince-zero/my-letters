import { Mail, X } from 'lucide-react'
import TestimonialRow from './TsetimonialRow'
export default async function LetterApp() {
  const testimonials = [
    {
      id: 1,
      avatar: '/avatar/01.jpg',
      content:
        'This app revolutionized how I stay in touch with my loved ones. The personal touch of a letter in this digital age is truly refreshing!',
      author: 'John Doe',
    },
    {
      id: 2,
      avatar: '/avatar/02.jpg',
      content:
        "I've reconnected with old friends thanks to this platform. It's simple to use and reminds me of the joy of handwritten letters.",
      author: 'Jane Smith',
    },
    {
      id: 3,
      avatar: '/avatar/03.jpg',
      content:
        "This app allows me to express myself in a way that text messages can't. It brings back the warmth of meaningful communication.",
      author: 'Alice Johnson',
    },
    {
      id: 4,
      avatar: '/avatar/04.jpg',
      content:
        'The anticipation of receiving a letter is an unmatched experience. This app makes it easy and exciting again!',
      author: 'Bob Williams',
    },
    {
      id: 5,
      avatar: '/avatar/05.jpg',
      content:
        'I appreciate the way this app combines the charm of letter writing with modern technology. It creates a perfect balance between tradition and convenience.',
      author: 'Emma Brown',
    },
    {
      id: 6,
      avatar: '/avatar/06.jpg',
      content:
        'Using this app feels like stepping back in time, but with all the benefits of modern technology. It’s an incredible experience!',
      author: 'Norman Lowe',
    },
    {
      id: 7,
      avatar: '/avatar/07.jpg',
      content:
        'The simplicity and elegance of this app make reconnecting with loved ones effortless. It brings a personal touch back to communication.',
      author: 'Sonja Tønnessen',
    },
    {
      id: 8,
      avatar: '/avatar/08.jpg',
      content:
        'With this app, I can easily send thoughtful messages that feel much more personal than an email or text.',
      author: 'Magda Leuschner',
    },
    {
      id: 9,
      avatar: '/avatar/09.jpg',
      content:
        'Every message feels more special and genuine with this app. It has rekindled my love for written communication.',
      author: 'Thale Lunden',
    },
    {
      id: 10,
      avatar: '/avatar/10.jpg',
      content:
        'This app has reinvented how I communicate with those I care about. It’s a delightful blend of the old and the new.',
      author: 'Sérgio Picard',
    },
    {
      id: 11,
      avatar: '/avatar/11.jpg',
      content:
        'Receiving letters through this app has become a highlight of my week. It feels so special every time.',
      author: 'Rosalyn Bradley',
    },
    {
      id: 12,
      avatar: '/avatar/12.jpg',
      content:
        'This app offers a refreshing change from digital overload. It brings back the art of letter writing in a beautiful way.',
      author: 'Manon Perrin',
    },
    {
      id: 13,
      avatar: '/avatar/13.jpg',
      content:
        'I never realized how much I missed letters until I started using this app. It’s been a wonderful experience!',
      author: 'Brandon Gonzalez',
    },
    {
      id: 14,
      avatar: '/avatar/14.jpg',
      content:
        'This app reminds me of the joy in receiving and sending personal messages. It’s more intimate than any other form of communication.',
      author: 'Ryan Spijkerman',
    },
    {
      id: 15,
      avatar: '/avatar/15.jpg',
      content:
        'The nostalgic feel of this app, paired with its ease of use, makes it one of my favorite platforms.',
      author: 'Aymane Van Heteren',
    },
    {
      id: 16,
      avatar: '/avatar/16.jpg',
      content:
        'It’s wonderful to share thoughtful messages again. This app makes letter writing convenient and enjoyable.',
      author: 'Carl Kristensen',
    },
    {
      id: 17,
      avatar: '/avatar/17.jpg',
      content:
        'This app brings a personal and meaningful way to stay connected with my family and friends. I love it!',
      author: 'Nenad RatkovićRistić',
    },
    {
      id: 18,
      avatar: '/avatar/18.jpg',
      content:
        'I appreciate how this app has brought back the art of letter writing in such an accessible and modern way.',
      author: 'Raul Sutton',
    },
    {
      id: 19,
      avatar: '/avatar/19.jpg',
      content:
        'This app is a perfect way to send thoughtful messages that feel more personal than a text or email.',
      author: 'Jeanette Cruz',
    },
    {
      id: 20,
      avatar: '/avatar/20.jpg',
      content:
        'I adore how this app captures the spirit of old-fashioned letter writing while being convenient to use.',
      author: 'Sherwin Broens',
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
