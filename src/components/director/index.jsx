import React from 'react'
import { director } from '@/constant'
import { SharedCard, SharedHeading } from '../SharedComponent'

export default function Director() {
  return (
    <div className='py-10 text-white bg-primaryBlack'>
    <div className='w-10/12 mx-auto'>
        <div className='my-16 text-center'>
            <SharedHeading>Our Directors</SharedHeading>
        </div>
        <div className='grid grid-cols-2 gap-10 '>
            {
                director?.map((item, index) => <SharedCard director={true} item={item} index={index} key={index} />)
            }
        </div>
    </div>
</div>
  )
}
