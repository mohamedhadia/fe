import Image from 'next/future/image'
import React from 'react'

const BestSellingCard = ({ bestSelling }) => {
  return (
    <div
      className=" rounded-xl  px-7 py-4 text-[#242731]"
      style={{ backgroundColor: `${bestSelling.bg}` }}
    >
      <div className="flex items-center gap-3">
        <Image
          width={24}
          height={24}
          src="/images/bestSelling/gear.svg"
          alt="gear"
        />
        <p className="font-bold">{bestSelling.recommend}% Recommend</p>
      </div>
      <div className="relative my-3 h-auto w-full lg:h-[170px] ">
        <Image
          src={bestSelling.img}
          alt={bestSelling.name}
          width={374}
          height={120}
        />
      </div>
      <h3 className="mb-3 text-xl font-bold">{bestSelling.name}</h3>
      <div className="flex justify-between text-[#72767C]">
        <div className="flex items-center gap-4">
          <span className="flex gap-4">
            <Image
              src="/images/bestSelling/retweet.svg"
              alt="retweet"
              width={16}
              height={16}
            />
            {bestSelling.retweet}K
          </span>
          <Image
            src="/images/bestSelling/star.svg"
            alt="star"
            width={16}
            height={16}
          />

          <Image
            src="/images/bestSelling/boost.svg"
            alt="boost"
            width={16}
            height={16}
          />
        </div>
        <p>${bestSelling.hourlyPrice}/h</p>
      </div>
    </div>
  )
}

export default BestSellingCard
