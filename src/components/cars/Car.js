import Image from 'next/future/image'
import React, { useState } from 'react'

const Car = ({ car }) => {
  const [heart, setHeart] = useState(false)
  return (
    <div className=" rounded-xl  bg-white p-6 text-[#242731]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold">{car.name}</h3>
          <p>{car.desc}</p>
        </div>
        <HeartIcon
          alt="heart"
          width={20}
          height={20}
          fill={`${heart ? '#F84F56' : 'transparent'}`}
          onClick={() => setHeart(!heart)}
          className="cursor-pointer"
        />
      </div>
      <div className="relative my-3 grid h-auto w-full place-content-center lg:h-[170px]">
        <Image src={car.img} alt={car.name} width={284} height={120} />
      </div>
      <div className="flex justify-between text-[#72767C]">
        <div className="flex items-center gap-4">
          <span className="flex gap-2">
            <Image
              src="/images/bestSelling/profile.svg"
              alt="profile"
              width={16}
              height={16}
            />
            {car.capacity}
          </span>
          <span className="flex gap-2">
            <Image
              src="/images/bestSelling/Vector.svg"
              alt="system"
              width={16}
              height={16}
            />
            {car.system}
          </span>
        </div>
        <p>${car.price}/d</p>
      </div>
    </div>
  )
}

export default Car

function HeartIcon(props) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.8164 2.1838L17.8164 2.18386C19.7279 4.095 19.7279 7.20702 17.816 9.11817L17.8159 9.11827L9.99973 16.9345L2.18359 9.11833C0.27226 7.20662 0.272051 4.09447 2.18348 2.18342C4.09512 0.272164 7.20731 0.272239 9.11844 2.18337C9.22469 2.28962 9.32568 2.4004 9.42202 2.51699L9.99923 3.21548L10.5775 2.5179C10.6749 2.40047 10.7762 2.28905 10.8814 2.18386C12.793 0.272598 15.9052 0.272674 17.8164 2.1838Z"
        stroke="#A4A5A6"
        strokeWidth="1"
      />
    </svg>
  )
}
