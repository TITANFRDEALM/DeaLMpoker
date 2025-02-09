import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/players", "Players", "Pages/players.html", []),
    new Route("/signin", "Connexion", "Pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "Pages/auth/signup.html", ["disconnected"], "js/auth/signup.js"),
    new Route("/account", "Mon compte", "Pages/auth/account.html", ["client", "admin"]),
    new Route("/editpassword", "Changement de mot de passe", "Pages/auth/editpassword.html", ["client"]),
    new Route("/profile", "Compte Personnel", "Pages/profile.html", ["client", "admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "DEAL M POKER Web 3";