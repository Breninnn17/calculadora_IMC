import { useState } from "react";


import styles from "./Form.module.css";

const Form = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState("");

  const calculaImc = () => {
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    return setResult(+imcFormatado);
  };

  const reset = () => {
    setPeso("");
    setAltura("");
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.titulo}>Peso</h2>
      <input
        className={styles.input}
        value={peso}
        onChange={(e) => setPeso(+e.target.value)}
        type="number"
        placeholder="80kg"
      />
      <h2 className={styles.titulo}>Altura</h2>
      <input
        className={styles.input}
        value={altura}
        onChange={(e) => setAltura(+e.target.value)}
        type="number"
        placeholder="1,78"
      />
      <div className={styles.btnContainer}>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            calculaImc();
          }}
        >
          Calcular
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
        >
          Resetar
        </button>
      </div>

      {peso && altura && peso && altura > 0 ? (
        <p className={styles.resultado}>seu IMC é de: {result}</p>
      ) : (
        <p className={styles.resultado}>
          Digite os valores para aperecer o resultado
        </p>
      )}
    </form>
  );
};

export default Form;