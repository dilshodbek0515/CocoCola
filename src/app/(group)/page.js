import About from '@/components/about/About'
import Brend from '@/components/brend/Brend'
import Hero from '@/components/hero/Hero'
import { memo } from 'react'

function Home () {
  return (
    <div className=''>
      <Hero />
      <About />
      <Brend />
    </div>
  )
}

export default memo(Home)
