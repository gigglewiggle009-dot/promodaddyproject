import React from 'react'
import { SharedCard, SharedHeading } from '../SharedComponent'
import { management } from '@/constant'
import VideoBg from "@/assets/svg/videoBackground.svg";



export default function Management() {
  return (
    <div className='py-10 text-white bg-primaryBlack'>
    <div className='w-10/12 mx-auto'>
        <div className='my-16 text-center'>
            <SharedHeading>PR MANAGEMENT</SharedHeading>
        </div>
        <div className='relative grid gap-10 lg:grid-cols-3 '>
        <VideoBg className="absolute top-0 left-0 w-fit h-[120%] " />

            {
                management?.map((item, index) => <SharedCard director={true} item={item} index={index} key={index} />)
            }
        </div>
    </div>
</div>
  )
}
