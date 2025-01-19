export default function Rules({resetGame}) {
    return(
        < div className="flex items-center justify-center fixed inset-0 bg-black/30 backdrop-blur-sm z-50 px-2 md:px-20 rounded-lg">
            <div className='flex flex-col gap-4 justify-center items-center p-2 md:p-8 bg-white rounded-lg font-pixel py-4'>
                <div className='flex gap-1 text-red-500'>Rules</div>
                <div className='flex flex-col text-[0.5rem] sm:text-sm items-center gap-2 md:gap-5 mb-2'>
                    <div className="">- Click on a Pokemon to score points</div>
                    <div>- Click on the same Pokemon twice and you lose</div>
                </div>
                <button 
                    type="button" 
                    onClick={resetGame}
                    className='bg-blue-500 hover:bg-blue-700 text-[0.6rem] md:text-base text-white font-bold py-2 px-4 rounded font-pixel'
                >
                    Start game
                </button>
            </div>
        </div>
    )
}