'use client'
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import styles from './style.module.scss'
import { api } from "../../services/api";
import { Loading } from "./Loading";
import { useState } from "react";
import axios from "axios";



export function ModalMatriz({course}) {
        const [openModal, setOpenModal] = useState(false)
        const [loading, setLoading] = useState(false)


        async function handleSubmit(e){
          e.preventDefault()
          setLoading(true)
          
          const formData = new FormData(e.target)
          const data = Object.fromEntries(formData)
          console.log(data)
          console.log(course)

          try {
            await api.post('leads/create', {
              nome: data.nome,
              email: data.email,
              tel: data.tel,
              course: course
            })


            await api.post('leads/myleads', {
              nome: data.nome,
              email: data.email,
              tel: data.tel,
              course: course
            })

            setLoading(false)
            
            alert('Mensagem enviada!')
            setOpenModal(false)
          } catch(err){
            console.log(err, 'Erro com a validação do formulário')
            alert('Erro com a validação do formulário')
            setLoading(false)
          }
        }
        
        return (
            <>
              <Dialog.Root open={openModal} onOpenChange={(open) => {
                if(open === true){
                  setOpenModal(true)
                }else {
                  setOpenModal(false)
                }
              }}>
    <Dialog.Trigger asChild >
      <button className={`${styles.btnMatriz}`}>
        <span>Baixe a matriz do curso</span>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>

        {loading && <Loading/>}
        
        <Dialog.Title className={styles.DialogTitle}>Matriz Curricular</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Preencha as informações abaixo para baixar.
        </Dialog.Description>
        <form onSubmit={handleSubmit} className={styles.form}>
          
          <label htmlFor="name" className={styles.labels}>Nome <span>*</span></label>
          <input type="text" name="nome" id="name" placeholder="Nome" className={`${styles.input}`} required/>

          <label htmlFor="email" className={styles.labels}>E-mail <span>*</span></label>
          <input type="text" name="email" id="email" placeholder="E-mail" className={`${styles.input}`} required/>

          <label htmlFor="tel" className={styles.labels}>Celular <span>*</span></label>
          <input type="text" name="tel" id="tel" placeholder="Celular (Whatsapp)" className={`${styles.input}`} />

          <button className={styles.enviarButton} type='submit'><span>Baixar</span></button>
        </form>
        
        <Dialog.Close asChild className={styles.close}>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon className={styles.crossIcon} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root> 
            </>
        )
    
}