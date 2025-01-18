export default function Rules({resetGame}) {
    return(
        < div className="flex items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-sm z-50 pt-20 pb-20 rounded-lg">
            <div className='flex flex-col justify-center items-center p-8 bg-white rounded-lg font-pixel pt-11'>
                <div className='flex items-center gap-3 text-2xl'>
                    <div className='flex gap-1'><span className='text-red-500'>Rules</span></div>
                </div>
                <div className='flex flex-col text-sm items-center gap-5 p-8 text-1xl'>
                    <div className="">- Click on a Pokemon to score points</div>
                    <div>- Click on the same Pokemon twice and you lose</div>
                </div>
                <button 
                    type="button" 
                    onClick={resetGame}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-pixel'
                >
                    Start game
                </button>
            </div>
        </div>
    )
}