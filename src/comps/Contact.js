import { IoCloseCircle } from 'react-icons/io5'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="text-white relative z-[1] w-full md:w-1/3 p-10 bg-black bg-opacity-80 rounded-lg drop-shadow-2xl">
            <div className='absolute top-0 left-0 bg-slate-600 w-full rounded-t-md flex flex-row justify-end'>
                <IoCloseCircle className='text-slate-700 my-1 mr-1' />
            </div>
            <h1 className="text-md font-semibold mb-4">Get in touch</h1>
            <p className="text-sm mb-3 flex flex-row items-center">
                You can reach me at the following email address: <Link href="mailto:ty@crayoncapsule.co.za"><AiOutlineMail className='transition-colors ml-4 text-2xl hover:text-green-600' /></Link>
            </p>
            <p className="text-sm mb-3 flex flex-row items-center">
                You can also find me on LinkedIn: <Link href="https://www.linkedin.com/in/tyrone-stafford-90894068/" target="_blank"><AiFillLinkedin className='transition-colors ml-4 text-2xl hover:text-green-600' /></Link>
            </p>
        </div>
    );
}
 
export default Contact;