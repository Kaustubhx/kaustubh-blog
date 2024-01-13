
type Props = {}

function Banner({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-5 justify-between font-bold px-5 sm:px-10 py-10 mb-10">
            <div>
                <h1 className="text-6xl lg:text-7xl">Kaustubh&apos;s Weekly Blog</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-neutral-900/40">
                        Every Devlopers
                    </span>{" "}
                    Favourite blog in the Devosphere
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New product features | The Latest in techonolgy | The weekly debugging nightmare & More!
            </p>
        </div>
    )
}

export default Banner