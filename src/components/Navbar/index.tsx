
import NextImage from "next/image";

type NavbarProps = {
  logo: string;
  nomeDoSite: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
};

export function Navbar1({logo, nomeDoSite, item1, item2, item3, item4}: NavbarProps) {
  



  return (
  <header className="header">

    <div className="Nav-container">
      <nav>
        <div className="NavEsquerda">
          <ul>
            <li className="logonavbar">
              <NextImage src={logo} alt={"Logo da Marca"} width={80} height={80} />
            </li>
            <li className="NomeDoSite">{nomeDoSite}</li>
          </ul>
        </div>
        <div className="NavDireita">
          <div className="NavLinks">
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {item1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {item2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {item3}
                </a>
              </li>
              <li className="nav-item">
                <a className="NavLogin" href="#">
                  {item4}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  </header>
  );
}