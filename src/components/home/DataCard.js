import Image from 'next/image'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const DataCard = ({ data }) => {
  return (
    <div className="group flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[14px] bg-white px-5 py-[60px] transition-all duration-200 ease-in-out hover:bg-[#A162F7] hover:text-white">
      <Image
        src={data.icon}
        width={38}
        height={38}
        alt={data.title}
        title={data.title}
        className="group-hover:brightness-125"
      />
      <dt className="mt-3 mb-8 truncate text-2xl  font-bold ">{data.title}</dt>
      <div className="relative h-28 w-28">
        <CircularProgressbar
          value={data.percentage}
          circleRatio={0.75}
          className="rotate-[135deg]"
          styles={{
            path: {
              stroke: `${data.color}`,
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'round',
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
          }}
        />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform text-2xl  font-bold">
          {data.percentage}%
        </span>
      </div>
    </div>
  )
}

export default DataCard
