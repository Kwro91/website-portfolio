import {Navbar} from '../../components';
import {BottomBar} from '../../components';

export default function Cub3d() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold mb-8">Cub3D</h1>
                <p>Cub3D est le premier projet visuel de groupe du cursus 42.</p>
                <p>Ce projet consistait en la reproduction en C de l'environnement 3D du jeu Wolfenstein3D en utilisant uniquement du C et la librairie graphique Minilibx.</p>
                <p>Il fallait tout d'abord comprendre le concept de <a href="https://lodev.org/cgtutor/raycasting.html">Raycasting</a>.</p>
                <p>Chaque mur possede une texture selon l'orientation dans lequel vous le regardez (NORTH, SOUTH, EAST, WEST) et les sols et plafonds sont des valeurs RGB. Le tout rentre dans un fichier texte auquel on choisira l'extension .cub.</p>
                <img src="/images/cub3d/Game1.png" alt="Game Picture" />
                <p>Ensuite il a fallut ajouter des controles utilisateurs afin de se deplacer dans l'environnement.</p>
                <img src="/images/cub3d/Game2.png" alt="Game Picture" />
                <p>Voici a quoi ressemble un fichier de map valide :</p>
                <img src="/images/cub3d/Map.png" alt="Game Picture" />
                <p>Une fois que tout fonctionnait, il manquait un algorithme de verification des maps. Il fallait que la map soit entouree de murs et qu'elle possede un endroit ou le joueur devrait apparaitre. De plus, il fallait egalement qu'elle possede la liste des textures ainsi que les codes RGB du sol et du plafond.</p>
                <p>Ce qu'il se passe en cas de refus des maps de l'algorithme:</p>
                <img src="/images/cub3d/WrongMap.png" alt="Game Picture" />
                <p>Evidemment, ce projet a ete realise en respectant les normes de codage de l'ecole 42 et ne presente aucun leak de donnees.</p>
            </main>
        </div>
    );
}
