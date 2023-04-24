import {TiHtml5, TiCss3} from 'react-icons/ti'
import { SiReact, SiNextdotjs, SiAwsamplify, SiContentful, SiTailwindcss } from 'react-icons/si'
import { IoLogoVue, IoCloseCircle } from 'react-icons/io5'

const Tech = () => {
    return (
        <div className="text-white relative z-[1] w-full lg:w-1/2 xl:w-1/3 p-10 bg-black bg-opacity-80 rounded-lg drop-shadow-2xl">
            <div className='absolute top-0 left-0 bg-slate-600 w-full rounded-t-md flex flex-row justify-end'>
                <IoCloseCircle className='text-slate-700 my-1 mr-1' />
            </div>
            <h1 className="text-md font-semibold mb-4">Tech</h1>
            <div className="grid grid-flow-row grid-cols-4 gap-3 text-[4rem]">
                <TiHtml5 />
                <TiCss3 />
                <IoLogoVue />
                <SiReact />
                <SiNextdotjs />
                <SiTailwindcss />
                <SiContentful />
                <SiAwsamplify />
            </div>
        </div>
    );
}
 
export default Tech;