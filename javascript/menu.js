function accion(){
  console.log('button funciona')
  var ancla =document.getElementsByClassName('nav-header');
  for(var i=0; i < ancla.length; i++){
    ancla[i].classlist.toggle('desaparece');
  }
  
}