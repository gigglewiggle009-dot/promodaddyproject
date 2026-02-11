'use client'

import React from 'react'
import { SharedCard, SharedHeading } from '../SharedComponent'
import { ourClient, ourElectionClient } from '@/constant'
import { motion } from "framer-motion"


export const Clients = () => {
    return (
        <div className='py-10 text-white bg-primaryBlack'>
            <div className='w-10/12 mx-auto'>
                <div className='my-16 text-center'>
                    <SharedHeading>SERVICES TAILORED FOR OUR CLIENTS </SharedHeading>
                    
                </div>
                <div className='py-8 text-center text-primaryBlue'>

                    <SharedHeading>Election campaign content </SharedHeading>
                </div>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        ourElectionClient?.map((item, index) =>
                           
                             
                                <SharedCard   key={index} item={item} index={index} />
                            )
                    }
                </div>

                    <div className='py-8 text-center text-primaryBlue'>

                <SharedHeading>Social Media Services </SharedHeading>
                    </div>
                
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        ourClient?.map((item, index) =>
                           
                             
                                <SharedCard   key={index} item={item} index={index} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

