import './index.css'

export const comparisions = [
    { id: '1', text: 'Point no one' },
    { id: '2', text: 'Point no two this' },
    { id: '2', text: 'Point no two this' },
    { id: '2', text: 'Point no two this' },
    { id: '2', text: 'Point no two this' },
];

export const About = () => {
    return (
        <div id='about'  className="mt-56">
            <div className='w-11/12 max-w-screen-xl mx-auto'>
                <h2 className='text-white font-firaCode font-extrabold text-4xl lg:text-[2.8125rem] text-center lg:text-left ml-0 lg:ml-16 my-6 tracking-wide'>
                    Why <span className='text-[#F9D423]'>MoonEX</span> ?
                </h2>

                <div className='w-full mx-auto px-4 sm:px-6 lg:px-10 pt-3 pb-11 bg-[#ffffff]/[2%] rounded-lg lg:rounded-[1.7rem]'>
                    <div className='relative'>


                        {/* gradient */}
                        <div className='absolute hidden lg:block left-32 top-64 bg-gradient-to-br from-[#fadb6a] to-primary h-[150px] w-[120px] lg:h-[250px] lg:w-[160px] blur-[120px] lg:blur-[230px]'></div>

                        <table className='w-full border-collapse text-sm sm:text-base lg:text-lg'>
                            <thead>
                                <tr className='border-b border-[#d9d9d9]/10'>
                                    <th className='py-4 '>
                                        <div>
                                            <img
                                                src='Comparison.png'
                                                alt='Comparison'
                                                className='w-24 sm:w-28 md:w-36 m-auto'
                                            />
                                        </div>
                                    </th>
                                    <th className='text-center py-4'>
                                            <div>
                                                <img
                                                    src='logo.png'
                                                    alt='Moonex logo'
                                                    className='w-24 sm:w-28 md:w-36 m-auto'
                                                />
                                        </div>
                                    </th>
                                    <th className='text-center py-4 '>
                                        <div>
                                            <img
                                                src='Uniswap_Logo.png'
                                                alt='Uniswap logo'
                                                className='w-20 sm:w-24 md:w-36 m-auto'
                                            />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisions.map((comparision, index) => (
                                    <tr key={index} className='border-b border-gray-800'>
                                        <td className='text-[#f0f0f0]/70 text-xs sm:text-base lg:text-lg font-firaCode py-2 sm:px-6 lg:py-[1.1rem]'>
                                            {comparision.id}. {comparision.text}
                                        </td>
                                        <td className='text-center py-2'>
                                            <div className='flex justify-center'>
                                                <img
                                                    src='/coolicon.png'
                                                    alt='✅'
                                                    className='w-3 sm:w-6'
                                                />
                                            </div>
                                        </td>
                                        <td className='text-center py-2'>
                                            <div className='flex justify-center'>
                                                <img
                                                    src='/close_small.png'
                                                    alt='❌'
                                                    className='w-6 sm:w-10'
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Extended vertical lines */}
                        <div className='absolute top-4 -bottom-4 left-[38.5%] w-px bg-[#d9d9d9]/10'></div>
                        <div className='absolute top-4 -bottom-4 left-[70.5%] w-px bg-[#d9d9d9]/10'></div>

                        {/* Bottom horizontal line */}
                        <div className='absolute left-0 right-0 bottom-0 h-px bg-[#d9d9d9]/10'></div>
                    </div>
                </div>
            </div>

            <Features />
        </div>
    );
};


//-----------------------------------------Features-----------------------
import { features } from "./util";


const Features = () => {
    return (
        <div className='mt-12 w-11/12 mx-auto text-white py-12'>
            <h2 className='font-firaCode font-extrabold text-4xl md:text-[2.8125rem] my-6 text-center'>
                Our <span className='text-[#F9D423]'>Features</span>
            </h2>

            <div className='features grid grid-cols-4 justify-items-center mt-12 ' >
                {features.map(({ title, des, img }) => (
                    <div
                        key={img}
                        className='box w-[280px] h-[281px] border border-[#ffffff]/5 bg-[#ffffff]/[2%]  rounded-[18px] p-[1.875rem] pl-[1.75rem] transition-all duration-100 hover:shadow-[0_0_5px_rgba(255,230,143,0.1)] hover:scale-[1.01]'
                    >
                        <img src={img} alt={title} />
                        <h4 className='text-xl leading-[1.875rem] text-[#e6f1f0] mb-3 mt-8'>
                            {title}
                        </h4>
                        <p className='text-base text-[#b6b6b6]'>{des}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

