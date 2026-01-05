import { Navbar } from "../../components";
import { BottomBar } from "../../components";

export default function Transcendence() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold mb-8">Transcendence</h1>
                <p>Transcendence est un projet de creation d'un jeu multijoueur en temps reel inspiré du célèbre jeu Pong.</p>
                <p>Il est aussi le plus gros projet de groupe du tronc commun.</p>
                <img src="/images/transcendence/Accueil/accueil.png" alt="accueil du site" />
                <p>Ce projet est tres libre mais impose certaines bases dont les principales sont :</p>
                <p>-Faire un site web disponible en HTTPS.</p>
                <p>-Le site doit etre une Single Page Application. (SPA)</p>
                <p>-Utilisation du protocole d'API REST</p>
                <p>-Reproduire un jeu PONG jouable.</p>
                <p>-Pouvoir jouer en local a Pong et implementer un systeme de tournoi avec des alias inserables.</p>
                <p>Une fois cette base apportee, nous avons le droit a une grande liberte. Dans notre projet, nous avons choisi :</p>
                <p>-Framework front : TailwindCSS</p>
                <p>-Framework back : Fastify</p>
                <p>Retrouvez ici la liste des frameworks et outils utilises :</p>
                <img src="/images/transcendence/Accueil/outils.png" alt="liste des outils utilise dans le projet" />
                <p>-Gestion utilisateur comprenant une authentification securisee avec cryptages des donnees sensibles, 2FA, OAuth (connexion google)</p>
                <p>-Personnalisation du profil avec photo de profil changeable et possibilite d'upload la sienne, choix du theme et de la langue :</p>
                <div>
                    <img src="/images/transcendence/Accueil/l_en.png" alt="" />
                    <img src="/images/transcendence/Accueil/l_fr.png" alt="" />
                    <img src="/images/transcendence/Accueil/l_es.png" alt="" />
                </div>
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
            <BottomBar />
        </div>
    );
}