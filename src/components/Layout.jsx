import { Fragment, useId, useState } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { NavLink } from './ui/NavLink'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchVal } from '@/services/searchSlice'

const navigation = [
  { name: 'Dashboard', href: '/', icon: DashboardIcon },
  { name: 'Cars', href: '/cars', icon: CarIcon },
]
const Footernavigation = [
  { name: 'Settings', href: '/settings', icon: SettingsIcon },
  { name: 'Log out', href: '/logout', icon: LogoutIcon },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const dispatch = useDispatch()
  const search = useSelector((state) => state.search.searchVal)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <Image
                      className="h-8 w-auto"
                      width={32}
                      height={32}
                      src="/logo.svg"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5  flex-1 overflow-y-auto">
                    <nav className="flex h-full flex-col justify-between  px-2">
                      <div>
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            href={item.href}
                            exact
                            className={
                              'group flex items-center rounded-md py-2 px-2 text-base font-medium text-gray-600 hover:bg-[#F3F5F8] hover:text-gray-900'
                            }
                          >
                            <item.icon
                              className={
                                'mr-3 h-5 w-5 flex-shrink-0  text-gray-400 group-hover:text-gray-500'
                              }
                              aria-hidden="true"
                            />
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                      <div className="mt-auto ">
                        {Footernavigation.map((item) => (
                          <NavLink
                            key={item.name}
                            href={item.href}
                            exact
                            className={
                              'group flex items-center rounded-md py-2 px-2 text-base font-medium text-gray-600 hover:bg-[#F3F5F8] hover:text-gray-900'
                            }
                          >
                            <item.icon
                              className={
                                'mr-3 h-5 w-5 flex-shrink-0  text-gray-400 group-hover:text-gray-500'
                              }
                              aria-hidden="true"
                            />

                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* sidebar on desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-[248px] md:flex-col">
          {/* Sidebar component */}
          <div className="flex  flex-grow flex-col justify-between overflow-y-auto  bg-white pt-8 pl-6">
            {/* upper links */}
            <div className="max-w-[174px]">
              <div className="flex  flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  width={32}
                  height={32}
                  src="/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div className="mt-5 flex flex-grow flex-col">
                <nav className="flex-1 space-y-1  pb-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      exact
                      className={
                        'group flex items-center rounded-md py-2 px-2 text-sm font-medium text-gray-600 hover:bg-[#F3F5F8] hover:text-gray-900'
                      }
                    >
                      <item.icon
                        className={
                          'mr-3 h-4 w-4 flex-shrink-0  text-gray-400 group-hover:text-gray-500'
                        }
                        aria-hidden="true"
                      />

                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
            {/* down links */}
            <div className="max-w-[174px]">
              <nav className="flex-1 space-y-1  pb-4">
                {Footernavigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    exact
                    className={
                      'group flex items-center rounded-md py-2 px-2 text-sm font-medium text-gray-600 hover:bg-[#F3F5F8] hover:text-gray-900'
                    }
                  >
                    <item.icon
                      className={
                        'mr-3 h-4 w-4 flex-shrink-0  text-gray-400 group-hover:text-gray-500'
                      }
                      aria-hidden="true"
                    />

                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className=" bg-[#F5F5F5] md:pl-[248px]">
          <div className="sticky top-0  z-10 flex flex-shrink-0 border-b border-gray-200  bg-white py-4 md:px-8 xl:border-l">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 md:px-0">
              <div className=" flex flex-1">
                <form
                  className="flex h-12 w-[300px] md:ml-0 md:w-[358px]"
                  action="#"
                  method="GET"
                >
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full  text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      value={search}
                      onChange={(e) => {
                        dispatch(setSearchVal(e.target.value))
                      }}
                      id="search-field"
                      className="block h-12 w-full rounded-lg border-transparent bg-[#F5F4F6] py-2 pl-11 pr-3 font-medium text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm md:text-base"
                      placeholder="Search or type"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full md:h-12 md:w-12"
                        src="/images/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.jpg"
                        alt="profile picture"
                        width={48}
                        height={48}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={clsx(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col ">
            <main className="flex-1  md:px-8">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  <div>{children}</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

function CarIcon(props) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.3098 5.63L15.1698 2.20917C15.0045 1.71124 14.6864 1.27808 14.2608 0.971257C13.8352 0.66443 13.3237 0.499535 12.799 0.500001H5.20067C4.67599 0.499535 4.16452 0.66443 3.73891 0.971257C3.3133 1.27808 2.99521 1.71124 2.82984 2.20917L1.68984 5.63C1.38701 5.75707 1.1284 5.97063 0.946375 6.24397C0.764348 6.51731 0.666995 6.83827 0.666504 7.16667V11.3333C0.666504 11.9608 1.019 12.5017 1.53234 12.7858C1.5215 12.8408 1.49984 12.8908 1.49984 12.9483V14.6667C1.49984 14.8877 1.58763 15.0996 1.74391 15.2559C1.9002 15.4122 2.11216 15.5 2.33317 15.5H3.1665C3.38752 15.5 3.59948 15.4122 3.75576 15.2559C3.91204 15.0996 3.99984 14.8877 3.99984 14.6667V13H13.9998V14.6667C13.9998 14.8877 14.0876 15.0996 14.2439 15.2559C14.4002 15.4122 14.6122 15.5 14.8332 15.5H15.6665C15.8875 15.5 16.0995 15.4122 16.2558 15.2559C16.412 15.0996 16.4998 14.8877 16.4998 14.6667V12.9483C16.4998 12.8908 16.4782 12.84 16.4673 12.7858C16.7285 12.6434 16.9466 12.4335 17.099 12.178C17.2513 11.9225 17.3321 11.6308 17.3332 11.3333V7.16667C17.3332 6.47583 16.9098 5.8825 16.3098 5.63ZM2.33317 11.3333V7.16667H15.6665L15.6682 11.3333H2.33317ZM5.20067 2.16667H12.7982C13.1573 2.16667 13.4757 2.395 13.589 2.73667L14.5107 5.5H3.489L4.40984 2.73667C4.46513 2.57066 4.57127 2.42627 4.71321 2.32397C4.85515 2.22166 5.0257 2.16663 5.20067 2.16667Z"
        fill="#72767C"
      />
      <path
        d="M4.4165 10.5C5.10686 10.5 5.6665 9.94036 5.6665 9.25C5.6665 8.55964 5.10686 8 4.4165 8C3.72615 8 3.1665 8.55964 3.1665 9.25C3.1665 9.94036 3.72615 10.5 4.4165 10.5Z"
        fill="#72767C"
      />
      <path
        d="M13.583 10.5C14.2734 10.5 14.833 9.94036 14.833 9.25C14.833 8.55964 14.2734 8 13.583 8C12.8927 8 12.333 8.55964 12.333 9.25C12.333 9.94036 12.8927 10.5 13.583 10.5Z"
        fill="#72767C"
      />
    </svg>
  )
}
function DashboardIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5835 12.4997C14.2067 12.4997 13.6743 12.5518 13.12 12.6277C12.8611 12.6631 12.6636 12.8606 12.6282 13.1195C12.5523 13.6738 12.5002 14.2062 12.5002 14.583C12.5002 14.9598 12.5523 15.4922 12.6282 16.0465C12.6636 16.3054 12.8611 16.5029 13.12 16.5383C13.6743 16.6143 14.2067 16.6663 14.5835 16.6663C14.9603 16.6663 15.4927 16.6143 16.047 16.5383C16.3059 16.5029 16.5034 16.3054 16.5388 16.0465C16.6147 15.4922 16.6668 14.9598 16.6668 14.583C16.6668 14.2062 16.6147 13.6738 16.5388 13.1195C16.5034 12.8606 16.3059 12.6631 16.047 12.6277C15.4927 12.5518 14.9603 12.4997 14.5835 12.4997ZM12.8939 10.9764C11.8939 11.1134 11.1138 11.8935 10.9769 12.8934C10.8984 13.4669 10.8335 14.0898 10.8335 14.583C10.8335 15.0762 10.8984 15.6991 10.9769 16.2726C11.1138 17.2726 11.8939 18.0527 12.8939 18.1896C13.4674 18.2681 14.0903 18.333 14.5835 18.333C15.0767 18.333 15.6996 18.2681 16.2731 18.1896C17.2731 18.0527 18.0531 17.2726 18.1901 16.2726C18.2686 15.6991 18.3335 15.0762 18.3335 14.583C18.3335 14.0898 18.2686 13.4669 18.1901 12.8934C18.0531 11.8935 17.2731 11.1134 16.2731 10.9764C15.6996 10.8979 15.0767 10.833 14.5835 10.833C14.0903 10.833 13.4674 10.8979 12.8939 10.9764Z"
        fill="#5F6165"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4165 12.4997C5.03969 12.4997 4.50728 12.5518 3.95301 12.6277C3.69407 12.6631 3.49663 12.8606 3.46117 13.1195C3.38526 13.6738 3.33317 14.2062 3.33317 14.583C3.33317 14.9598 3.38526 15.4922 3.46117 16.0465C3.49663 16.3054 3.69407 16.5029 3.95301 16.5383C4.50728 16.6143 5.03969 16.6663 5.4165 16.6663C5.79332 16.6663 6.32573 16.6143 6.87999 16.5383C7.13893 16.5029 7.33638 16.3054 7.37184 16.0465C7.44775 15.4922 7.49984 14.9598 7.49984 14.583C7.49984 14.2062 7.44775 13.6738 7.37184 13.1195C7.33638 12.8606 7.13893 12.6631 6.87999 12.6277C6.32573 12.5518 5.79332 12.4997 5.4165 12.4997ZM3.72687 10.9764C2.72695 11.1134 1.94686 11.8935 1.80991 12.8934C1.73137 13.4669 1.6665 14.0898 1.6665 14.583C1.6665 15.0762 1.73137 15.6991 1.80991 16.2726C1.94686 17.2726 2.72695 18.0527 3.72687 18.1896C4.30037 18.2681 4.9233 18.333 5.4165 18.333C5.9097 18.333 6.53263 18.2681 7.10614 18.1896C8.10606 18.0527 8.88615 17.2726 9.02309 16.2726C9.10164 15.6991 9.1665 15.0762 9.1665 14.583C9.1665 14.0898 9.10164 13.4669 9.02309 12.8934C8.88615 11.8935 8.10606 11.1134 7.10614 10.9764C6.53263 10.8979 5.9097 10.833 5.4165 10.833C4.9233 10.833 4.30037 10.8979 3.72687 10.9764Z"
        fill="#5F6165"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5835 3.33366C14.2067 3.33366 13.6743 3.38575 13.12 3.46165C12.8611 3.49712 12.6636 3.69456 12.6282 3.9535C12.5523 4.50776 12.5002 5.04017 12.5002 5.41699C12.5002 5.79381 12.5523 6.32622 12.6282 6.88048C12.6636 7.13942 12.8611 7.33687 13.12 7.37233C13.6743 7.44824 14.2067 7.50033 14.5835 7.50033C14.9603 7.50033 15.4927 7.44824 16.047 7.37233C16.3059 7.33687 16.5034 7.13942 16.5388 6.88048C16.6147 6.32622 16.6668 5.79381 16.6668 5.41699C16.6668 5.04017 16.6147 4.50776 16.5388 3.9535C16.5034 3.69456 16.3059 3.49712 16.047 3.46165C15.4927 3.38575 14.9603 3.33366 14.5835 3.33366ZM12.8939 1.8104C11.8939 1.94734 11.1138 2.72744 10.9769 3.72736C10.8984 4.30086 10.8335 4.92379 10.8335 5.41699C10.8335 5.91019 10.8984 6.53312 10.9769 7.10663C11.1138 8.10655 11.8939 8.88664 12.8939 9.02358C13.4674 9.10213 14.0903 9.16699 14.5835 9.16699C15.0767 9.16699 15.6996 9.10213 16.2731 9.02358C17.2731 8.88664 18.0531 8.10655 18.1901 7.10663C18.2686 6.53312 18.3335 5.91019 18.3335 5.41699C18.3335 4.92379 18.2686 4.30086 18.1901 3.72736C18.0531 2.72744 17.2731 1.94734 16.2731 1.8104C15.6996 1.73186 15.0767 1.66699 14.5835 1.66699C14.0903 1.66699 13.4674 1.73186 12.8939 1.8104Z"
        fill="#5F6165"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4165 3.33366C5.03969 3.33366 4.50728 3.38575 3.95301 3.46165C3.69407 3.49712 3.49663 3.69456 3.46117 3.9535C3.38526 4.50776 3.33317 5.04017 3.33317 5.41699C3.33317 5.79381 3.38526 6.32622 3.46117 6.88048C3.49663 7.13942 3.69407 7.33687 3.95301 7.37233C4.50728 7.44824 5.03969 7.50033 5.4165 7.50033C5.79332 7.50033 6.32573 7.44824 6.87999 7.37233C7.13893 7.33687 7.33638 7.13942 7.37184 6.88048C7.44775 6.32622 7.49984 5.79381 7.49984 5.41699C7.49984 5.04017 7.44775 4.50776 7.37184 3.9535C7.33638 3.69456 7.13893 3.49712 6.87999 3.46165C6.32573 3.38575 5.79332 3.33366 5.4165 3.33366ZM3.72687 1.8104C2.72695 1.94734 1.94686 2.72744 1.80991 3.72736C1.73137 4.30086 1.6665 4.92379 1.6665 5.41699C1.6665 5.91019 1.73137 6.53312 1.80991 7.10663C1.94686 8.10655 2.72695 8.88664 3.72687 9.02358C4.30037 9.10213 4.9233 9.16699 5.4165 9.16699C5.9097 9.16699 6.53263 9.10213 7.10614 9.02358C8.10606 8.88664 8.88615 8.10655 9.02309 7.10663C9.10164 6.53312 9.1665 5.91019 9.1665 5.41699C9.1665 4.92379 9.10164 4.30086 9.02309 3.72736C8.88615 2.72744 8.10606 1.94734 7.10614 1.8104C6.53263 1.73186 5.9097 1.66699 5.4165 1.66699C4.9233 1.66699 4.30037 1.73186 3.72687 1.8104Z"
        fill="#5F6165"
      />
    </svg>
  )
}
function SettingsIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6244 5.909C16.6331 5.25809 16.3891 4.60444 15.8924 4.10777C15.3957 3.6111 14.7421 3.3671 14.0912 3.37576C14.0909 3.37576 14.0914 3.37576 14.0912 3.37576C13.7314 3.38065 13.3717 3.46274 13.0407 3.622C12.922 3.67908 12.8069 3.74607 12.6967 3.82297C12.6542 3.85259 12.5995 3.85934 12.5517 3.83951C12.5039 3.8197 12.47 3.77627 12.4609 3.72534C12.4374 3.59299 12.4034 3.46424 12.3598 3.33998C12.2383 2.99325 12.0426 2.68143 11.7916 2.42358C11.7915 2.4234 11.7918 2.42375 11.7916 2.42358C11.3375 1.95719 10.7022 1.66699 9.99984 1.66699C9.29744 1.66699 8.66271 1.95666 8.20857 2.42305C8.2084 2.42322 8.20874 2.42287 8.20857 2.42305C7.95763 2.6809 7.76137 2.99325 7.63987 3.33998C7.59632 3.46424 7.56232 3.59299 7.53873 3.72534C7.52965 3.77626 7.49574 3.8197 7.44796 3.83951C7.40014 3.85934 7.34548 3.85259 7.30302 3.82297C7.19275 3.74607 7.07767 3.67908 6.95902 3.622C6.62793 3.46274 6.26902 3.38066 5.90925 3.37577C5.909 3.37577 5.90949 3.37577 5.90925 3.37577C5.25833 3.36711 4.60395 3.6111 4.10728 4.10777C3.61061 4.60444 3.36661 5.25809 3.37527 5.909C3.37528 5.90925 3.37527 5.90876 3.37527 5.909C3.38016 6.26877 3.46225 6.62841 3.62151 6.9595C3.67859 7.07816 3.74558 7.19324 3.82248 7.3035C3.8521 7.34597 3.85886 7.40062 3.83902 7.44845C3.81921 7.49623 3.77578 7.53014 3.72485 7.53922C3.59249 7.56281 3.46375 7.59682 3.33948 7.64036C2.99276 7.76186 2.68094 7.95761 2.42309 8.20854C2.42291 8.20871 2.42326 8.20837 2.42309 8.20854C1.9567 8.66268 1.6665 9.29793 1.6665 10.0003C1.6665 10.7027 1.95617 11.3375 2.42256 11.7916C2.42274 11.7918 2.42239 11.7914 2.42256 11.7916C2.68041 12.0425 2.99276 12.2388 3.33948 12.3603C3.46374 12.4038 3.59249 12.4378 3.72485 12.4614C3.77578 12.4705 3.81921 12.5044 3.83902 12.5522C3.85886 12.6 3.8521 12.6547 3.82248 12.6971C3.74558 12.8074 3.67859 12.9225 3.62151 13.0412C3.46225 13.3722 3.38017 13.7312 3.37528 14.0909C3.37528 14.0912 3.37529 14.0907 3.37528 14.0909C3.36662 14.7418 3.61061 15.3962 4.10728 15.8929C4.60395 16.3896 5.2576 16.6336 5.90852 16.6249C5.90876 16.6249 5.90827 16.6249 5.90852 16.6249C6.26828 16.62 6.62792 16.5379 6.959 16.3787C7.07766 16.3216 7.19274 16.2546 7.30301 16.1777C7.34548 16.1481 7.40013 16.1413 7.44796 16.1611C7.49574 16.181 7.52965 16.2244 7.53873 16.2753C7.56232 16.4077 7.59633 16.5364 7.63988 16.6607C7.76137 17.0074 7.95712 17.3192 8.20805 17.5771C8.20822 17.5773 8.20788 17.5769 8.20805 17.5771C8.66219 18.0435 9.29744 18.3337 9.99984 18.3337C10.7022 18.3337 11.337 18.044 11.7911 17.5776C11.7913 17.5774 11.7909 17.5778 11.7911 17.5776C12.042 17.3198 12.2383 17.0074 12.3598 16.6607C12.4033 16.5364 12.4374 16.4077 12.4609 16.2753C12.47 16.2244 12.5039 16.181 12.5517 16.1611C12.5995 16.1413 12.6542 16.1481 12.6967 16.1777C12.8069 16.2546 12.922 16.3216 13.0407 16.3787C13.3718 16.5379 13.7307 16.62 14.0904 16.6249C14.0907 16.6249 14.0902 16.6249 14.0904 16.6249C14.7413 16.6335 15.3957 16.3896 15.8924 15.8929C16.3891 15.3962 16.6331 14.7426 16.6244 14.0916C16.6244 14.0914 16.6244 14.0919 16.6244 14.0916C16.6195 13.7319 16.5374 13.3722 16.3782 13.0412C16.3211 12.9225 16.2541 12.8074 16.1772 12.6971C16.1476 12.6547 16.1408 12.6 16.1607 12.5522C16.1805 12.5044 16.2239 12.4705 16.2748 12.4614C16.4072 12.4378 16.5359 12.4038 16.6602 12.3603C17.0069 12.2388 17.3187 12.043 17.5766 11.7921C17.5768 11.7919 17.5764 11.7923 17.5766 11.7921C18.043 11.338 18.3332 10.7027 18.3332 10.0003C18.3332 9.29793 18.0435 8.6632 17.5771 8.20905C17.5769 8.20888 17.5773 8.20922 17.5771 8.20905C17.3193 7.95812 17.0069 7.76186 16.6602 7.64036C16.5359 7.59682 16.4072 7.56281 16.2748 7.53922C16.2239 7.53014 16.1805 7.49623 16.1607 7.44845C16.1408 7.40062 16.1476 7.34597 16.1772 7.3035C16.2541 7.19323 16.3211 7.07815 16.3782 6.95949C16.5374 6.62841 16.6195 6.26876 16.6244 5.909C16.6244 5.90925 16.6244 5.90876 16.6244 5.909ZM14.7139 5.28628C14.4252 4.9976 13.9741 4.96402 13.6501 5.19001C13.1585 5.53286 12.5056 5.62468 11.9133 5.37906C11.3225 5.13408 10.9254 4.60853 10.8201 4.01781C10.7508 3.6289 10.4081 3.33366 9.99984 3.33366C9.59158 3.33366 9.24885 3.6289 9.17953 4.01781C9.07423 4.60852 8.67715 5.13408 8.08637 5.37906C7.49407 5.62467 6.8412 5.53286 6.34961 5.19C6.02559 4.96402 5.57447 4.9976 5.28579 5.28628C4.99711 5.57496 4.96354 6.02607 5.18952 6.35009C5.53237 6.8417 5.62418 7.49456 5.37857 8.08686C5.13359 8.67763 4.60804 9.07472 4.01732 9.18002C3.62841 9.24934 3.33317 9.59207 3.33317 10.0003C3.33317 10.4086 3.62841 10.7513 4.01732 10.8206C4.60804 10.9259 5.13359 11.323 5.37857 11.9138C5.62419 12.5061 5.53237 13.159 5.18952 13.6506C4.96354 13.9746 4.99711 14.4257 5.28579 14.7144C5.57448 15.0031 6.02558 15.0366 6.3496 14.8106C6.8412 14.4678 7.49406 14.376 8.08637 14.6216C8.67714 14.8666 9.07424 15.3921 9.17953 15.9828C9.24886 16.3717 9.59158 16.667 9.99984 16.667C10.4081 16.667 10.7508 16.3717 10.8201 15.9828C10.9254 15.3921 11.3225 14.8666 11.9133 14.6216C12.5056 14.376 13.1585 14.4678 13.6501 14.8106C13.9741 15.0366 14.4252 15.0031 14.7139 14.7144C15.0026 14.4257 15.0361 13.9746 14.8102 13.6506C14.4673 13.159 14.3755 12.5061 14.6211 11.9138C14.8661 11.323 15.3916 10.9259 15.9824 10.8206C16.3713 10.7513 16.6665 10.4086 16.6665 10.0003C16.6665 9.59207 16.3713 9.24934 15.9824 9.18002C15.3916 9.07472 14.8661 8.67763 14.6211 8.08686C14.3755 7.49455 14.4673 6.84169 14.8102 6.35009C15.0361 6.02607 15.0026 5.57496 14.7139 5.28628Z"
        fill="#72767C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99984 11.667C10.9203 11.667 11.6665 10.9208 11.6665 10.0003C11.6665 9.07985 10.9203 8.33366 9.99984 8.33366C9.07936 8.33366 8.33317 9.07985 8.33317 10.0003C8.33317 10.9208 9.07936 11.667 9.99984 11.667ZM9.99984 13.3337C11.8408 13.3337 13.3332 11.8413 13.3332 10.0003C13.3332 8.15938 11.8408 6.66699 9.99984 6.66699C8.15889 6.66699 6.6665 8.15938 6.6665 10.0003C6.6665 11.8413 8.15889 13.3337 9.99984 13.3337Z"
        fill="#72767C"
      />
    </svg>
  )
}
function LogoutIcon(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.19107 12.5003C9.65098 12.4829 10.0379 12.8417 10.0552 13.3016C10.0944 14.3384 10.1494 15.0951 10.2034 15.6377C10.2566 16.172 10.5792 16.4935 11.0289 16.5485C11.5591 16.6133 12.307 16.6663 13.3334 16.6663C14.3598 16.6663 15.1078 16.6133 15.638 16.5485C16.0874 16.4935 16.4101 16.1719 16.4634 15.6374C16.5637 14.6303 16.6667 12.8904 16.6667 9.99967C16.6667 7.10899 16.5637 5.36902 16.4634 4.3619C16.4101 3.82745 16.0874 3.50581 15.638 3.45087C15.1078 3.38605 14.3598 3.33301 13.3334 3.33301C12.307 3.33301 11.5591 3.38605 11.0289 3.45086C10.5792 3.50583 10.2566 3.82732 10.2034 4.36165C10.1494 4.90422 10.0944 5.66095 10.0552 6.69778C10.0379 7.15769 9.65098 7.51644 9.19107 7.49908C8.73116 7.48172 8.3724 7.09481 8.38976 6.6349C8.42994 5.57071 8.4869 4.7792 8.54495 4.19643C8.667 2.9713 9.52117 1.95609 10.8266 1.79651C11.4343 1.72223 12.2507 1.66634 13.3334 1.66634C14.4161 1.66634 15.2325 1.72223 15.8402 1.79652C17.1458 1.95612 17.9998 2.9718 18.1218 4.1967C18.2293 5.27524 18.3334 7.0734 18.3334 9.99967C18.3334 12.9259 18.2293 14.7241 18.1218 15.8027C17.9998 17.0275 17.1458 18.0432 15.8402 18.2028C15.2325 18.2771 14.4161 18.333 13.3334 18.333C12.2507 18.333 11.4343 18.2771 10.8266 18.2028C9.52117 18.0433 8.667 17.0281 8.54495 15.8029C8.4869 15.2201 8.42994 14.4286 8.38976 13.3644C8.3724 12.9045 8.73116 12.5176 9.19107 12.5003Z"
        fill="#72767C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00576 12.3274C6.3312 12.6528 6.3312 13.1805 6.00576 13.5059C5.68032 13.8314 5.15269 13.8314 4.82725 13.5059L1.91058 10.5893C1.58514 10.2638 1.58514 9.73618 1.91058 9.41074L4.82725 6.49408C5.15269 6.16864 5.68032 6.16864 6.00576 6.49408C6.3312 6.81951 6.3312 7.34715 6.00576 7.67259L4.51168 9.16667H12.4998C12.9601 9.16667 13.3332 9.53976 13.3332 10C13.3332 10.4602 12.9601 10.8333 12.4998 10.8333L4.51168 10.8333L6.00576 12.3274Z"
        fill="#72767C"
      />
    </svg>
  )
}
function BellIcon(props) {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.1999 13.449V9.62358C17.1982 7.91915 16.5948 6.27033 15.4966 4.9691C14.3985 3.66788 12.8764 2.79823 11.1999 2.51416V1.20295C11.1999 0.883906 11.0735 0.577931 10.8484 0.352335C10.6234 0.126739 10.3182 0 9.9999 0C9.68164 0 9.37642 0.126739 9.15137 0.352335C8.92633 0.577931 8.7999 0.883906 8.7999 1.20295V2.51416C7.12343 2.79823 5.60133 3.66788 4.50316 4.9691C3.405 6.27033 2.80163 7.91915 2.7999 9.62358V13.449C2.09964 13.6971 1.4931 14.1564 1.06343 14.7637C0.633757 15.371 0.40199 16.0967 0.399902 16.8413V19.2472C0.399902 19.5662 0.526331 19.8722 0.751374 20.0978C0.976418 20.3234 1.28164 20.4501 1.5999 20.4501H5.3679C5.64424 21.4694 6.2475 22.3693 7.08462 23.0109C7.92173 23.6524 8.94618 24 9.9999 24C11.0536 24 12.0781 23.6524 12.9152 23.0109C13.7523 22.3693 14.3556 21.4694 14.6319 20.4501H18.3999C18.7182 20.4501 19.0234 20.3234 19.2484 20.0978C19.4735 19.8722 19.5999 19.5662 19.5999 19.2472V16.8413C19.5978 16.0967 19.366 15.371 18.9364 14.7637C18.5067 14.1564 17.9002 13.6971 17.1999 13.449ZM5.1999 9.62358C5.1999 8.34741 5.70561 7.12351 6.60579 6.22113C7.50596 5.31874 8.72686 4.81179 9.9999 4.81179C11.2729 4.81179 12.4938 5.31874 13.394 6.22113C14.2942 7.12351 14.7999 8.34741 14.7999 9.62358V13.2324H5.1999V9.62358ZM9.9999 21.6531C9.58107 21.6505 9.17019 21.5381 8.8081 21.3271C8.44601 21.1161 8.14531 20.8137 7.9359 20.4501H12.0639C11.8545 20.8137 11.5538 21.1161 11.1917 21.3271C10.8296 21.5381 10.4187 21.6505 9.9999 21.6531ZM17.1999 18.0442H2.7999V16.8413C2.7999 16.5222 2.92633 16.2162 3.15137 15.9906C3.37642 15.7651 3.68164 15.6383 3.9999 15.6383H15.9999C16.3182 15.6383 16.6234 15.7651 16.8484 15.9906C17.0735 16.2162 17.1999 16.5222 17.1999 16.8413V18.0442Z"
        fill="#7C7C8D"
      />
      <circle
        cx="14.8999"
        cy="6.5"
        r="3.75"
        fill="#FF5E6F"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}
