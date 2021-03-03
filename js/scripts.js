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
for (var i = 0 ; i < pokemonList.length ; i++){
  if (pokemonList[i].height > 1){
    document.write (pokemonList[i].name + "  (Height: " + pokemonList[i].height + ") - Wow! That's tall! " + "<br> <br>");
  }else{
    document.write (pokemonList[i].name + "  (Height: " + pokemonList[i].height + ") <br> <br>");
  }
}
