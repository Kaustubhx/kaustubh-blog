import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function StudioNavbar(props: any) {
    return (
        <div>
            <div className='flex items-center justify-between p-5'>
                <Link
                    href={"/"}
                    className='flex items-center text-neutral-900 dark:text-neutral-100'
                >
                    <ArrowUturnLeftIcon className='h-6 w-6 text-neutral-900 dark:text-neutral-100 mr-2' />
                    Go To Website
                </Link>
            </div>

            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar