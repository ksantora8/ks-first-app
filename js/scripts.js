let pokemonRepository = (() => {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getArray(){
      return pokemonList;
    }

  function addToArray(pokemon){
    if(typeof(pokemon)=='object'){
      let newPokeProperty = Object.keys(pokemon);
      if (newPokeProperty.includes('name') && newPokeProperty.includes('detailsUrl')){
        pokemonList.push(pokemon)
      }else{
        alert('Incorrect Keys');
      }
    } else {
      alert ('All inputs must be objects.');
    }
  }

  function addListItem(pokemon){
    let list = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let listButton = document.createElement('button');
    listButton.innerText = pokemon.name;
    listButton.classList.add('custom-button');
    listItem.appendChild(listButton);
    list.appendChild(listItem);
    addListener(listButton, showDetails, pokemon);
  }

  function addListener(element, method , object){
      element.addEventListener('click', () => method(object));
  }

  function showDetails(pokemon){
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        addToArray(pokemon);
      });
    }).catch(function (err) {
      console.error(err);
    })
  }

  //go back in and correct syntax to match rest of code
  function loadDetails(pokemon){
    let url = pokemon.detailsUrl;
    return fetch(url)
          .then(response => response.json())
          .then(details => {
             pokemon.imageUrl = details.sprites.front_default;
             pokemon.height = details.height;
             pokemon.types = details.types;
          })
          .catch(err => console.log(err))
}

  return{
    getArray: getArray,
    addToArray: addToArray,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails : loadDetails,
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getArray().forEach(pokemon => pokemonRepository.addListItem(pokemon));
});
