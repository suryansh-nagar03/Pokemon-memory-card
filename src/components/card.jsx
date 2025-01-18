import loadingImg from '../assets/loading.png';
import { useEffect, useState } from 'react';

let cardsSelected = [];

export default function Card({updateScore,updateHighScore,gameOver,changeGameOver,reset,pokemonData,setData,numberOfPokemon}) {
    const [fetched,setFetched] = useState(false);
    
    async function getPokemon() {
            try {
            let pokemon = [];
            let pokemonName = [];
            for (let i = 1; i <= numberOfPokemon; i++) {
                const n = Math.floor(Math.random()*150+1);
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+n);
                const result = await response.json();
                console.log('Pokemon fetched:', result.forms[0].name);  // Debug log

                const newPokemon = {
                    name: result.forms[0].name.charAt(0).toUpperCase() + result.forms[0].name.substring(1),
                    image: result.sprites.front_default,
                    id: `${i}`
                }
                if(!pokemonName.includes(newPokemon.name)){
                    pokemon.push(newPokemon);
                    pokemonName.push(newPokemon.name);
                }
                else{
                    i--;
                }
            }
            setData(pokemon);
            setFetched(true);
        } catch (error) {
            console.error('Error fetching pokemon:', error);
        }
    }

    useEffect(()=>{
        setFetched(false);
        getPokemon();
        cardsSelected = [];
    },[reset]);

    function handleClick(e){
        if(!cardsSelected.includes(e.currentTarget.id)){
            cardsSelected.push(e.currentTarget.id);

            updateScore();
            shuffleCards();
        }
        else{
            updateHighScore();
            changeGameOver();
        }
    }

    function shuffleCards() {
        const shuffled = [...pokemonData];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setData(shuffled);
    }

    if(!fetched){
        return(
            <div className='flex flex-col justify-center items-center pt-12 gap-4'>
            <div className='text-1xl font-semibold font-pixel'>The game is loading...</div>
            <img src={loadingImg} alt="loading" className='w-20 h-20 animate-spin'/>
            </div>
        )
    }   
    return (
        <div className='flex flex-wrap justify-center items-center gap-8 mt-20'>
        {pokemonData.map((pokemon)=>{
            return( 
                <div key={pokemon.id} id={pokemon.id} className='flex flex-col justify-center items-center bg-gray-600/35 m-2 p-2 w-44 h-52 rounded-lg shadow-md cursor-pointer contain-content hover:bg-gray-800/50 transition-colors'
                onClick={(e)=>{handleClick(e)}}>
                    <img src={pokemon.image} alt={pokemon.name} className='w-20 h-20'/>
                    <div className='text-center font-pixel text-sm p-5'>{pokemon.name}</div>   
                </div>
            )
        })}
        </div>
    )
}