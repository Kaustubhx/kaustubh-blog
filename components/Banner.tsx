
type Props = {}

function Banner({ }: Props) {
    return (
        <div>
            <div>
                <h1 className="text-7xl">Kaustubh&apos; Weekly Blog</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-neutral-900/40">
                        Every Devlopers
                    </span>
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