'use client'
import styles from './style.module.scss'
import { useState } from 'react'
import {questions} from '../components/TesteVocacional/questions'
import { Quiz } from '../components/TesteVocacional/Quiz'
export default function TesteVocacional(){

const [currentPage, setCurrentPage] = useState(1)

    if(currentPage === 1){
        return(
            <div className={`${styles.container}`}>
    
                <div className={`${styles.generalContainer} container`}>
    
                    <div className={`${styles.boxQuestionContainer}`}>
    
                        <div className={`${styles.textContainer}`}>
                        
                        <div className={`${styles.textDiv}`}>
                            <span className={`${styles.introducao}`}>INTRODUÇÃO</span>
                            <strong className={`${styles.title}`}>Antes de iniciar</strong>
                            <span>Este teste foi cuidadosamente elaborado para ajudá-lo a identificar suas habilidades, interesses e valores, fornecendo insights valiosos sobre quais carreiras podem ser mais adequadas para você.</span>
                        </div>
                        
    
                        <div className={`${styles.textDiv}`}>
                            <strong>Não existem respostas certas ou erradas</strong>
                            <span>O objetivo é entender melhor quem você é e o que você deseja para o seu futuro profissional.</span>
                        </div>
    
                        <div className={`${styles.textDiv}`}>
                            <strong>Seja você mesmo</strong>
                            <span>Responda com sinceridade a cada pergunta.</span>
                        </div>
                        
    
                    </div>
                        
                        <button className={`${styles.button}`} onClick={() => setCurrentPage(2)}>
                            <span>Iniciar o Teste</span>
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }
    else if (currentPage === 2){
        return (
            <Quiz/>
            
        )
    }
    
}