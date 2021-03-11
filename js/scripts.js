let pokemonRepository = (function(){
  let pokemonList = [
        {
          name : 'Bulbasaur',
          type : [ 'grass' , 'poison' ],
          height : 0.7 ,
          attack : 49 ,
          defense : 49 ,
        } ,
        {
          name : 'Charmander',
          type : [ 'fire' ],
          height : 0.6 ,
          attack : 52 ,
          defense : 43 ,
        } ,
        {
          name : 'Squirtle',
          type : [ 'water' ],
          height : 0.5 ,
          attack : 48 ,
          defense : 45 ,
        } ,
        {
          name : 'Caterpie',
          type : [ 'bug' ],
          height : 0.3 ,
          attack : 30 ,
          defense : 35 ,
        } ,
        {
          name : 'Weedle',
          type : [ 'bug' , 'poison' ],
          height : 0.3 ,
          attack : 35 ,
          defense : 30 ,
        } ,
        {
          name : 'Pidgey',
          type : [ 'normal' , 'flying' ],
          height : 0.3 ,
          attack : 45 ,
          defense : 40 ,
        } ,
        {
          name : 'Rattata',
          type : [ 'normal' ],
          height : 0.3 ,
          attack : 56 ,
          defense : 35 ,
        } ,
        {
          name : 'Spearow',
          type : [ 'normal' , 'flying' ],
          height : 0.3 ,
          attack : 60 ,
          defense : 30 ,
        } ,
        {
          name : 'Ekans',
          type : [ 'poison' ],
          height : 2 ,
          attack : 60 ,
          defense : 44 ,
        } ,
        {
          name : 'Pikachu',
          type : [ 'electric' ],
          height : 0.4 ,
          attack : 55 ,
          defense : 40 ,
        }
        ];

  function getAll(){
      return pokemonList;
    }

  function addPokemon(item){
    if(typeof(item)=='object'){
      let newPokeProperty = Object.keys(item);
      if (newPokeProperty.includes('name') && newPokeProperty.includes('height') && newPokeProperty.includes('type') && newPokeProperty.includes('attack') && newPokeProperty.includes('defense'))
      {pokemonList.push(item)}else{
      alert('Missing properties!');
      }
    }
  }

  function addListItem(pokemon){
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let listButton = document.createElement('button');
    listButton.innerText = pokemon.name;
    listButton.classList.add('custom-button');
    list.appendChild(listButton);
    list.appendChild(listItem);
    addListener(listButton, pokemon);
  }

  function addListener(listButton, pokemon){
      listButton.addEventListener('click', () => showDetails(pokemon));
  }

  function showDetails(pokemon){
      console.log(pokemon)
  }

  return{
    getAll: getAll,
    addPokemon: addPokemon,
    addListItem: addListItem,
  }
})();

//function display(pokemon) {
    //if (pokemon.height > 1){
     // document.write (pokemon.name + "  (Height: " + pokemon.height + ") - Wow! That's tall! " + "<br> <br>");
    //}else{
     // document.write (pokemon.name + "  (Height: " + pokemon.height + ") <br> <br>");
    //}
 // }

//pokemonRepository.addPokemon({ name: 'Sandshrew', type: ['ground'], height: 0.2, attack: 75, defense:85, });

pokemonRepository.getAll().forEach(pokemon => pokemonRepository.addListItem(pokemon));
