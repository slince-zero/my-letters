import  Image  from 'next/image'
import type { Testimonial } from '@/type'
export default function Testimonial({ avatar, content, author }: Testimonial) {
  return (
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
}
