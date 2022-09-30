import React from 'react'
import DataCard from './DataCard'

const DataCards = ({ data }) => {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((i) => (
        <DataCard data={i} key={i.id} />
      ))}
    </dl>
  )
}

export default DataCards
