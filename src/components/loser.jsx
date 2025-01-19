import lost from '../assets/loss.gif';

export default function Loser({score,resetGame}) {
    return(
            <div className='flex items-center justify-center p-20 fixed inset-0 bg-black/30 backdrop-blur-sm z-50 rounded-lg'>
                <div className='bg-white rounded-2xl p-8 shadow-lg w-64 h-100 sm:w-96 sm:h-120'>
                    <div className='flex flex-col justify-center align-center items-center gap-4'>
                        <div className='text-sm sm:text-base md:text-2xl font-bold mb-2 font-pixel'>You Lost</div>
                        <img src={lost} alt="win gift" className='h-28 sm:h-36 md:h-48'/>
                        <div className='text-[0.7rem] sm:text=xs md:text-sm my-2 font-pixel text-center'>Your final score is: {score}</div>
                        <button 
                            type="button" 
                            onClick={resetGame}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 sm:py-2 sm:px-4 text-[0.7rem] sm:text-sm md:text-base rounded font-pixel'
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        )
}