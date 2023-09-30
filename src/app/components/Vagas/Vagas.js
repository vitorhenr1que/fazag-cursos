'use client'
import Link from "next/link"

import styles from './style.module.scss'
import { LiaWhatsapp } from "react-icons/lia"
import axios from "axios"
import { api } from "../../services/api"
import { use, useEffect, useState } from "react"

function RandomNumbers(){
    return Math.floor(Math.random() * 23)
}



export function Vagas({ course }){
    const [courseCorrect, setCourseCorrect] = useState(course)
    const [numberVencace, setNumberVecance] = useState(40)
    const [responseApi, setResponseApi] = useState("")

    useEffect(() => {

        async function GetNumberVecance(){
            if(responseApi == ""){ 
                const test = await api.post('vagas/vagas') // Pegue a resposta e adicione na state para não chamar toda hora
                console.log(test.data.getNumberVencace)
                setResponseApi(test.data.getNumberVencace)

            }
            
            
            if(courseCorrect.includes('-')){  //Se houver "-" altere para "_"
                //console.log(courseCorrect, 'COURSE ANTES')
                setCourseCorrect(courseCorrect.replaceAll('-','_'))

            }
            
            setNumberVecance(responseApi[`${courseCorrect}`])
            console.log(numberVencace)
            if(numberVencace == false){
                try {
                    console.log('ENTROU NO SE DO VALOR 0...')
                    
                    await api.post('vagas/alterar', {
                        course: {
                            [courseCorrect]: true,
                        },
                        value: {
                            [courseCorrect]: Math.floor(Math.random() * 23)
                        }
                    })
                } catch(e) {
                    console.log(e.message)
                }
            }
            //console.log(courseCorrect, 'COURSE DEPOIS')
       }
       GetNumberVecance()
    }, [responseApi, numberVencace])

    async function handleButtonContact(){
        setTimeout(async () => {
            try {
                console.log('ENTROU NO TIME OUT')
                await api.post('vagas/alterar', {
                    course: {
                        [courseCorrect]: true,
                    },
                    value: {
                        [courseCorrect]: numberVencace - 1
                    }
                })
            } catch(e) {
                console.log(e.message)
            }
        }, 1000)

       
    }

   

    return(
        <>
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas'} id='click_whatsapp' className={styles.inscrevaSeLink}>
                        
        <button className={styles.inscrevaSeButton} onClick={handleButtonContact}>
        <LiaWhatsapp className={styles.inscrevaSeButtonIcon} size={32}/>
            Entre em contato
        </button>
        </Link>
        <span style={{textAlign: "center"}}>{numberVencace ? numberVencace : "20"} vagas restantes</span>
        
        
        </>
    )
}