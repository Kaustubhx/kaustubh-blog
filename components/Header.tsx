import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-5 sm:px-10 py-5'>
            <div className='flex items-center space-x-2 '>
                <Link
                    href={"/"}
                    className='flex items-center space-x-2'
                >
                    <Image
                        className='rounded-full'
                        src={"/images/logo.jpg"}
                        alt='Logo'
                        height={50}
                        width={50}
                    />
                    <h1>
                        Kaustubh&apos;s Blog
                    </h1>
                </Link>
            </div>

            <div className=''>
                <Link
                    href={"https://kaustubhx-portfolio.vercel.app/"}
                    className='px-5 py-3 text-sm md:text-base bg-gray-900 text-gray-100 flex items-center rounded-full'
                >
                    Go To Portfolio
                </Link>
            </div>
        </header>
    )
}

export default Header