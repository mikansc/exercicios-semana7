import { Footer, Header, Secao } from "@components";
import produtos from "@services/produtos.json";
import styles from "./App.module.css";

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesEntradas, subSecoesPrincipais);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Secao
          nome="Entradas"
          produtos={produtos.entradas}
          subSecoes={Array.from(subSecoesEntradas)}
        />

        <Secao
          nome="Principais"
          produtos={produtos.principais}
          subSecoes={Array.from(subSecoesPrincipais)}
        />

        <Secao nome="Sobremesas" produtos={produtos.sobremesas} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
