interface NavbarProps{
    NomeDoSite:string
    Item1:string
    Item2:string
    Item3:string
    Item4:string
}

export function Navbar({  NomeDoSite, Item1, Item2, Item3, Item4  }: NavbarProps){
    return(
        <nav>
            <div className="NavEsquerda">
                <ul>
                    <li>{NomeDoSite}</li>
                </ul>
            </div>
            <div className="NavDireita">
                <ul>
                    <li>{Item1}</li>
                    <li>{Item2}</li>
                    <li>{Item3}</li>
                    <li>{Item4}</li>

                </ul>
            </div>
            
        </nav>
    )
}