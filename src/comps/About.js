import { IoCloseCircle } from 'react-icons/io5'
import Link from 'next/link';

const About = () => {
    return (
        <div className="text-white relative z-[1] w-full lg:w-1/2 xl:w-1/3 p-10 bg-black bg-opacity-80 rounded-lg drop-shadow-2xl">
            <div className='absolute top-0 left-0 bg-slate-600 w-full rounded-t-md flex flex-row justify-end'>
                <IoCloseCircle className='text-slate-700 my-1 mr-1' />
            </div>
            <h1 className="text-md font-semibold mb-4">Hello world</h1>
            <p className="text-sm mb-3">My name is Tyrone and I am a frontend web developer.</p>
            <p className="text-sm">With well over 10 years in the industry, I have worked at companies of every size, ranging from companies with hundreds of employess to smaller ones where the max head-count was under 20 and even at a startup where we were only a handful of individuals</p>

            <div className='mt-10'>
                <Link href="https://drive.google.com/uc?export=download&id=1q-oBtOu6glEaLDTnh-rRMZMxqT8ljNK_" target="_blank">
                    <span className='transition-colors p-2 rounded-md bg-white text-slate-600 hover:bg-slate-600 hover:text-green-600'>Grab a copy of my CV</span>
                </Link>
            </div>
        </div>
    );
}
 
export default About;