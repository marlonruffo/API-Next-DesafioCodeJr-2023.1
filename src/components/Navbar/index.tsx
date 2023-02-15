
import NextImage from "next/image";

type NavbarProps = {
  Logo: string;
  NomeDoSite: string;
  Item1: string;
  Item2: string;
  Item3: string;
  Item4: string;
};

export function Navbar1({
  Logo,
  NomeDoSite,
  Item1,
  Item2,
  Item3,
  Item4,
}: NavbarProps) {
  



  return (
    <div className="Nav-container">
      <nav>
        <div className="NavEsquerda">
          <ul>
            <li className="logonavbar">
              <NextImage src={Logo} alt={"Logo da Marca"} width={80} height={80} />
            </li>
            <li className="NomeDoSite">{NomeDoSite}</li>
          </ul>
        </div>
        <div className="NavDireita">
          <div className="NavLinks">
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {Item1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {Item2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {Item3}
                </a>
              </li>
              <li className="nav-item">
                <a className="NavLogin" href="#">
                  {Item4}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}