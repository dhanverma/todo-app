import React from 'react'

const Navigation = ({ icon, label, color }) => {

    return (
        <div>
            <button className='flex gap-5'>
                <span className={`material-symbols-outlined ${color} `}>
                    {icon}
                </span>
                <span>
                    {label}
                </span>
            </button>
        </div>
    )
}

export default Navigation
