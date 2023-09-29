'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './style.module.scss'
import { LiaWhatsapp } from "react-icons/lia"

function RandomNumbers(){
    return Math.floor(Math.random() * 23)
}



export function Vagas(){
    const [vagas, setVagas] = useState(19)

    function VerifyNumberVacancies(){
        if(vagas == 0){
            setTimeout(()=> {
                setVagas(RandomNumbers)
            },10000)
           return
        }
        setVagas(vagas - 1)
    }

    useEffect(() => {
        if(vagas == 0){
            setTimeout(()=> {
                setVagas(RandomNumbers)
            },10000)
            
        }
    })
    return(
        <>
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=5575981048077&text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas'} id='click_whatsapp' className={styles.inscrevaSeLink} onClick={VerifyNumberVacancies}>
                        
        <button className={styles.inscrevaSeButton}>
        <LiaWhatsapp className={styles.inscrevaSeButtonIcon} size={32}/>
            Entre em contato
        </button>
        </Link>
        <span>{vagas} vagas restantes</span>
        </>
    )
}