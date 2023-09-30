'use client'
import Link from "next/link"

import styles from './style.module.scss'
import { LiaWhatsapp } from "react-icons/lia"
import axios from "axios"
import { api } from "../../services/api"

function RandomNumbers(){
    return Math.floor(Math.random() * 23)
}



export function Vagas(){


    function VerifyNumberVacancies(){
        if(vagas == 0){
            setTimeout(()=> {
                setVagas(RandomNumbers)
            },10000)
           return
        }
        setVagas(vagas - 1)
    }

   async function Test(){
    const res = await axios.post('http://localhost:3000/api/vagas/vagas')
    const test = res.data
    return test
   }

    return(
        <>
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas'} id='click_whatsapp' className={styles.inscrevaSeLink}>
                        
        <button className={styles.inscrevaSeButton}>
        <LiaWhatsapp className={styles.inscrevaSeButtonIcon} size={32}/>
            Entre em contato
        </button>
        </Link>
        <span>xx vagas restantes</span>
        {}
        
        </>
    )
}