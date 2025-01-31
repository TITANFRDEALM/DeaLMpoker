import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/players", "Players", "Pages/players.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "DEAL M POKER Web 3";