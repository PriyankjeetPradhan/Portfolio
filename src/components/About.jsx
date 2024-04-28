import React from 'react'
import aboutImg from '../assets/about4.jpeg'


function About() {
  return (
    <div className='py-10 Itext-white □ bg-[#232325] h-auto' id='about'>
<div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6x1 mx-auto">
<div>
<div className="w-[400px] h-full">
<img
src={aboutImg}
alt=""
className="object-cover rounded-xl h-[300px] filter grayscale
brightness-50"
/>
</div>
              </div>
              
              <div>
<div className="p-2">
<div className=" text-gray-300 my-3">
<h3 className="text-4x1 font-semibold mb-5">About <span className="primary-text">Me</span></h3>
<p className="text-justify leading-7 w-11/12 mx-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
eos注 , quam vel quisquam, explicabo sit labore dignissimos optio
ratione quibusdam doloribus pariatur consequuntur sint.
Reprehenderit cupiditate possimus facere quasi voluptatem?
</p>
</div>
                  </div>
<div className="flex mtl 10 items-center gap-7">
<div className="bg-[#333333]/40 p-5 rounded-lg">
<h3 className="md: text-4x1 text-2xl font-semibold text-white">5
<span className="primary-text">+</span>
</h3>
<p><span className="md:text-base text-xs">Projects</span></p>
                      </div>
                      <div className="bg-[#333333]/40 p-5 rounded-lg">
<h3 className="md: text-4x1 text-2xl font-semibold text-white">1
<span className="primary-text">+</span>
</h3>
<p><span className="md:text-base text-xs">Experience</span></p>
                      </div>
                      
</div>          
</div>
          </div>
          </div>
  )
}

export default About