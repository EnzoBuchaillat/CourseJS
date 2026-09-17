const boutonPierre = document.getElementById("pierre");
const boutonFeuille = document.getElementById("feuille");
const boutonCiseaux = document.getElementById("ciseaux");
const boutonReinitialise = document.getElementById("reinitialiser");

let nbVictoire = 0;
let nbEgalite = 0;
let nbDefaite = 0;

document.getElementById("nbVictoire").textContent = nbVictoire;
document.getElementById("nbEgalite").textContent = nbEgalite;
document.getElementById("nbDefaites").textContent = nbDefaite;

boutonPierre.addEventListener("click", function () {
  const choixRobotNombre = Math.floor(Math.random() * 3);
  document.getElementById("coupJouee").textContent = "Pierre";

  switch (choixRobotNombre) {
    case 0:
      nbEgalite++;
      document.getElementById("nbEgalite").textContent = nbEgalite;
      document.getElementById("coupRobot").textContent = "Pierre";
      document.getElementById("resultat").textContent = "égalité";
      break;
    case 1:
      nbDefaite++;
      document.getElementById("nbDefaites").textContent = nbDefaite;
      document.getElementById("coupRobot").textContent = "Feuille";
      document.getElementById("resultat").textContent = "défaite";
      break;
    case 2:
      nbVictoire++;
      document.getElementById("nbVictoire").textContent = nbVictoire;
      document.getElementById("coupRobot").textContent = "Ciseaux";
      document.getElementById("resultat").textContent = "victoire";
      break;
  }
});

boutonFeuille.addEventListener("click", function () {
  const choixRobotNombre = Math.floor(Math.random() * 3);
  document.getElementById("coupJouee").textContent = "Feuille";

  switch (choixRobotNombre) {
    case 0:
      nbVictoire++;
      document.getElementById("nbVictoire").textContent = nbVictoire;
      document.getElementById("coupRobot").textContent = "Pierre";
      document.getElementById("resultat").textContent = "victoire";
      break;
    case 1:
      nbEgalite++;
      document.getElementById("nbEgalite").textContent = nbEgalite;
      document.getElementById("coupRobot").textContent = "Feuille";
      document.getElementById("resultat").textContent = "égalité";
      break;
    case 2:
      nbDefaite++;
      document.getElementById("nbDefaites").textContent = nbDefaite;
      document.getElementById("coupRobot").textContent = "Ciseaux";
      document.getElementById("resultat").textContent = "défaite";
  }
});

boutonCiseaux.addEventListener("click", function () {
  const choixRobotNombre = Math.floor(Math.random() * 3);
  document.getElementById("coupJouee").textContent = "Ciseaux";

  switch (choixRobotNombre) {
    case 0:
      nbDefaite++;
      document.getElementById("nbDefaites").textContent = nbDefaite;
      document.getElementById("coupRobot").textContent = "Pierre";
      document.getElementById("resultat").textContent = "défaite";
      break;
    case 1:
      nbVictoire++;
      document.getElementById("nbVictoire").textContent = nbVictoire;
      document.getElementById("coupRobot").textContent = "Feuille";
      document.getElementById("resultat").textContent = "victoire";
      break;
    case 2:
      nbEgalite++;
      document.getElementById("nbEgalite").textContent = nbEgalite;
      document.getElementById("coupRobot").textContent = "Ciseaux";
      document.getElementById("resultat").textContent = "égalité";
  }
});

boutonReinitialise.addEventListener("click", function () {
  nbVictoire = 0;
  nbEgalite = 0;
  nbDefaite = 0;
  document.getElementById("nbDefaites").textContent = 0;
  document.getElementById("nbVictoire").textContent = 0;
  document.getElementById("nbEgalite").textContent = 0;
  document.getElementById("coupRobot").textContent = "";
  document.getElementById("resultat").textContent = "";
  document.getElementById("coupJouee").textContent = "";
});
