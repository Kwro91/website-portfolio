import Link from "next/link";

export function ContactButton() {
    const email = "benjamin.salort@hotmail.com";
    const subject = "Contact depuis le portfolio";
    return (
        <button className="navBtn">
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} className="flex items-center gap-2">
                {/* <img src="/images/svg/mail.svg" alt="" className="navSvgBtn"/> */}
                {/* <svg viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" <g id="Icon-Set-Filled"  transform="translate(-414.000000, -261.000000)" fill="#000000"> <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail" sketchtype="MSShapeGroup"> </path> </g> </g> </g></svg> */}
                <svg className="navSvgBtn" viewBox="0 -3.5 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>mail</title><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-414,-261)"><g fill="#000000"><path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 Z"/></g></g></g></svg>
                <p className="navTextDisappear">Contactez moi</p>
            </a>
        </button>
    );
}

export default function Navbar() {
  return (
    <nav className="navBar">
        <Link href="/">
        <button className="HomeBtn">
            <h1 className="navTitle">Benjamin Salort</h1>
        </button>
        </Link>
        <div className="navDivBtns">
            <Link href="/projects">
                <button className="navBtn">
                    {/* <img src="/images/svg/gitBranch1.svg" alt="" className="navSvgBtn"/> */}
                    <svg className="navSvgBtn" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.13984 4.72563C5.94742 4.3112 6.5 3.47013 6.5 2.5C6.5 1.11929 5.38071 0 4 0C2.61929 0 1.5 1.11929 1.5 2.5C1.5 3.52516 2.11705 4.4062 3 4.79198V11.208C2.11705 11.5938 1.5 12.4748 1.5 13.5C1.5 14.8807 2.61929 16 4 16C5.38071 16 6.5 14.8807 6.5 13.5C6.5 12.4748 5.88295 11.5938 5 11.208V7.41421L7.08579 9.5H9.70802C10.0938 10.383 10.9748 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.9748 6 10.0938 6.61705 9.70802 7.5H7.91421L5.13984 4.72563Z" fill="#000000"></path> </g></svg>
                    <p className="navTextDisappear">Projet</p>
                </button>
            </Link>
            <Link href="/info">
                <button className="navBtn">
                    {/* <img src="/images/svg/info.svg" alt="" className="navSvgBtn"/> */}
                    <svg className="navSvgBtn" fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm223.797 707.147c-28.531-29.561-67.826-39.944-109.227-39.455-55.225.657-114.197 20.664-156.38 40.315-100.942 47.024-178.395 130.295-242.903 219.312-11.616 16.025-17.678 34.946 2.76 49.697 17.428 12.58 29.978 1.324 40.49-9.897l.69-.74c.801-.862 1.591-1.72 2.37-2.565 11.795-12.772 23.194-25.999 34.593-39.237l2.85-3.31 2.851-3.308c34.231-39.687 69.056-78.805 115.144-105.345 27.4-15.778 47.142 8.591 42.912 35.963-2.535 16.413-11.165 31.874-17.2 47.744-21.44 56.363-43.197 112.607-64.862 168.888-23.74 61.7-47.405 123.425-70.426 185.398l-2 5.38-1.998 5.375c-20.31 54.64-40.319 108.872-53.554 165.896-10.575 45.592-24.811 100.906-4.357 145.697 11.781 25.8 36.77 43.532 64.567 47.566 37.912 5.504 78.906 6.133 116.003-2.308 19.216-4.368 38.12-10.07 56.57-17.005 56.646-21.298 108.226-54.146 154.681-92.755 47.26-39.384 88.919-85.972 126.906-134.292 12.21-15.53 27.004-32.703 31.163-52.596 3.908-18.657-12.746-45.302-34.326-34.473-11.395 5.718-19.929 19.867-28.231 29.27-10.42 11.798-21.044 23.423-31.786 34.92-21.488 22.987-43.513 45.463-65.634 67.831-13.54 13.692-30.37 25.263-47.662 33.763-21.59 10.609-38.785-1.157-36.448-25.064 2.144-21.954 7.515-44.145 15.046-64.926 30.306-83.675 61.19-167.135 91.834-250.686 19.157-52.214 38.217-104.461 56.999-156.816 17.554-48.928 32.514-97.463 38.834-149.3 4.357-35.71-4.9-72.647-30.269-98.937Zm63.72-401.498c-91.342-35.538-200.232 25.112-218.574 121.757-13.25 69.784 13.336 131.23 67.998 157.155 105.765 50.16 232.284-29.954 232.29-147.084.005-64.997-28.612-111.165-81.715-131.828Z" fillRule="evenodd"></path> </g></svg>
                    <p className="navTextDisappear">En savoir plus</p>
                </button>
            </Link>
            <ContactButton />
        </div>
    </nav>
  );
}