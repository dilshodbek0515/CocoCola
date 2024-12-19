import About from '@/components/about/About'
import Brend from '@/components/brend/Brend'
import Hero from '@/components/hero/Hero'
import News from '@/components/news/News'
import { memo } from 'react'

function Home () {
  return (
    <div>
      <Hero />
      <About />
      <Brend />
      <News />
    </div>
  )
}

export default memo(Home)
