import Pokeball from '../assets/Pokeball.png';

export default function Header({score,highScore}) {
    return(
        <header className='flex flex-col justify-between items-center p-8 bg-transparent font-pixel pt-11'>
            <div className='flex items-center gap-3 text-base md:text-2xl'>
                <img src={Pokeball} alt="pokeball logo"  width={48} height={48} className=''/>
                <div className='flex gap-1'><span className='text-red-500'>Poke</span><span className='text-white'>Memo</span></div>
            </div>
            <div className='flex items-center gap-6 sm:gap-20 pt-8 text-[0.7rem] sm:text-sm md:text-base'>
                <div>Score: {score}</div>
                <div>High Score: {highScore}</div>
            </div>
        </header>
    )
}