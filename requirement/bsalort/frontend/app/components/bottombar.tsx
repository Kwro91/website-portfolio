export default function BottomBar() {
    return (
        <footer className="bottomBar">
            <div className="bottomBarDivBtn">
                <button className="bg-white rounded-full py-1 px-1">
                    <a href="https://www.linkedin.com/in/benjamin-salort">
                        <img src="/images/svg/linkedin.svg" alt="" className="bottomBarImg"/>
                    </a> 
                </button>
                <button className="bg-white rounded-full py-1 px-1">
                    <a href="https://github.com/besalort">
                        <img src="/images/svg/git.svg" alt="" className="bottomBarImg"/>
                    </a>
                </button>
            </div>
            <p>Site web realisé avec ❤︎ avec NextJS (React), TailwindCSS, NestJS & hébergement personnel.</p>
            <p>© 2026 Benjamin Salort. Tous droits réservés.</p>
        </footer>
    );
}