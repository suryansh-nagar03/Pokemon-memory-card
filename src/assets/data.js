
let data = [];
let processed = false;
async function getPokemon() {
    for (let i = 1; i <= 5; i++) {
        const n = Math.floor(Math.random()*900+1);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+n, { mode: 'cors' })
        const result = await response.json();

        const newPokemon = {
            name: result.forms[0].name,
            image: result.sprites.front_default,
            id: i
        }
        data.push(newPokemon);
    }
    console.log(data);
    processed = true;
}

getPokemon();

export {data,getPokemon};

