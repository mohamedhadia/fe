import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const TypeFilter = ({ typeFilter, settypeFilter, TypeData }) => {
  return (
    <Listbox value={typeFilter} onChange={settypeFilter}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-full  bg-white py-2 px-8  text-left  focus:border-[#A162F7] focus:outline-none focus:ring-1 focus:ring-[#A162F7] ">
              <span className="block truncate pr-4 font-semibold text-[#5F6165]">
                {typeFilter.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {TypeData.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      clsx(
                        active ? 'bg-[#A162F7] text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ TypeData, active }) => (
                      <>
                        <span
                          className={clsx(
                            TypeData ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {person.name}
                        </span>

                        {TypeData ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-[#A162F7]',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default TypeFilter
