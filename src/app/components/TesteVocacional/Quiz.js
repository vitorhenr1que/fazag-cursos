import { useState } from "react";
import {Question} from './Question'
import {questions} from './questions'
import styles from './style.module.scss';
import styles2 from '../../teste-vocacional/style.module.scss'
import { ModalVocacional } from '../../components/ModalVocacional'

const professions = {
    administração: "Administração",
    ciências_contábeis: "Ciências Contábeis",
    educação_física: "Educação Física",
    engenharia_civil: "Engenharia Civil",
    estética_e_cosmética: "Estética e Cosmética",
    enfermagem: "Enfermagem",
    farmácia: "Farmácia",
    fisioterapia: "Fisioterapia",
    nutrição: "Nutrição",
    pedagogia: "Pedagogia",
    psicologia: "Psicologia",
    serviço_social: "Serviço Social"
  };



  export function Quiz(){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({
      administração: 0,
      ciências_contábeis: 0,
      educação_física: 0,
      engenharia_civil: 0,
      estética_e_cosmética: 0,
      enfermagem: 0,
      farmácia: 0,
      fisioterapia: 0,
      nutrição: 0,
      pedagogia: 0,
      psicologia: 0,
      serviço_social: 0
    });
    const [finished, setFinished] = useState(false);
  
    const handleAnswer = (areas) => { // Ao selecionar resposta - Adiciona novo score e soma e verifica o índice da questão
      const newScores = { ...scores }; // Pega tudo que está dentro de scores
      areas.forEach(area => {
        if (newScores[area] !== undefined) { // se tiver alguma coisa dentro
          newScores[area] += 1;
        }
      });
      setScores(newScores); // Coloque o novo newScores
  
      const nextQuestionIndex = currentQuestionIndex + 1; 
      if (nextQuestionIndex < questions.length) { //Verificador de próxima questão
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setFinished(true);
      }
    };
  
    const getTopThreeProfessions = () => { //Pegar top 3 cursos
      const sortedAreas = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
      return sortedAreas.slice(0, 3).map(area => professions[area]);
    };
  
    if (finished) {
      const topThree = getTopThreeProfessions();

      return (
        <div className={`${styles2.container}`}>
    
                <div className={`${styles2.generalContainer} container`}>
    
                    <div className={`${styles2.boxQuestionContainer}`}>
    
                        <div className={`${styles2.textContainer}`}>
                        
                        <div className={`${styles2.textDiv}`}>
                            <strong className={`${styles2.title}`}>Parabéns por concluir o teste vocacional!</strong>
                            <span>Baseado nas suas respostas, já calculamos o curso que mais se adapta ao seu perfil.</span>
                        </div>
                    </div>
                        
                    <ModalVocacional courseOne={topThree[0]} courseTwo={topThree[1]} courseTree={topThree[2]}/>
                    </div>
                </div>
                
            </div>
        
      );
    }
  
    return (
      <div>
        <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} currentQuestionIndex={currentQuestionIndex} questionIndex={questions.length} />
      </div>
    );
  };
  
