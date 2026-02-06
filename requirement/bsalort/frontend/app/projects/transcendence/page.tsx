import { SlideIn } from "../../components";
import {ScrollDown} from '../../components';
import {Carousel} from '../../components';
import Link from "next/link";

export default function Transcendence() {
    return (
        <div>
            <main className="projetPresentationMain">
                <div className="basicCenter my-5">
                    <h1 className="projetPresentationH1">Transcendence</h1>
                </div>
{/* PRESENTATION */}
                <div className="projetPresentationMainDiv effectFade-edges space-y-10">
                    <div className="basicCenter">
                        <h2 className="projetPresentationH2">Présentation</h2>
                    </div>
                    <div className="basicCenter">
                        <div className="bg-sky-600 px-3 py-2 rounded-2xl">
                            <p className="projetPresentationP text-center"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">Transcendence</span> est un projet web FullStack developpe dans le cadre du cursus 42. <br />Creer un jeu multijoueur en temps reel inspiré du célèbre jeu Pong en est l'objectif principal.</p>
                        </div>
                    </div>
                    <img className="projetPresentationImg max-w-300 mx-auto" src="/images/transcendence/Accueil/accueil.png" alt="accueil du site" />
                    <hr className="projetPresentationHr"/>
                    <div className="basicCenter flex-col">
                        <h3 className="projetPresentationH3">Ce qui nous etait impose :</h3>
                        <ul className="list-disc">
                            <li className="projetPresentationP">Faire un site web disponible en <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">HTTPS</span>.</li>
                            <li className="projetPresentationP">Le site doit etre une <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">SPA</span> (Single Page Application).</li>
                            <li className="projetPresentationP">Utilisation du protocole d'API <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">REST</span>.</li>
                            <li className="projetPresentationP">Reproduire un jeu PONG jouable.</li>
                            <li className="projetPresentationP">Pouvoir jouer en <span className="underline font-bold">local</span> et implementer un systeme de tournoi avec des <span className="underline font-bold0">alias</span>.</li>
                        </ul>        
                    </div>
                    <hr className="projetPresentationHr"/>
                    <div className="basicCenter">
                        <h3 className="projetPresentationH3">Nos choix de technologies :</h3>
                    </div>
                    <div className="basicCenter">
                        <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">Docker</span> permet la conteneurisation, rendant le projet plus robuste et performant.</p>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between max-md:space-y-10 md:space-x-20 lg:px-80">
                        <div className="projetPresentationDivTech">
                            <h3 className="projetPresentationH3">Frontend</h3>
                            <p className="projetPresentationP">Langage : Typescript, HTML, CSS</p>
                            <p className="projetPresentationP">Framework : TailwindCSS</p>
                            <h4 className="projetPresentationH4">Bibliotheque</h4>
                            <div>
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Requetes API</li>
                                    <li className="projetPresentationP">Axios</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Socket</li>
                                    <li className="projetPresentationP">ws</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Dessin dynamique (jeu)</li>
                                    <li className="projetPresentationP">P5.js</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Compatibilite navigateur</li>
                                    <li className="projetPresentationP"> autoprefixer</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Connexion securisee</li>
                                    <li className="projetPresentationP">HTTPS</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Lecture fichiers (certificats)</li>
                                    <li className="projetPresentationP">fs</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Gestion des dates</li>
                                    <li className="projetPresentationP">date-fns</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Visualisation de donnees</li>
                                    <li className="projetPresentationP">Chart.js</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Themes et composants</li>
                                    <li className="projetPresentationP">DaisyUI</li>
                                </ul>
                            </div>
                        </div>
                        <div className="projetPresentationDivTech">
                            <h3 className="projetPresentationH3">Backend</h3>
                            <p className="projetPresentationP">Langage : NodeJS</p>
                            <p className="projetPresentationP">Framework : Fastify</p>
                            <p className="projetPresentationP">Serveur : Nginx</p>
                            <h4 className="projetPresentationH4">Bibliotheque</h4>
                            <div>
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Base de donnee</li>
                                    <li className="projetPresentationP">sqlite3</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Requetes CORS</li>
                                    <li className="projetPresentationP">cors</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Lecture de fichier</li>
                                    <li className="projetPresentationP">fs</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Gestion des chemins</li>
                                    <li className="projetPresentationP">path</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Upload fichiers</li>
                                    <li className="projetPresentationP">multipart</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Generation MDP aleatoire</li>
                                    <li className="projetPresentationP"> crypto</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Hashage MDP</li>
                                    <li className="projetPresentationP">bcrypt</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Flux de donnees</li>
                                    <li className="projetPresentationP">stream/promises</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Requetes JSON</li>
                                    <li className="projetPresentationP">axios</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Sockets</li>
                                    <li className="projetPresentationP">ws</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Generation QR code</li>
                                    <li className="projetPresentationP">qrcode</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li className="projetPresentationP">Codes 2FA</li>
                                    <li className="projetPresentationP">speakeasy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="basicCenter py-25 underline">
                        <p className="projetPresentationP italic text-center">Ce site n'est pas disponible en ligne. Il s'agissait uniquement d'un projet d'ecole en local.</p>
                    </div>
                </div>
                <div className="basicCenter">
                    <ScrollDown />
                </div>
{/* Gestion Utilisateur */}
                <SlideIn>
                    <div className="projetPresentationDiv1 effectFade-edges">
                        <div className="basicCenter">
                            <h2 className="projetPresentationH2">Gestion Utilisateur</h2>
                        </div>
                        <div className="basicCenter">
                            <h3 className="projetPresentationH3">Profil</h3>
                        </div>
                        <div className="basicCenter flex-col space-y-5 text-align px-5">
                            <h4 className="projetPresentationH4">Inscription</h4>
                            <div className="basicCenter flex-col space-y-3 text-center">
                                <p className="projetPresentationP">Les informations utilisateurs sont stockees dans une BDD. Cette derniere contient :</p>
                                <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">id</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">username</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">alias</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">password</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">email</span> comme principaux attributs.</p>
                                <p className="projetPresentationP">Lors de l'inscription, le mot de passe est <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">hash</span> (bcrypt). L'application est aussi protege des injections SQL.</p>
                            </div>
                            <h4 className="projetPresentationH4">Connexion</h4>
                            <div className="text-center">
                                <p className="projetPresentationP">Lors de la connexion, un <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">JWT</span> (Json Web Token) est cree. Il est ensuite stocke dans le cache du navigateur permettant une persistance de connexion.</p>
                                <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">2FA</span> : Une authentification a double facteur est disponible si l'utilisateur le veut. Il faut donc utiliser une application comme Google Authenticator et scanner le QR code.</p>
                                <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">OAuth</span> : Il est egalement possible de se connecter en quelque clics en utilisant son compte google.</p>
                            </div>
                        </div>
                        <hr className="projetPresentationHr"/>
                        <div className="basicCenter">
                            <h3 className="projetPresentationH3">Personnalisation</h3>
                        </div>
                        <div className="basicCenter flex-col space-y-5">
                            <div className="basicCenter flex-col text-center space-y-3">
                                <p className="projetPresentationP">Diverses choses sont personnalisable dans le profil une fois connecte :</p>
                                <p className="projetPresentationP">L'<span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">avatar</span>. Deux avatars par defaut sont disponible ainsi que l'upload d'une image.</p>
                                <p className="projetPresentationP">La <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">langue</span>. L'integralite du site est disponible en 3 langues : Anglais, Francais, Espagnol.</p>
                                <p className="projetPresentationP">Le <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">theme</span>. Il y a 3 theme de couleurs qui changent le visuel.</p>
                                <p className="projetPresentationP">Lorsqu'un utilisteur se connecte, ses preferences sont automatiquement chargees.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Accueil/l_en.png",
                                    "/images/transcendence/Accueil/l_fr.png",
                                    "/images/transcendence/Accueil/l_es.png",
                                ]} className="max-w-300 mx-auto"/>
                            </div>
                        </div>
                    </div>
                </SlideIn>
{/* Statistiques et ami */}
                <SlideIn>
                    <div className="projetPresentationDiv2 effectFade-edges">
                        <div className="basicCenter">
                            <h2 className="projetPresentationH2">Statistiques et ami.e.s</h2>
                        </div>
                        <div className="basicCenter">
                            <h3 className="projetPresentationH3">Stats</h3>
                        </div>
                        <div className="basicCenter flex-col space-y-5 text-center px-5">
                            <p className="projetPresentationP">Un systeme de statistiques est disponible pour suivre l'evolution de son niveau de jeu :</p>
                            <ul className="list-disc text-left">
                                <li className="projetPresentationP">Stats globales : (% de victoire ; score moyen...)</li>
                                <li className="projetPresentationP">Stats plus detaillees : (Nb de pts marques dans une partie precise ; % de victoire par jour...)</li>
                            </ul>
                            <p className="projetPresentationP">Tout cela permet un suivi des statistiques sur une longue duree pour voir la possible evolution de ses performances.</p>
                            <p className="projetPresentationP">Toutes ces statistiques sont appuyees par des <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">graphiques</span> qui simplifient la lecture de l'utilisateur.</p>
                            <p className="projetPresentationP">En fonction de ses statistiques le joueur recoit des <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">trophes</span> qui sont succeptible de changer. <br /> Exemple : <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">Dominateur</span> si vous avez +80% de parties gagnees.</p>
                        </div>
                        <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Profil/stats0.png",
                                    "/images/transcendence/Profil/graph.png",
                                    "/images/transcendence/Profil/stats2.png",
                                ]} className="max-w-300 mx-auto"/>
                        </div>
                        <div className="py-10">   
                            <hr className="projetPresentationHr"/>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Ami .e .s</h3>
                            </div>
                            <div className="basicCenter flex-col space-y-5 text-center px-5">
                                <p className="projetPresentationP">Un systeme d'ami.e.s est aussi disponible. Il permet d'<span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">ajouter</span> des joueurs, de voir les <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">demandes</span> en attente, de voir la liste de ses ami.e.s et aussi de les <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">supprimer</span>.</p>
                                <p className="projetPresentationP">Il y a aussi un systeme de <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">recherche</span> pour trouver facilement un utilisateur.</p>
                                <p className="projetPresentationP">On peux aussi suivre plus facilement les parties jouees avec les ami.e.s en regardant les differents profils.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                    <Carousel images={[
                                        "/images/transcendence/Friends/empty.png",
                                        "/images/transcendence/Friends/pending.png",
                                        "/images/transcendence/Friends/friendsList.png",
                                        "/images/transcendence/Friends/checkFriends.png",
                                    ]} className="max-w-300 mx-auto"/>
                            </div>
                        </div>
                    </div>
                </SlideIn>
{/* Jouabilite */}
                <SlideIn>
                    <div className="projetPresentationDiv3 space-y-10 effectFade-edges">
                        <div className="basicCenter">
                            <h2 className="projetPresentationH2">Pong</h2>
                        </div>
                        <div className="basicCenter flex-col text-center rounded-2xl bg-violet-950 px-1 py-1">
                            <p className="projetPresentationP">Ce jeu est base sur Pong original de 1972.</p>
                            <p className="projetPresentationP">Pong est un jeu multijoueur qui se joue en 1 contre 1. <br /> Il consiste a envoyer (grace a son <span className="font-bold">paddle</span>) la balle toucher le mur derriere son adversaire. <br /> Le premier joueur a 5 points gagne la partie.</p>
                        </div>
                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Local</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Les joueurs peuvent jouer a deux sur un ordinateur en local. Une personne joue avec <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">W</span> / <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">S</span> et l'autre avec <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">O</span> / <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">L</span>.</p>
                                <p className="projetPresentationP">Il n'est pas necessaire d'etre inscrit pour jouer en local.</p>
                                <p className="projetPresentationP">Apres une partie jouee localement, les statistiques ne sont pas prises en compte mais la partie apparait quand meme dans l'historique <br /> (Pour empecher de fausser ses statistiques en jouant contre sois-meme.)</p>
                            </div>
                            <div>
                                <img className="projetPresentationImg" src="/images/transcendence/Local/local.png" alt="local" />
                            </div>
                        </div>

                        <hr className="projetPresentationHr"/>

                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Jeu en ligne</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Si un joueur choisis de jouer en ligne, il doit attendre qu'une autre personne recherche une partie aussi. Lorsque deux joueurs cherchent une partie, ils se retrouvent en 1 contre 1. Dans ce cas de figure, les statistiques de la partie compteront et seront analysable dans le profil.</p>
                                <p className="projetPresentationP">Un systeme de <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">room</span> est present en BACK permettant a de multiple joueurs de s'affronter simultanement.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Online/0-0.png",
                                    "/images/transcendence/Online/3-2.png",
                                    "/images/transcendence/Online/gameOver.png",
                                ]} className="max-w-300 mx-auto"/>
                            </div>
                        </div>

                        <hr className="projetPresentationHr"/>

                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Le tournoi</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Un systeme de tournoi est mis en place, il permet de jouer contre d'autre joueurs. Chaque match sont joues les uns apres les autres. <br /> Le score se calcule avec la <span className="font-bold">difference</span> de points. <br /> Exemple : Si avec <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">J1 vs J2</span> il y a <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">5 - 2</span> alors J1 obtiens (5 - 2 = 3)points pour le vainqueur.</p>
                                <p className="projetPresentationP">Nous avons choisis d'utiliser la methode <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">round-robin</span> qui consiste a faire jouer chaque participant une fois contre chacun des autres. <br /> Exemple : si il y a 3 joueurs alors les matchs seront <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">J1 vs J2</span> ; <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">J1 vs J3</span> ; <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">J2 vs J3</span>. <br /> Cette methodologie permet d'avoir de bonnes analyses mais pose un soucis : <br /> Plus il y a de joueurs, plus il faut jouer de match : <span className="inline-flex flex-col items-center text-lg font-mono leading-none"><span>n(n − 1)</span><span className="w-full border-t border-zinc-400 my-0.5"></span><span>2</span></span>. <br />Pour un total de <span className="font-bold">10 joueurs</span> il faudrait jouer <span className="font-bold underline">45 matchs</span>. <br />Nous avons donc choisis de limiter a 8 joueurs nos tournois afin d'eviter l'attente entre les matchs.</p>
                                <p className="projetPresentationP">Les participants d'un tournoi <span className="underline font-bold">doivent</span> etre des  utilisateurs inscrits afin de compter leurs statistiques dans nos analyses.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Tournoi/empty.png",
                                    "/images/transcendence/Tournoi/filled.png",
                                ]} className="max-w-300 mx-auto"/>
                            </div>
                        </div>

                        <hr className="projetPresentationHr"/>

                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Personnalisation du jeu</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Nous avons ajoute quelques elements au jeu : </p>
                                <ul className="list-disc text-left">
                                    <li className="projetPresentationP">Compteur de depart des manches.</li>
                                    <li className="projetPresentationP">Mode pause.</li>
                                    <li className="projetPresentationP">Personnalisations des couleurs des balles et paddles.</li>
                                    <li className="projetPresentationP">Changer la vitesse de la balle, ajoutant de la difficulte.</li>
                                    <li className="projetPresentationP">Possibilite en local de changer la taille de la balle et des paddles.</li>
                                </ul>
                                <p className="projetPresentationP"></p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Online/pause.png",
                                    "/images/transcendence/Online/settings.png",
                                    "/images/transcendence/Online/settings-0-0.png",
                                ]} className="max-w-300 mx-auto"/>
                            </div>
                            <hr className="projetPresentationHr"/>
                            <div className="py-25">
                            </div>
                        </div>
                    </div>
                </SlideIn>
                <div className="w-full basicCenter flex-col space-y-5">
                    <h2 className="projetPresentationH2">Venez decouvrir mes autres projets:</h2>
                    <Link href="/projects">
                        <button className="basicCenter rounded-full px-2 py-2 bg-zinc-200 hover:bg-zinc-400">
                            <svg className="lg:w-20 lg:h-20 max-lg:w-5 max-lg:h-5 px-1 py-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.13984 4.72563C5.94742 4.3112 6.5 3.47013 6.5 2.5C6.5 1.11929 5.38071 0 4 0C2.61929 0 1.5 1.11929 1.5 2.5C1.5 3.52516 2.11705 4.4062 3 4.79198V11.208C2.11705 11.5938 1.5 12.4748 1.5 13.5C1.5 14.8807 2.61929 16 4 16C5.38071 16 6.5 14.8807 6.5 13.5C6.5 12.4748 5.88295 11.5938 5 11.208V7.41421L7.08579 9.5H9.70802C10.0938 10.383 10.9748 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.9748 6 10.0938 6.61705 9.70802 7.5H7.91421L5.13984 4.72563Z" fill="#000000"></path> </g></svg>
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}