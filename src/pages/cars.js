import Car from '@/components/cars/Car'
import SortFilter from '@/components/cars/SortFilter'
import TypeFilter from '@/components/cars/TypeFilter'
import { useGetCarsQuery } from '@/services/carsApi'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SortData = [
  { id: 1, name: 'asc' },
  { id: 2, name: 'desc' },
]
const TypeData = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Toyota' },
  { id: 3, name: 'Mini Cooper' },
  { id: 4, name: 'BMW' },
]

const Cars = () => {
  const { data: cars, isLoading } = useGetCarsQuery()
  const [sortFilter, setSortFilter] = useState(SortData[0])
  const [typeFilter, settypeFilter] = useState(TypeData[0])
  const [filteredCars, setFilteredCars] = useState([])

  useEffect(() => {
    if (cars) {
      setFilteredCars(cars)
    }
  }, [])

  const search = useSelector((state) => state.search.searchVal)

  useEffect(() => {
    if (search) {
      setFilteredCars(
        cars?.filter((car) =>
          car.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setFilteredCars(cars)
    }
  }, [search, cars])

  useEffect(() => {
    if (typeFilter.name === 'All') {
      setFilteredCars(cars)
    } else {
      setFilteredCars(cars?.filter((car) => car.name === typeFilter.name))
    }
  }, [typeFilter, cars])

  useEffect(() => {
    if (cars) {
      if (sortFilter.name == 'asc') {
        setFilteredCars([...cars].sort((a, b) => a.price - b.price))
      } else {
        setFilteredCars([...cars].sort((a, b) => b.price - a.price))
      }
    }
    console.log(filteredCars)
  }, [sortFilter])

  return (
    <div>
      <h2 className="text-3xl font-bold">Booking</h2>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-4">
          <SortFilter
            selected={sortFilter}
            setSelected={setSortFilter}
            SortData={SortData}
          />
          <TypeFilter
            typeFilter={typeFilter}
            settypeFilter={settypeFilter}
            TypeData={TypeData}
          />
        </div>
        <div></div>
      </div>
      <div className="mx-auto  min-h-[80vh]  py-6 ">
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {isLoading && <div>Loading...</div>}
          {cars && filteredCars?.map((car) => <Car car={car} key={car.id} />)}
          {filteredCars?.length === 0 && <div>No cars found</div>}
        </div>
      </div>
    </div>
  )
}

export default Cars
