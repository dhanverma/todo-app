import React from 'react'
import Navigation from './Navigation'

const Sidebar = () => {
    return (
        <aside className="sidebar h-screen max-w-96 flex flex-col bg-[#0d1b3e] font-semibold text-white p-12 rounded-3xl relative">
            <nav className='flex gap-22'>
                <div className="pfp-wrapper my-7 p-1 flex justify-center items-center w-30 h-30 rounded-full bg-gradient-to-tr from-[#383364] via-[#383364] to-[#ff00b8]">
                    <div className="inner w-full h-full rounded-full bg-[#0d1b3e] p-1.5">
                        <img className="rounded-full w-full h-full text-center" src="https://res.cloudinary.com/cloudinary-marketing/images/c_scale,w_auto,dpr_auto/f_auto,q_auto/v1785474842/website_2021/pfp-avatar-hero-1/pfp-avatar-hero-1.jpg?_i=AA&w=1024" alt="Pfp" />
                    </div>
                </div>
                <button className='w-14 h-14 text-center rounded-full border-2 border-gray-300/20'><span className="material-symbols-outlined">arrow_back_ios</span></button>
            </nav>
            <div className="name text-5xl p-3 flex flex-wrap max-w-1/2 leading-14">Joy Mitchell</div>
            <ul className='flex flex-col gap-6 p-3 py-8 text-[20px] text-gray-200/70'>
                <Navigation color=" text-gray-200/30" icon="bookmark" label="Templates" />
                <Navigation color=" text-gray-200/30" icon="grid_view" label="Categories" />
                <Navigation color=" text-gray-200/30" icon="pie_chart" label="Analytiics" />
                <Navigation color=" text-gray-200/30" icon="settings" label="Settings" />
            </ul>
            <div className="graph h-22">Graph</div>
            <div className="rating text-2xl flex flex-col gap-0.5">
                <span className='text-gray-200/20 text-[16px]'>Good</span>
                <span>Consistency</span>
            </div>
        </aside>
    )
}

export default Sidebar
