import win from '../assets/win.gif';

export default function Winner({score,resetGame}) {
    return(
        <div className='flex items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-sm z-50 pt-20 pb-20 rounded-lg'>
            <div className='bg-white rounded-2xl p-8 shadow-lg w-4/12 h-full'>
                <div className='flex flex-col justify-center align-center items-center gap-4'>
                    <div className='text-2xl font-bold mb-4 font-pixel'>You Won!!</div>
                    <img src={win} alt="win gift" className='h-48   '/>
                    <div className='text-sm my-4 font-pixel'>Your final score is: {score}</div>
                    <button 
                        type="button" 
                        onClick={resetGame}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-pixel'
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    )
}