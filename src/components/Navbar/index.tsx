
import NextImage from "next/image";

type NavbarProps = {
  logo: string;
  nomeDoSite: string;
  item1: string;
  item1redireciona: string;
  item2: string;
  item2redireciona: string;
  item3: string;
  item3redireciona: string;
  item4: string;
  item4redireciona: string;
};

export function Navbar1({logo, nomeDoSite, item1, item1redireciona, item2, item2redireciona, item3, item3redireciona, item4, item4redireciona}: NavbarProps) {
  



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
                <a className="nav-link" href={item1redireciona}>
                  {item1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={item2redireciona}>
                  {item2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={item3redireciona}>
                  {item3}
                </a>
              </li>
              <li className="nav-item">
                <a className="NavLogin" href={item4redireciona}>
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