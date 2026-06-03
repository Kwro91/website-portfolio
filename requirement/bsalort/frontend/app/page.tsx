"use client"

import {ScrollDown} from './components'


export default function Home() {
  return (
    <main className="allpage">
      <header className="homeHeader">
        <div className="mx-auto items-center flex flex-col py-10 w-400 rounded-xl bg-gray-800 space-y-20">
          <div className="flex justify-center space-x-20">
              <div className="homeDiv">
                <h1 className="homeH1">Bonjour ! Moi c'est Benjamin</h1>
                <div className="flex flex-col py-5 text-left space-y-5">
                  <p className="homeP">Developpeur Junior, je concois des solutions robustes, efficaces et bien structurees.</p>
                  <p className="homeP">Étudiant en préparation d'un diplome d'architecte en informatique à l'<a className="basicLink" href="https://42.fr/">école 42</a> (Paris).</p>
                </div>
              </div>

            <div className="homeDiv">
              <h2 className="homeH2">Mon CV</h2>
              <p className="homeP py-2 italic">Venez me decouvrir :</p>
              <div className="flex flex-col items-center space-y-16">
                <div className="homeDlCvDiv">
                  <a className="homeDlCvA" href="/CV/Canva/CV.pdf" download >
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    Télécharger mon CV
                  </a>
                </div>
                <div className="homeButtons">
                  <button className="homeBtn">
                    <a href="/projects">Mes Projets</a>
                  </button>
                  <button className="homeBtn">
                    <a href="/info">En savoir plus</a>
                  </button>
                </div>
              </div>
            </div>
          
          </div>
          
          <div className="flex justify-center space-x-20">
            <div className="homeDiv">
              <h2 className="homeH2">Experiences professionnelle</h2>
              <div className="flex flex-col py-5 text-left space-y-5">
                <p className="homeP text-center underline">Stagiaire ingénieur logiciel à <a className="basicLink" href="https://www.nabojo.com/">Nabojo</a> :</p>
                <p className="homeP">Développement et maintenance d'une WebApp de lecture de contenu intérractif.</p>
                <p className="homeP">Mise en place d'une pipeline de génération automatique de contenu interractif au format numérique.</p>
              </div>
            </div>

            <div className="homeDiv">
              <h2 className="homeH2">Disponibilite</h2>
              <p className="homeP">Disponible à partir de Septembre.</p>            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ScrollDown />
        </div>
      </header>

      <hr className="homeHr" />

      <div className="homeDivDesc">
        
        <div className="homeSectionDiv">
          <section className="homeSection">
            <h2 className="homeH2">Technologies</h2>
            <h3 className="homeH3">Développement applicatif</h3>
            <p>C / C++ / Java / Python</p>
            <h3 className="homeH3">Développement Web FullStack</h3>
            <h4 className="homeH4">Frontend</h4>
            <p>Html / Css / React</p>
            <p>Framework: Next.Js / Tailwind CSS</p>
            <h4 className="homeH4">Backend</h4>
            <p>NodeJS / Typescript / JavaScript / SQL / Nginx</p>
            <p>Framework: Fastify, NestJS</p>
            <h3 className="homeH3">Autre Technologies</h3>
            <p>Docker / Shell / Virtual Machines / Git</p>
          </section>
        </div>
        {/* <hr className="homeHr" /> */}
        <div className="homeSectionDiv">
          <section className="homeSection lg:py-15">
            <h2 className="homeH2 py-5">À mon propos</h2>
            <p className="homeP">Passionné par le code propre et les projets qui font sens, je suis très enthousiaste à l'idée d'apprendre en relevant de nouveaux defis.</p>
            <p className="homeP">Rigoureux et attentif, j'ai l'esprit critique et la capacité à m'adapter et travailler en équipe.</p>
            <p className="homeP">Je serais ravi de pouvoir travailler avec vous !</p>
          </section>

        </div>
      </div>
      <hr className="homeHr" />
      <div className="homeDivDesc">
        <div className="basicCenter flex-col">
          <img src="https://raw.githubusercontent.com/besalort/website-portfolio/output/github-contribution-grid-snake.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
