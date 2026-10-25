import React from 'react'
import Navigation from './Navigation'

const Home = () => {
  return (
    <main className='home-panel flex flex-col gap-4 h-screen w-full'>
      <div className="top flex justify-between py-3">
        <Navigation icon="menu" color="text-gray-600/70" />
        <div className='flex'>
        <Navigation icon="search" color="text-gray-600/70" />
        <Navigation icon="notifications" color="text-gray-600/70" />
        </div>
      </div>
      <div className="greeting text-3xl font-bold py-3 p-2">What's up, Joy!</div>
      <div className="dashboard">
        <div className='text-[14px] text-gray-600 p-2'>CATEGORIES</div>
        <div className="boxes flex gap-5 p-5 overflow-x-scroll">
          <div className="box shrink-0 shadow-md h-26 w-44 rounded-2xl bg-white"></div>
          <div className="box shrink-0 shadow-md h-26 w-44 rounded-2xl bg-white"></div>
          <div className="box shrink-0 shadow-md h-26 w-44 rounded-2xl bg-white"></div>
        </div>
      </div>
      <div className="tasks">
        <div className='text-[14px] text-gray-600 p-2'>TODAY'S TASKS</div>
        <div className='w-full flex flex-col gap-5'>
          <div className="box shadow-md h-16 rounded-2xl bg-white"></div>
          <div className="box shadow-md h-16 rounded-2xl bg-white"></div>
          <div className="box shadow-md h-16 rounded-2xl bg-white"></div>
          <div className="box shadow-md h-16 rounded-2xl bg-white"></div>
        </div>
      </div>
    </main>
  )
}

export default Home
