import { SlideIn } from "../../components";
import {ScrollDown} from '../../components';
import {Carousel} from '../../components';

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
                    <div className="flex flex-col space-y-3 bg-sky-600 px-3 py-2 rounded text-center">
                        <p className="projetPresentationP">Transcendence est un projet web FullStack developpe dans le cadre du cursus 42.</p>
                        <p className="projetPresentationP">Creer un jeu multijoueur en temps reel inspiré du célèbre jeu Pong en est l'objectif principal.</p>                        <img className="projetPresentationImg" src="/images/transcendence/Accueil/accueil.png" alt="accueil du site" />
                    </div>
                    <hr className="projetPresentationHr"/>
                    <div className="basicCenter flex-col">
                        <h3 className="projetPresentationH3">Ce qui nous etait impose :</h3>
                        <ul className="list-disc">
                            <li className="projetPresentationP">Faire un site web disponible en <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">HTTPS</span>.</li>
                            <li className="projetPresentationP">Le site doit etre une <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">SPA</span> (Single Page Application).</li>
                            <li className="projetPresentationP">Utilisation du protocole d'API <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">REST</span>.</li>
                            <li className="projetPresentationP">Reproduire un jeu PONG jouable.</li>
                            <li className="projetPresentationP">Pouvoir jouer en <span className="underline">local</span> et implementer un systeme de tournoi avec des <span className="underline">alias</span>.</li>
                        </ul>        
                    </div>
                    <hr className="projetPresentationHr"/>
                    <div className="basicCenter">
                        <h3 className="projetPresentationH3">Nos choix de technologies :</h3>
                    </div>
                    <div className="basicCenter">
                        <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">Docker</span> permet la conteneurisation, rendant le projet plus robuste et performant.</p>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between max-md:space-y-10 md:space-x-10 md:px-20">
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
                    <div className="basicCenter py-15 underline">
                        <p className="italic">Ce site n'est pas disponible en ligne. Il s'agissait uniquement d'un projet d'ecole en local.</p>
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
                                ]} className="max-w-4xl mx-auto"/>
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
                            <p className="projetPresentationP">Un systeme de statistiques est disponible pour suivre l'evolution de son niveau de jeu. Il y a des statistiques globales (pourcentage de parties gagnees, score moyen etc) mais aussi des statistiques plus detaillees (dans une partie : nombre de points marques, nombre de points encaisses, etc).</p>
                            <p className="projetPresentationP">Cela permet un suivi des statistiques sur une longue duree pour voir la possible evolution des performances.</p>
                            <p className="projetPresentationP">Toutes ces statistiques sont appuyees par des graphiques qui simplifient la lecture de l'utilisateur.</p>
                            <p className="projetPresentationP">En fonction de ses statistiques le joueur recoit des trophes qui sont succeptible de changer. Exemple : Dominateur si vous avez +80% de parties gagnees.</p>
                        </div>
                        <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Profil/stats0.png",
                                    "/images/transcendence/Profil/stats1.png",
                                    "/images/transcendence/Profil/stats2.png",
                                ]} className="max-w-4xl mx-auto"/>
                        </div>
                        <div className="py-10">   
                            <hr className="projetPresentationHr"/>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Ami .e .s</h3>
                            </div>
                            <div className="basicCenter flex-col space-y-5 text-center px-5">
                                <p className="projetPresentationP">Un systeme d'ami.e.s est aussi disponible. Il permet d'ajouter des joueurs, de voir les demandes en attente, de voir la liste de ses ami.e.s et aussi de les supprimer.</p>
                                <p className="projetPresentationP">Il y a aussi un systeme de recherche pour trouver facilement un utilisateur.</p>
                                <p className="projetPresentationP">On peux aussi suivre plus facilement les parties jouees avec les ami.e.s en regardant les differents profils.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                    <Carousel images={[
                                        "/images/transcendence/Friends/empty.png",
                                        "/images/transcendence/Friends/pending.png",
                                        "/images/transcendence/Friends/friendsList.png",
                                        "/images/transcendence/Friends/checkFriends.png",
                                    ]} className="max-w-4xl mx-auto"/>
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
                            <p className="projetPresentationP">Pong est un jeu multijoueur qui se joue en 1 contre 1. <br /> Il consiste a envoyer (grace a son paddle) la balle toucher le mur derriere son adversaire. <br /> Le premier joueur a 5 points gagne la partie.</p>
                        </div>
                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Local</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Les joueurs peuvent jouer a deux sur un ordinateur en local. Une personne joue avec W / S et l'autre avec O / L.</p>
                                <p className="projetPresentationP">Il n'est pas necessaire d'etre inscrit pour jouer en local.</p>
                                <p className="projetPresentationP">Apres une partie jouee localement, les statistiques ne sont pas prises en compte mais la partie apparait quand meme dans l'historique (Pour empecher de fausser ses statistiques en jouant contre sois-meme.)</p>
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
                                <p className="projetPresentationP">Un systeme de room est present en BACK permettant a de multiple joueurs de s'affronter simultanement et a d'autre joueurs de rechercher des parties en meme temps.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Online/0-0.png",
                                    "/images/transcendence/Online/3-2.png",
                                    "/images/transcendence/Online/gameOver.png",
                                ]} className="max-w-4xl mx-auto"/>
                            </div>
                        </div>

                        <hr className="projetPresentationHr"/>

                        <div>
                            <div className="basicCenter">
                                <h3 className="projetPresentationH3">Le tournoi</h3>
                            </div>
                            <div className="basicCenter flex-col text-center">
                                <p className="projetPresentationP">Un systeme de tournoi est mis en place, il permet de jouer contre d'autre joueurs. Chaque match est joue les uns apres les autres et le score se calcule avec la difference de points. <br /> Exemple : Si avec J1 vs J2 il y a 5 - 2 alors J1 obtiens (5 - 2 =3)points.</p>
                                <p className="projetPresentationP">Nous avons choisis d'utiliser la methode round-robin qui consiste a faire jouer chaque participant une fois contre chacun des autres. <br /> Exemple : si j'ai 3 joueurs alors les matchs seront J1 vs J2 ; J1 vs J3 ; J2 vs J3. <br /> Cette methodologie permet d'avoir de bonnes analyses mais pose un soucis : <br /> Plus il y a de joueurs, plus il faut jouer de match : <span className="inline-flex flex-col items-center text-lg font-mono leading-none"><span>n(n − 1)</span><span className="w-full border-t border-zinc-400 my-0.5"></span><span>2</span></span>. <br />Pour un total de 10 joueurs il faudrait jouer 45 matchs. <br />Nous avons donc choisis de limiter a 8 joueurs nos tournois pour eviter l'attente des matchs.</p>
                                <p className="projetPresentationP">Les participants d'un tournoi doivent etre des  utilisateurs inscrits afin de compter leurs statistiques dans nos analyses.</p>
                            </div>
                            <div className="flex space-x-5 width-full">
                                <Carousel images={[
                                    "/images/transcendence/Tournoi/empty.png",
                                    "/images/transcendence/Tournoi/filled.png",
                                ]} className="max-w-4xl mx-auto"/>
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
                                ]} className="max-w-4xl mx-auto"/>
                            </div>
                        </div>
                    </div>
                </SlideIn>
            </main>
        </div>
    );
}