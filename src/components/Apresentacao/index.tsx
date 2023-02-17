
import NextImage from 'next/image';

interface CardapresentacaoProps {
  foto: string;
  titulo: string;
  descricao: string;
  textoInformacao: string;
}

export function Cardapresentacao({foto, titulo, descricao, textoInformacao}: CardapresentacaoProps) {
  return (
    <div className="apresentacao-container">
      <div className="apresentacao-esq">
        <NextImage src={foto} alt="Foto do estabelecimento" width={600} height={558} />
      </div>
      <div className="apresentacao-dir">
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
        <p>{textoInformacao}</p>
      </div>
    </div>
  );
}
