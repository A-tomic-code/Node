const base_url = 'https://pokeapi.co/api/v2/pokemon/';
const input_suffix = document.querySelector('#suffix_url');
const table = document.querySelector('table');

function getData(){
    let suffix_url = input_suffix.value;
    const url = base_url + suffix_url;

    let params = 
    {
        headers: {'content-type': 'application/json'},
        method:'GET'
    }

    fetch(url, params)

    .then((data) => {
        return data.json()
    })

    .then((result) => {
        console.log(result);
        table.style.opacity = 0;
        table.innerHTML = 
            `<tr>
                <th>
                Pokémon
                </th>
            </tr>
            <tr>
                <th>
                Tipo
                </th>
            </tr><tr>
                <th>
                Habilidades
                </th>
            </tr><tr>
                <th>
                Movimientos
                </th>
            </tr>
            `

        let row_pokemon = document.querySelectorAll('tr')[0]
        let row_tipo = document.querySelectorAll('tr')[1]
        let row_habilidades = document.querySelectorAll('tr')[2]
        let row_movmientos = document.querySelectorAll('tr')[3]


        // NOMBRE

        let TD_nombrePokemon = document.createElement('td');
        TD_nombrePokemon.innerText = result.name;

            //imagenes

        let pokemon_imgFront = document.createElement('img');
        pokemon_imgFront.src = result.sprites.front_default;
        pokemon_imgFront.width = 130

        let pokemon_imgBack = document.createElement('img');
        pokemon_imgBack.src = result.sprites.back_default;
        pokemon_imgBack.width = 130


        let th_img = document.createElement('th');
        th_img.setAttribute('rowspan', '4');
            
        th_img.appendChild(pokemon_imgFront);
        th_img.appendChild(pokemon_imgBack);

        row_pokemon.appendChild(TD_nombrePokemon);
        row_pokemon.appendChild(th_img);


        //TIPO

        let TD_tipoPokemon = document.createElement('td');
        result.types.forEach((type, index, arr) => {
            TD_tipoPokemon.innerText += type.type.name;

            if(arr.length > 1) {
                TD_tipoPokemon.innerText += ' '
            }
        });
        row_tipo.appendChild(TD_tipoPokemon);

        //HABILIDADES

        let TD_habilidadesPokemon = document.createElement('td');
        result.abilities.forEach((ability, index, arr) => {
            TD_habilidadesPokemon.innerText += ability.ability.name;

            if(arr.length > 1){
                TD_habilidadesPokemon.innerText += ' ';
            }
        });
        row_habilidades.appendChild(TD_habilidadesPokemon)

        //MOVIMIENTOS

        let TD_movimientosPokemon = document.createElement('td');
        result.moves.forEach((move, index, arr) => {
            TD_movimientosPokemon.innerText += move.move.name

            if(arr.length > 1){
                TD_movimientosPokemon.innerText += ' ';
            }
        });
        row_movmientos.appendChild(TD_movimientosPokemon);

        //fade-in
        let wrapper_opacity = Number(document.querySelector('.data-wrapper').style.opacity)
        let table_opacity = Number(table.style.opacity)
        let timer = setInterval(() => {
            table_opacity += 0.1;
            wrapper_opacity += 0.1;
            table.style.opacity = table_opacity
            document.querySelector('.data-wrapper').style.opacity = wrapper_opacity;

            if(table_opacity > 1){
                clearInterval(timer)
            }
        }, 50);

    })
    

    .catch((e) => {
        alert(e)
    })
}