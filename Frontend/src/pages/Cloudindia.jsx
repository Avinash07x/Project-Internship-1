import React from 'react'
import Clients from '../components/Clients';
import Heroindia from '../Cloud/Heroindia';
import Features from '../VPS/Features';
import Planindia from '../Cloud/Planindia';
import FAQsection from '../components/FAQsection'

const Cloudindia = () => {
    return (
        <div className=' bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] '>
            <Heroindia />
            <div
                id='CloudIndiaPlans'
                className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Planindia />
            </div>
            <Features />
            <div className="max-w-[1200px]  bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] flex justify-center flex-col mx-auto px-0 py-1 ">
                <FAQsection />
            </div>
            <div className="mt-20">
                <Clients />
            </div>
        </div>
    )
}

export default Cloudindia;