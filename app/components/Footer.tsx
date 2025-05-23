import Link from "next/link";

export default function Footer() {
  const commonStyle =
    "text-nav-link flex h-full items-center text-white relative";
  return (
    <footer className="app-footer bg-darkColor text-white">
      {/* Conteneur de largeur max 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 py-8">
        {/* Partie haute du footer : Réseaux et Rubriques */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Bloc "Suivez-nous" */}
          <div>
            <h2 className="text-lg font-normal mb-2">Suivez-nous sur</h2>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/labauletv"
                aria-label="facebook-link"
                target="blank"
                rel="noopenner noreferrer"
              >
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="-7 -2 24 24"
                  className={`${commonStyle} fill-white hover:fill-[#3b5998] duration-300 ease-out`}
                >
                  <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/labauletv/"
                aria-label="instagram-link"
                target="blank"
                rel="noopenner noreferrer"
              >
                <svg
                  fill="#000000"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  className={`${commonStyle} fill-white hover:fill-[#C13584] duration-300 ease-out`}
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@labaule.tv"
                aria-label="tiktok-link"
                target="blank"
                rel="noopenner noreferrer"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  className={`${commonStyle} fill-white hover:fill-[#00f2ea] duration-300 ease-out`}
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC3CPENzuaDChMBWOjDJTntg"
                aria-label="youTube-link"
                target="blank"
                rel="noopenner noreferrer"
              >
                <svg
                  width="24px"
                  height="18px"
                  viewBox="0 0 313.23315 216.02286"
                  version="1.1"
                  id="svg5"
                  className={`${commonStyle} fill-white hover:fill-[#FF0000] duration-300 ease-out`}
                >
                  <defs id="defs2" />
                  <g id="layer1" transform="translate(-54.079375,-5.2758072)">
                    <path
                      d="m 210.53177,221.29866 c 0,0 98.12514,0 122.46443,-6.48069 13.70449,-3.6724 24.01093,-14.2575 27.62825,-27.32688 6.68807,-23.97854 6.68807,-74.41988 6.68807,-74.41988 0,0 0,-50.117297 -6.68807,-73.879819 C 357.00713,25.79798 346.70069,15.42887 332.9962,11.864515 308.65691,5.2758072 210.53177,5.2758072 210.53177,5.2758072 c 0,0 -97.9062,0 -122.135976,6.5887078 -13.485335,3.564355 -24.010529,13.933465 -27.847831,27.326876 -6.468588,23.762522 -6.468588,73.879819 -6.468588,73.879819 0,0 0,50.44134 6.468588,74.41988 3.837302,13.06938 14.362496,23.65448 27.847831,27.32688 24.229776,6.48069 122.135976,6.48069 122.135976,6.48069 z"
                      fill="#ffffff"
                      id="path1412"
                      className={`${commonStyle} fill-white hover:fill-[#FF0000] duration-300 ease-out`}
                      clipPath="none"
                    />
                    <path
                      d="M 259.30109,113.28723 178.29251,67.382379 v 91.809711 z"
                      fill="#010c1a"
                      id="path1414"
                      // style="stroke-width:0.0208149"
                      clipPath="none"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>

          {/* Bloc "Rubriques" */}
          <div>
            <h5 className="text-md font-normal mb-2">Rubriques</h5>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:underline underline-offset-2 transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:underline underline-offset-2 transition-colors text-sm"
                >
                  News
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#"
                  className="hover:underline underline-offset-2 transition-colors text-sm"
                >
                  Événements
                </Link>
              </li> */}
              <li>
                <Link
                  href="/shows"
                  className="hover:underline underline-offset-2 transition-colors text-sm"
                >
                  Émissions
                </Link>
              </li>
              <li>
                <Link
                  href="/derbys"
                  className="hover:underline underline-offset-2 transition-colors text-sm"
                >
                  Derby Mag
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <hr className="my-6 border-gray-700" />

        {/* Partie basse : Contact, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-sm">contact@labaule.tv</p>
          <p className="text-sm">© 2025 La Baule TV | Tous droits réservés.</p>
          <Link
            href="/legals"
            className="text-sm hover:underline underline-offset-2 transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
