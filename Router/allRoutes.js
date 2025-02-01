import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/players", "Players", "Pages/players.html"),
    new Route("/signin", "Connexion", "Pages/auth/signin.html"),
    new Route("/signup", "Inscription", "Pages/auth/signup.html"),
    new Route("/account", "Mon compte", "Pages/auth/account.html"),
    new Route("/editpassword", "Changement de mot de passe", "Pages/auth/editpassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "DEAL M POKER Web 3";