import { useState } from "react";
import { Footer, Header, Secao, FiltroSecao } from "@components";
import produtos from "@services/produtos.json";
import styles from "./App.module.css";

const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

const secoes = [
  { nome: "Entradas", produtos: produtos.entradas, subSecoes: subSecoesEntradas },
  { nome: "Principais", produtos: produtos.principais, subSecoes: subSecoesPrincipais },
  { nome: "Sobremesas", produtos: produtos.sobremesas },
];

function App() {
  const [filtro, setFiltro] = useState(null);
  console.log(subSecoesEntradas, subSecoesPrincipais);

  const handleSelecionarSecao = (titulo) => {
    if (filtro === titulo) {
      setFiltro(null);
    } else {
      setFiltro(titulo);
    }
  };

  const secoesFiltradas = filtro ? secoes.filter((secao) => secao.nome === filtro) : secoes;

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={secoes} onSelecionarSecao={handleSelecionarSecao} />
      <main className={styles.main}>
        {secoesFiltradas.map((secao) => {
          return (
            <Secao
              nome={secao.nome}
              produtos={secao.produtos}
              subSecoes={secao.subSecoes ? Array.from(secao.subSecoes) : null}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
