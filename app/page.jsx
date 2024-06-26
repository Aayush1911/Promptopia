import React from 'react'
import '@/styles/global.css'
import Feed from '@/components/Feed'
function page() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Discover & share
      <br className='md:hidden'/>
      <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is a open-source AI prompting tool for modern world to discover,create and share creative prompts
      </p>
      {/* feed */}
      <Feed/>
    </section>
  )
}

export default page