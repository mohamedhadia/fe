import BestSelling from '@/components/home/BestSelling/BestSelling'
import DataCards from '@/components/home/DataCards'
import HeroCards from '@/components/home/HeroCards'
import axios from 'axios'
import Head from 'next/head'
import useSWR from 'swr'

export default function Home({ bestSellings }) {
  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data } = useSWR(
    'https://mocki.io/v1/c83b250a-1ccd-466b-821f-63b74dd626e1',
    fetcher
  )
  const { data: heroCards } = useSWR(
    'https://mocki.io/v1/79b0edd5-2c00-4738-bc26-34e4be80ba8b',
    fetcher
  )

  return (
    <>
      <Head>
        <title>Motiv.</title>
        <meta
          name="description"
          content="FE Assesment using nextjs and tailwindcss"
        />
      </Head>

      <DataCards data={data} />

      <HeroCards data={heroCards} />

      <BestSelling bestSellings={bestSellings} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://mocki.io/v1/52293e68-dd11-475e-a1a0-6ca48870b2be'
  )
  const bestSellings = await res.json()
  return {
    props: {
      bestSellings,
    },
  }
}
