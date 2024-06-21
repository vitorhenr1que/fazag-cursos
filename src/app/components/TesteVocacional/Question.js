import styles from './question.module.scss'

const latters = [
    "A","B","C","D","E","F"
]
export function Question ({ question, onAnswer, currentQuestionIndex, questionIndex }) {
    return ( 
      <div className={`${styles.questionContainer}`}>
        <span>Passo {currentQuestionIndex}/{questionIndex}</span>
        <h2>{question.question}</h2>
              {question.options.map((option, index) => (        /*MAP criando todos os botões de resposta da questão recebida*/
                <button className={`${styles.questionOption}`} key={index} onClick={() => onAnswer(option.areas)}>
                  <div className={`${styles.circleLatter}`}>
                      {latters[index]}
                  </div>
                  <div className={`${styles.textQuestion}`}>
                  {option.answer}
                  </div>
                </button>
              ))}
      </div>
        
    );
  };
