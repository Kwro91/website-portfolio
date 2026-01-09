// app/projects/page.tsx
import Navbar from '../components/navbar';
import Link from 'next/link';
import {BottomBar} from '../components';
import Image from 'next/image';


export default function Projects() {
    
    const handleSubmit = () => {
        
    };

    return (
        <main>
            <div>
                <h1 className="basicH1">Mes projets</h1>
                <p>Voici quelques exemples des projets que j'ai fait jusqu'ici.</p>
                <div className="projetBtnDiv">


                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <Link href="/projects/cub3d">
                                <button className='projetBtn'>Cub3D</button>
                            </Link>
                            <p className='basicP'>Reproduction d'un environnement 3D inspire de Wolfenstein3D uniquement avec du C et une librairie graphique.</p>
                        </div>
                        <img className="projetImg" src="/images/cub3d/Game1.png" alt=""/>
                    </div>

                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <Link href="/projects/transcendence">
                                <button className='projetBtn'>Transcendence</button>
                            </Link>
                        </div>
                        <img className="projetImg" src="/images/transcendence/Online/3-2.png" alt=""/>
                    </div>

                    <div className="projetGenDesc">
                        <div className="projetDesc">
                            <Link href="/projects/scrabbleHelper">
                                <button className='projetBtn'>Scrabble Helper</button>
                            </Link>
                        </div>
                    </div>

                    {/* <Link href="/projects/model3d">
                        <button className='projetBtn'>Aller à la Modélisation 3D</button>
                    </Link> */}

                </div>
            </div>
        </main>
    );
}