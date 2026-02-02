import { SlideIn } from "../../components";

export default function Cub3d() {
    return (
            <main className="projetPresentationMain">
              <div className="basicCenter my-10">
                <h1 className="projetPresentationH1"><a className="hover:text-zinc-200 hover:italic" href="https://github.com/AurelienFontaine/Cub3d">Cub3d</a></h1>
                {/* <h1 className="underline text-5xl font-bold bg-gradient-to-r from-sky-300 to-indigo-600 bg-clip-text text-transparent">Cub3D</h1> */}
              </div>

              {/* PRESENTATION */}
              <SlideIn>
              <div className="projetPresentationMainDiv effectFade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Présentation</h2>
                </div>
                <div className="flex flex-col space-y-5">
                  <div>
                    <div className="flex flex-col items-center projetPresentationDivBox0">
                      <p className="projetPresentationP">Cub3D est le premier projet visuel de groupe du cursus 42.</p>
                      <p className="projetPresentationP">Ce projet consistait en la reproduction en C de l'environnement 3D du jeu Wolfenstein3D.</p>
                    </div>
                  </div>
                  <div className="flex max-xl:justify-between justify-center xl:space-x-32">
                    <div className="projetPresentationDivBox0">
                      <p className="projetPresentationP">Les objectifs pédagogiques étaient :</p>
                      <ul className="list-disc">
                        <li className="projetPresentationP">Approfondir la programmation en C et la gestion fine de la mémoire.</li>
                        <li className="projetPresentationP">Découvrir les bases du rendu 3D et du raycasting.</li>
                        <li className="projetPresentationP">Structurer un projet complèxe et modulaire.</li>
                        <li className="projetPresentationP">Manipuler une bibliothèque graphique bas-niveau.</li>
                      </ul>
                    </div>
                    <div className="projetPresentationDivBox0 flex flex-col items-center justify-center">
                      <p className="projetPresentationP underline">Langage:</p>
                      <span className="projetPresentationP border border-sky-400 px-2 rounded-full">C</span>
                      <p className="basicP underline">Librairie:</p>
                      <span className="bg-sky-900 px-2">
                        <a href="https://harm-smits.github.io/42docs/libs/minilibx"><p className="basicLink">MinilibX</p></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </SlideIn>
              {/* VISUEL */}
              <SlideIn>
              <div className="projetPresentationDiv1 effectFade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Le visuel</h2>
                </div>
                  <div className="flex flex-col items-center projetPresentationDivBox1 space-y-5">
                    <div className="basicCenter">
                      <h3 className="projetPresentationH3">La méthodologie</h3>
                    </div>

                    <div>
                      <p className="projetPresentationP">Il fallait tout d'abord comprendre le concept de <span className="bg-sky-900 px-1"><a className="basicLink" href="https://lodev.org/cgtutor/raycasting.html">Raycasting</a></span>.</p>
                      <p className="projetPresentationP">Le raycast sert à détecter les murs qui se trouvent en face du joueur afin de les afficher.</p>
                      <p className="projetPresentationP">Il consiste à scanner ce qu'il y a face du joueur en cherchant les murs de la map avec des points.</p>
                      <div className="basicCenter">
                        <img className="projetPresentationImg" src="/images/cub3d/raycastmiss2.gif" alt="raycast incomplet schema" />
                      </div>
                    </div>

                    <div>
                      <p className="projetPresentationP">Mais cette méthode est incomplète:</p>
                      <ul className="list-disc">
                        <li className="projetPresentationP">Elle consomme beaucoup trop de ressources car il faut vérifier une infinité de points.</li>
                        <li className="projetPresentationP">Il est possible de rater des murs si aucun point de vérification tombe dessus.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="projetPresentationP">En placant les murs de la map sur une grille afin de limiter leur positions, on peut ainsi limiter le nombre d'endroits à vérifier lors du scan :</p>
                      <div className="basicCenter">
                        <img className="projetPresentationImg" src="/images/cub3d/raycasthit.gif" alt="image schema raycast" />
                      </div>
                      <p className="projetPresentationP">Résultat: gain de ressources, aucun oubli de mur et une simplification du parsing.</p>

                    </div>
                  </div>

                    <div className="basicCenter">
                      <hr className="projetPresentationHr" />
                    </div>

                  <div className="flex flex-col items-center projetPresentationDivBox1 space-y-5">
                    <h3 className="projetPresentationH3">Les textures</h3>
                    <div className="py-5">
                      <p className="projetPresentationP">Chaque mur possède une texture selon l'orientation dans lequel vous le regardez (<span className="projetPresentationDivHighlight1">NORTH</span>, <span className="projetPresentationDivHighlight1">SOUTH</span>, <span className="projetPresentationDivHighlight1">EAST</span>, <span className="projetPresentationDivHighlight1">WEST</span>) et les sols et plafonds sont des valeurs RGB.</p>
                      <p className="projetPresentationP">Le tout rentre dans un fichier texte qui finit par l'extension <span className="projetPresentationDivHighlight1">.cub</span>.</p>
                    </div>
                    <p className="italic">Rendu visuel du jeu :</p>
                    <div className="projetPresentationDivImg">
                      <img className="projetPresentationImg max-md:w-[450px] lg:w-[700px] md:w-[500px]" src="/images/cub3d/Game1.png" alt="Game Picture" />
                    </div>
                  </div>
              </div>
              </SlideIn>
              {/* CONTROLES */}
              <SlideIn>
              <div className="projetPresentationDiv2 effectFade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Les contrôles</h2>
                </div>
                <div className="projetPresentationDivBox2">
                  <p className="projetPresentationP">Les contrôles sont simples : <span className="projetPresentationDivHighlight2">W</span>, <span className="projetPresentationDivHighlight2">A</span>, <span className="projetPresentationDivHighlight2">S</span>, <span className="projetPresentationDivHighlight2">D</span> pour se déplacer et les flèches <span className="projetPresentationDivHighlight2">GAUCHE</span>/<span className="projetPresentationDivHighlight2">DROITE</span> pour tourner la vue.</p>
                  <p className="projetPresentationP"><span className="projetPresentationDivHighlight2">ECHAP</span> permet de fermer la fenêtre. (On peux le faire en cliquant sur la croix également)</p>
                  <div className="projetPresentationDivImg">
                      <img className="projetPresentationImg max-md:w-[450px] lg:w-[700px] md:w-[500px]" src="/images/cub3d/Game2.png" alt="Game Picture" />
                  </div>
                  <div className="basicCenter">
                    <p>Screenshot du bout du couloir à droite</p>
                  </div>
                </div>
              </div>
              </SlideIn>
              {/* MAP */}
              <SlideIn>
              <div className="projetPresentationDiv3 effectFade-edges space-y-5">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">La map</h2>
                </div>
                <div className="projetPresentationDivBox3 space-y-5">
                  <div className="basicCenter">
                    <h3 className="projetPresentationH3">Fichier map</h3>
                  </div>
                  <div>
                    <p className="projetPresentationP">Voici à quoi ressemble un fichier de map valide :</p>
                    <div className="projetPresentationDivImg">
                      <img className="projetPresentationImg" src="/images/cub3d/Map.png" alt="Game Picture" />
                    </div>
                    <p className="projetPresentationP">Chaque mur est representé par un <span className="projetPresentationDivHighlight3">1</span> et le sol par un <span className="projetPresentationDivHighlight3">0</span>.</p>
                    <p className="projetPresentationP">La position de depart du joueur est notée par un <span className="projetPresentationDivHighlight3">N</span> qui correspond à son orientation de depart (North South East West) ce qui donne <span className="projetPresentationDivHighlight3">N</span>, <span className="projetPresentationDivHighlight3">S</span>, <span className="projetPresentationDivHighlight3">E</span>, <span className="projetPresentationDivHighlight3">W</span>.</p>
                    <p className="projetPresentationP">Les "murs" sont en fait des cubes, plus grand que le joueur. Ils ont donc quatre faces visible du point de vue du joueur. Leur texture est definie en haut du fichier.</p>
                    <p className="projetPresentationP">Les notations F 220,87,0 sont des notations RGB destinées à faire les couleurs du sol (Floor donc <span className="projetPresentationDivHighlight3">F</span>) et plafond (Ceiling donc <span className="projetPresentationDivHighlight3">C</span>).</p>
                  </div>
                </div>

                <div>
                  <hr className="projetPresentationHr" />
                </div>

                <div className="projetPresentationDivBox3 space-y-5">
                  <div className="basicCenter">
                    <h3 className="projetPresentationH3">Algorithme de vérification</h3>
                  </div>
                  <p className="projetPresentationP">Le programme est fait de maniere à accepter un fichier de map fourni par l'utilisateur (tant que cette dernière finis par l'extension <span className="projetPresentationDivHighlight3">.cub</span>).</p>
                  <p className="projetPresentationP">Il a donc fallut faire un algorithme de vérification des maps afin d'éviter de charger des maps qui poseraient problèmes.</p>
                  <p className="projetPresentationP">Il faut que la map soit totalement entourée de murs et qu'elle possède un endroit ou le joueur devrait apparaître.</p>
                  <p className="projetPresentationP">De plus, il faut également qu'elle possède la liste des textures ainsi que les codes RGB du sol et du plafond.</p>
                  <p className="projetPresentationP">Ce qu'il se passe en cas de refus des maps de l'algorithme:</p>
                  <div className="projetPresentationDivImg">
                      <img className="projetPresentationImg" src="/images/cub3d/WrongMap.png" alt="Game Picture" />
                  </div>
                </div>
              </div>
              </SlideIn>
              <div className="basicCenter">
                <div className="max-lg:flex max-lg:justify-center max-lg:w-[550px]">
                  <p className="projetPresentationP italic">Ce projet a été realisé en respectant les normes de codage de l'école 42 et ne présente aucun leak de données.</p>
                </div>
              </div>
            </main>
    );
}
