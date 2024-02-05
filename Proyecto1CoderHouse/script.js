alert("Bienvenido al cachipun, empecemos a jugar !!");


  let usuarioA = prompt("Ingresa tu nombre");
  let usuarioPC = parseInt(Math.random() * 3) + 1;

  alert("Bienvenido " + usuarioA + ", jugaremos contra la computadora. Puedes elegir:\n1 para piedra\n2 para papel\n3 para tijera");

  for (let juego = 0; juego < 3; juego++) {
  let seleccionUsuario = parseInt(prompt("Elige una opción:\n1 para piedra\n2 para papel\n3 para tijera"));

  const piedra = 1;
  const papel = 2;
  const tijera = 3;
  
  switch (seleccionUsuario) {
    case piedra:
      if (usuarioPC === papel) {
        alert("El PC eligio papel: Perdiste");
      } else if (usuarioPC === tijera) {
        alert("El PC eligio tjera: Ganaste");
      } else if (usuarioPC === piedra) {
        alert("El PC eligio piedra: Empate");
      } else {
      }
    break;
    case papel:
        if (usuarioPC === papel) {
          alert("El PC eligio papel: Empate");
        } else if (usuarioPC === tijera) {
          alert("El PC eligio tjera: Perdiste");
        } else if (usuarioPC === piedra) {
          alert("El PC eligio piedra: Ganaste");
        } else {
        }
    break;
    case tijera:
       if (usuarioPC === papel) {
          alert("El PC eligio papel: Ganaste");
        } else if (usuarioPC === tijera) {
          alert("El PC eligio tijera: Empate");
        } else if (usuarioPC === piedra) {
          alert("El PC eligio piedra: Perdiste");
        } else {
        }
    break;
    default:
      alert("Selección no válida");
    break;
  }
}
