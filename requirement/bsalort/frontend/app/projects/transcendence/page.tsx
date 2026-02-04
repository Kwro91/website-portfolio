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
                        <div className="basicCenter flex-col space-y-3">
                            <p className="projetPresentationP">Les informations utilisateurs sont stockees dans une BDD. Cette derniere contient :</p>
                            <p className="projetPresentationP"><span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">id</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">username</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">alias</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">password</span>, <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">email</span> comme principaux attributs.</p>
                            <p className="projetPresentationP">Lors de l'inscription, le mot de passe est <span className="font-bold drop-shadow-lg bg-sky-700 rounded px-1">hash</span> (bcrypt). L'application est aussi protege des injections SQL.</p>
                        </div>
                        <h4 className="projetPresentationH4">Connexion</h4>
                        <div>
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
                        <div className="basicCenter flex-col text-justify space-y-3">
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
                            {/* <img src="/images/transcendence/Accueil/l_en.png" alt="" /> */}
                            {/* <img src="/images/transcendence/Accueil/l_fr.png" alt="" /> */}
                            {/* <img src="/images/transcendence/Accueil/l_es.png" alt="" /> */}
                        </div>
                    </div>
                </div>
                </SlideIn>
{/* Statistiques et ami */}
                <SlideIn>
                    <div className="projetPresentationDiv2 effectFade-edges">
                        <p>Suivi des statistiques des games contre les autre joueurs :</p>
                        <div>
                            <img src="/images/transcendence/Profil/stats0.png" alt="" />
                            <img src="/images/transcendence/Profil/stats1.png" alt="" />
                            <img src="/images/transcendence/Profil/stats2.png" alt="" />
                        </div>
                        <p>-Possibilite d'ajout d'ami et ainsi de suivre les parties faites avec la personne :</p>
                        <div>
                            <img src="/images/transcendence/Friends/empty.png" alt="" />
                            <img src="/images/transcendence/Friends/pending.png" alt="" />
                            <img src="/images/transcendence/Friends/friendsList.png" alt="" />
                            <img src="/images/transcendence/Friends/checkFriends.png" alt="" />
                        </div>
                    </div>
                </SlideIn>
{/* Jouabilite */}
                <SlideIn>
                    <div className="projetPresentationDiv3">
                        <p>Jouabilite locale ou online (ROOM 1vs1) comprenant un systeme de tournoi lie au compte facilitant le suivi des statistiques :</p>
                        <p>-Local :</p>
                        <div>
                            <img src="/images/transcendence/Local/local.png" alt="local" />
                        </div>
                        <p>-Online :</p>
                        <div>
                            <img src="/images/transcendence/Online/0-0.png" alt="online" />
                            <img src="/images/transcendence/Online/3-2.png" alt="online" />
                            <img src="/images/transcendence/Online/gameOver.png" alt="online" />
                        </div>
                        <p>-Le systeme de tournoi :</p>
                        <div>
                            <img src="/images/transcendence/Tournoi/empty.png" alt="" />
                            <img src="/images/transcendence/Tournoi/filled.png" alt="" />
                        </div>
                        <p>-Ajout de personnalisation du jeu (settings + mode pause) :</p>
                        <div>
                            <img src="/images/transcendence/Online/pause.png" alt="online" />
                            <img src="/images/transcendence/Online/settings.png" alt="online" />
                            <img src="/images/transcendence/Online/settings-0-0.png" alt="online" />
                        </div>
                    </div>
                </SlideIn>
            </main>
        </div>
    );
}