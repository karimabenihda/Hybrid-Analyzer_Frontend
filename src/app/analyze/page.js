import React from 'react'

function page() {
  return (
    <div>
      <textarea 
 className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-[#4f39f6] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#4f39f6] placeholder-shown:border-t-[#4f39f6] focus:border-2 focus:border-[#4f39f6] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
 placeholder=" " name="text"  value={text}
 onChange={(e) => setText(e.target.value)}
 ></textarea>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-[#4f39f6] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#4f39f6] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#4f39f6] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#4f39f6] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#4f39f6] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#4f39f6] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#4f39f6] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Text  
    </label>
    </div>
  )
}

export default page
