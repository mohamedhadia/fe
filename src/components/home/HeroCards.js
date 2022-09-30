import Image from 'next/future/image'
import Link from 'next/link'

export default function HeroCards({ data }) {
  return (
    <div className="mx-auto  py-6   ">
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6  xl:grid-cols-4 xl:gap-x-8">
        {data?.map((heroCard) => (
          <div
            key={heroCard.id}
            className={`group relative flex  min-h-[222px] items-center justify-between rounded  p-6`}
            style={{
              backgroundColor: heroCard.bg,
              gridColumn: `span ${heroCard.span} `,
            }}
          >
            <div
              style={{ color: heroCard.color }}
              className={`${!heroCard.buttonText && 'w-20'}`}
            >
              <h3 className="text-2xl font-bold">
                {heroCard.title}{' '}
                {heroCard?.badge && (
                  <>
                    <span
                      className="block text-4xl font-bold"
                      style={{ color: heroCard?.badge?.color }}
                    >
                      {heroCard?.badge.number}
                    </span>
                    <span className="block">{heroCard?.badge?.text}</span>
                  </>
                )}
              </h3>

              <p
                className="mt-6 w-[162px]  text-base "
                style={{ color: heroCard?.badge?.color }}
              >
                {heroCard.desc}
              </p>
              {heroCard.buttonText && (
                <div className="mt-8">
                  <Link
                    href={heroCard.href}
                    className={` rounded px-6 py-3 text-xs font-bold text-white hover:opacity-95`}
                    style={{ backgroundColor: heroCard.color }}
                  >
                    {heroCard.buttonText}
                  </Link>
                </div>
              )}
            </div>
            <div className="mb-4 h-4/5 w-auto overflow-hidden">
              <Image
                src={heroCard.imageSrc}
                alt={heroCard.title}
                width={400}
                height={400}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
