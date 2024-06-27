import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.titulo}>O que o IMC ?</h1>
        <p className={styles.paragrafo}>
          O Índice de Massa Corporal (IMC) é uma ferramenta que oferece uma
          visão geral da relação entre peso e altura de uma pessoa. No entanto,
          é crucial compreender que a saúde é influenciada por vários fatores, e
          o IMC é apenas um dos indicadores.
        </p>
      </div>
      <div>
        <h1 className={styles.titulo}>Identifique seu IMC</h1>
        <p className={styles.paragrafo}>
          O IMC é classificado em diferentes categorias, cada uma indicando uma
          faixa geral de peso. Lembre-se de que o IMC é apenas uma medida
          inicial e não leva em conta todos os fatores individuais de saúde. As
          categorias são:
        </p>
        <ul className={styles.lista}>
          <li className={styles.listaItem}>
            Abaixo de 18,5: Peso abaixo do normal.
          </li>
          <li className={styles.listaItem}>
            18,5 a 24,9: Peso considerado na faixa saudável.
          </li>
          <li className={styles.listaItem}>
            25 a 29,9: Peso na faixa do sobrepeso.
          </li>
          <li className={styles.listaItem}>
            30 a 34,9: Peso na faixa da obesidade grau 1.
          </li>
          <li className={styles.listaItem}>
            35 a 39,9: Peso na faixa da obesidade grau 2.
          </li>
          <li className={styles.listaItem}>
            Acima de 40: Peso na faixa da obesidade grau 3.
          </li>
        </ul>
        <footer>
          <b>Breno Neves</b>
          <p>primeiro projeto com <a target="_blank" href="https://react.dev/"> React</a></p> 
        </footer>
      </div>
    </div>
  );
};

export default Section;