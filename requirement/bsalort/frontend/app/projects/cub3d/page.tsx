"use client";

import { useEffect, useRef, useState } from "react";

export function SlideIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-900 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"}`}>
      {children}
    </div>
  );
}

export default function Cub3d() {
    return (
            <main className="projetPresentationMain">
              <div className="basicCenter">
                <h1 className="projetPresentationH1"><a className="hover:text-zinc-200 hover:italic" href="https://github.com/AurelienFontaine/Cub3d">Cub3d</a></h1>
              </div>
              {/* PRESENTATION */}
              <SlideIn>
              <div className="projetPresentationMainDiv fade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Presentation</h2>
                </div>
                <p className="projetPresentationP">Cub3D est le premier projet visuel de groupe du cursus 42.</p>
                <p className="projetPresentationP">Ce projet consistait en la reproduction en C de l'environnement 3D du jeu Wolfenstein3D.</p>
                <p className="projetPresentationP">Les objectifs pedagogiques etaient :</p>
                <p className="basicP">- Approfondir la programmation en C et la gestion fine de la memoire.</p>
                <p className="basicP">- Decouvrir les bases du rendu 3D et du raycasting.</p>
                <p className="basicP">- Structurer un projet complexe et modulaire.</p>
                <p className="basicP">- Manipuler une bibliotheque graphique bas-niveau.</p>
                <p className="basicP">Langage : C</p>
                <p className="basicP">Librairie : MinilibX</p>
              </div>
              </SlideIn>
              {/* VISUEL */}
              <SlideIn>
              <div className="projetPresentationDiv1 fade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Le visuel</h2>
                </div>
                <p className="projetPresentationP">Il fallait tout d'abord comprendre le concept de <a className="basicLink" href="https://lodev.org/cgtutor/raycasting.html">Raycasting</a>.</p>
                <p className="projetPresentationP">Chaque mur possede une texture selon l'orientation dans lequel vous le regardez (NORTH, SOUTH, EAST, WEST) et les sols et plafonds sont des valeurs RGB. Le tout rentre dans un fichier texte auquel on choisira l'extension .cub.</p>
                <div className="projetPresentationDivImg">
                  <img className="projetPresentationImg" src="/images/cub3d/Game1.png" alt="Game Picture" />
                </div>
              </div>
              </SlideIn>
              {/* CONTROLES */}
              <SlideIn>
              <div className="projetPresentationDiv2 fade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">Les controles</h2>
                </div>
                <p className="projetPresentationP">Les controles sont simples : WASD pour se deplacer et les fleches gauche/droite pour tourner la vue.</p>
                <p className="projetPresentationP">Il est egalement possible de fermer la fenetre en cliquant sur la croix ou en appuyant sur echap.</p>
                <div className="projetPresentationDivImg">
                    <img className="projetPresentationImg" src="/images/cub3d/Game2.png" alt="Game Picture" />
                </div>
              </div>
              </SlideIn>
              {/* MAP */}
              <SlideIn>
              <div className="projetPresentationDiv3 fade-edges">
                <div className="basicCenter">
                  <h2 className="projetPresentationH2">La map</h2>
                </div>
                <p className="projetPresentationP">Voici a quoi ressemble un fichier de map valide :</p>
                <div className="projetPresentationDivImg">
                  <img className="projetPresentationImg" src="/images/cub3d/Map.png" alt="Game Picture" />
                </div>
                <p className="projetPresentationP">Une fois que tout fonctionnait, il manquait un algorithme de verification des maps. Il fallait que la map soit entouree de murs et qu'elle possede un endroit ou le joueur devrait apparaitre. De plus, il fallait egalement qu'elle possede la liste des textures ainsi que les codes RGB du sol et du plafond.</p>
                <p className="projetPresentationP">Ce qu'il se passe en cas de refus des maps de l'algorithme:</p>
                <div className="projetPresentationDivImg">
                    <img className="projetPresentationImg" src="/images/cub3d/WrongMap.png" alt="Game Picture" />
                </div>
              </div>
              </SlideIn>
              <div className="basicCenter">
                <p className="projetPresentationP italic">Ce projet a ete realise en respectant les normes de codage de l'ecole 42 et ne presente aucun leak de donnees.</p>
              </div>
            </main>
    );
}
