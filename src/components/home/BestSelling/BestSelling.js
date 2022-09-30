import React from 'react'
import BestSellingCard from './BestSellingCard'

const BestSelling = ({ bestSellings }) => {
  return (
    <div className="mx-auto  py-6   ">
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {bestSellings.map((bestSelling) => (
          <BestSellingCard key={bestSelling.id} bestSelling={bestSelling} />
        ))}
      </div>
    </div>
  )
}

export default BestSelling
