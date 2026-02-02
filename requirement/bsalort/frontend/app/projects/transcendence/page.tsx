import { SlideIn } from "../../components";

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
                        <p className="projetPresentationP">Transcendence est un projet de creation d'un jeu multijoueur en temps reel inspiré du célèbre jeu Pong.</p>
                        <p className="projetPresentationP">Il est aussi le plus gros projet de groupe du tronc commun ainsi que le premier projet web de l'ecole.</p>
                        <img className="projetPresentationImg" src="/images/transcendence/Accueil/accueil.png" alt="accueil du site" />
                    </div>
                    <hr className="projetPresentationHr"/>
                    <div className="basicCenter flex-col">
                        <h3 className="projetPresentationH3">Ce qui nous etait impose :</h3>
                        <ul className="list-disc">
                            <li className="projetPresentationP">Faire un site web disponible en HTTPS.</li>
                            <li className="projetPresentationP">Le site doit etre une Single Page Application. (SPA)</li>
                            <li className="projetPresentationP">Utilisation du protocole d'API REST.</li>
                            <li className="projetPresentationP">Reproduire un jeu PONG jouable.</li>
                            <li className="projetPresentationP">Pouvoir jouer en local a Pong et implementer un systeme de tournoi avec des alias.</li>
                        </ul>        
                    </div>
                    <hr className="projetPresentationHr"/>
                    <div> 
                        <div className="basicCenter">
                            <h3 className="projetPresentationH3">Nos choix de technologies :</h3>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col md:justify-between max-md:space-y-10 md:space-x-10 md:px-20">
                        <div className="projetPresentationDivTech">
                            <h3 className="projetPresentationH3">Frontend</h3>
                            <p>Langage : Typescript, HTML, CSS</p>
                            <p>Framework : TailwindCSS</p>
                            <h4 className="projetPresentationH4">Bibliotheque</h4>
                            <div>
                                <ul className="projetPresentationUlTech">
                                    <li>Requetes API</li>
                                    <li>Axios</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Socket</li>
                                    <li>ws</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Dessin dynamique (jeu)</li>
                                    <li>P5.js</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Compatibilite navigateur</li>
                                    <li> autoprefixer</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Connexion securisee</li>
                                    <li>HTTPS</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Lecture fichiers (certificats)</li>
                                    <li>fs</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Gestion des dates</li>
                                    <li>date-fns</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Visualisation de donnees</li>
                                    <li>Chart.js</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Themes et composants</li>
                                    <li>DaisyUI</li>
                                </ul>
                            </div>
                        </div>
                        <div className="projetPresentationDivTech">
                            <h3 className="projetPresentationH3">Backend</h3>
                            <p>Langage : NodeJS</p>
                            <p>Framework : Fastify</p>
                            <p>Serveur : Nginx</p>
                            <h4 className="projetPresentationH4">Bibliotheque</h4>
                            <div>
                                <ul className="projetPresentationUlTech">
                                    <li>Base de donnee</li>
                                    <li>sqlite3</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Requetes CORS</li>
                                    <li>cors</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Lecture de fichier</li>
                                    <li>fs</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Gestion des chemins</li>
                                    <li>path</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Upload fichiers</li>
                                    <li>multipart</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Generation MDP aleatoire</li>
                                    <li> crypto</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Hashage MDP</li>
                                    <li>bcrypt</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Flux de donnees</li>
                                    <li>stream/promises</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Requetes JSON</li>
                                    <li>axios</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Sockets</li>
                                    <li>ws</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Generation QR code</li>
                                    <li>qrcode</li>
                                </ul>
                                <hr />
                                <ul className="projetPresentationUlTech">
                                    <li>Codes 2FA</li>
                                    <li>speakeasy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="basicCenter py-15 underline">
                        <p className="italic">Ce site n'est pas disponible en ligne. Il s'agissait uniquement d'un projet d'ecole en local.</p>
                    </div>
                </div>

{/* Gestion Utilisateur */}
                <SlideIn>
                    <div className="projetPresentationDiv1">
                        <p>-Gestion utilisateur comprenant une authentification securisee avec cryptages des donnees sensibles, 2FA, OAuth (connexion google)</p>
                        <p>-Personnalisation du profil avec photo de profil changeable et possibilite d'upload la sienne, choix du theme et de la langue :</p>
                        <div>
                            <img src="/images/transcendence/Accueil/l_en.png" alt="" />
                            <img src="/images/transcendence/Accueil/l_fr.png" alt="" />
                            <img src="/images/transcendence/Accueil/l_es.png" alt="" />
                        </div>
                    </div>
                </SlideIn>

{/* Statistiques et ami */}

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

{/* JOUABILITE */}

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

            </main>
        </div>
    );
}