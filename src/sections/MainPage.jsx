import { Button } from '../components/Button'
import { Ellipse } from '../components/ellipse/Ellipse'
import { Ellipse1 } from '../components/ellipse/Ellipse1'
import { Navbar } from '../components/Navbar'
import './MainPage.css'

export const MainPage = () => {
    return (
        <div className={'lg:px-8 px-4 py-5 h-screen min-w-full text-white relative'}>

            <div className='z-50 relative'>
                <Navbar />
            </div>

            <div className='z-10'>
                <Ellipse h='h-72' w='w-96' position={'top-2 left-0'} blur={'blur-[230px]'}/>
                <Ellipse h='h-44' w='w-72' position={'bottom-24 right-0'} blur={'blur-[210px]'} />
            </div>

            <div className='z-20'>
                <Ellipse1 size={'w-[950px] h-[500px]'} />
                <Ellipse1 size={'w-[1400px] h-[650px]'} />
                <Ellipse1 size={'w-[1950px] h-[850px]'} />
            </div>

            <div className='z-40'>
                <Content />
            </div>

                {/* big sphere */}
            <div className='z-30'>
            <div className="gola bg-gradient-to-r from-[#FFF6D7] to-[#E4B40D] h-44 w-44 rounded-full absolute top-[32%] right-32"></div>
            </div>

            {/* stars */}
            <div className=' z-30'>
                <img className='top-32 left-44 absolute w-10' src="star-img.png" alt="star" />
                <img className='bottom-32 right-96 absolute w-12' src="star-img.png" alt="star" />
                <img className='top-28 right-48 absolute w-10' src="star-img-sm.png" alt="star" />
            </div>

        </div>
    )
}

const Content = () => {
    return (
        <div id='home' className='content top-1/2 -translate-y-1/2 absolute px-20'>
            
            <div>
                <h1 className='text-5xl font-semibold'>Trusted Multi-Chain <br /> <span className='text-[#F9D423]'>DEX</span> Plateform</h1>
                <p className='text-[#9E9E9E] mt-4'>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            </div>

            <div className='flex gap-5 mt-7'>
                <Button label='Connect Wallet' type='filled' />
                <Button label='Trade Crypto' type='trans' />
            </div>
        </div>
    )
}