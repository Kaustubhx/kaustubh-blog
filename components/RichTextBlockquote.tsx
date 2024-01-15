"use client"

import React, { useState } from 'react'
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

type Props = {
    children: string
}

function RickTextBlockquote({ children }: Props) {

    const [copy, setCopy] = useState(true);

    const copyText = () => {
        navigator.clipboard.writeText(children[0])
        setCopy(false)
        setTimeout(() => {
            setCopy(true)
        }, 2000)
    }

    return (
        <blockquote
            className="relative bg-neutral-200 pl-5 py-2 my-3 rounded-md"
        >
            {children}

            <button
                className='absolute top-1 right-5 hover:bg-neutral-300 p-1 rounded-md'
                onClick={() => copyText()}
            >
                {copy
                    ? <ClipboardIcon className='h-5 w-5 transition-all duration-200 ease-in-out' />
                    : <ClipboardDocumentCheckIcon className='h-5 w-5 transition-all duration-200 ease-in-out' />
                }
            </button>
        </blockquote>
    )
}

export default RickTextBlockquote