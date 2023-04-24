import { IoCloseCircle } from 'react-icons/io5'
import Link from 'next/link';


const Commits = () => {
    let jobs = [
        {
            id: 1,
            commitHash: 'fDyLNCD',
            commitMessage: 'Fishgate Advertising',
            commitDate: '2009 - 2014',
            commitUrl: 'https://fishgate.co.za/',
        },
        {
            id: 2,
            commitHash: 'KpCMPAR',
            commitMessage: 'Liquorice',
            commitDate: '2014 - 2016',
            commitUrl: 'https://liquorice.co.za/',
        },
        {
            id: 3,
            commitHash: '40Q0cMf',
            commitMessage: 'WeAreMonsters',
            commitDate: '2016 - 2018',
            commitUrl: 'https://wearemonsters.co.za/',
        },
        {
            id: 4,
            commitHash: 'TrhUAuX',
            commitMessage: 'Lighthouse Technologies',
            commitDate: '2018 - Present',
            commitUrl: 'https://www.getlighthouse.app',
        },
    ]

    return (
        <div className="text-white relative z-[1] w-full md:w-1/3 xl:w-1/3 p-10 bg-black bg-opacity-80 rounded-lg drop-shadow-2xl">
            <div className='absolute top-0 left-0 bg-slate-600 w-full rounded-t-md flex flex-row justify-end'>
                <IoCloseCircle className='text-slate-700 my-1 mr-1' />
            </div>
            <h1 className="text-md font-semibold mb-4">Previous commits</h1>
            {jobs.length && jobs.map((job) => (
                <div key={job.id} className="flex flex-row justify-between mb-3">
                <div className="flex flex-col">
                    <Link href={job.commitUrl} target="_blank" className="text-sm font-semibold transition-colors hover:text-green-600">{job.commitMessage}</Link>
                    <p className="text-xs">{job.commitDate}</p>
                    <small className='text-[0.5rem] text-slate-600'>Commit hash: {job.commitHash}</small>
                </div>
            </div>
            ))}
        </div>
    );
}
 
export default Commits;