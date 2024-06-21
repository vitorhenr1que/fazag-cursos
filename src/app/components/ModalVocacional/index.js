'use client'
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import styles from './style.module.scss'
import { api } from "../../services/api";
import { Loading } from "./Loading";
import { useState } from "react";
import axios from "axios";
import InputMask from 'react-input-mask'
import { useRouter } from "next/navigation";


export function ModalVocacional({courseOne, courseTwo, courseTree}) {
        const [openModal, setOpenModal] = useState(false)
        const [loading, setLoading] = useState(false)
        const [telephone, setTelephone] = useState('')
        const route = useRouter()




        function verifyEmail(email){
          const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

          if(regexEmail.test(email)){
            return email
          }
          else {
            return false
          }
        }

        async function handleSubmit(e){
          e.preventDefault()
          setLoading(true)
          
          const formData = new FormData(e.target)
          const data = Object.fromEntries(formData)
          
          if(verifyEmail(data.email)){

          } else {
            setLoading(false)
            return alert('Insira um e-mail válido!')
          }



          try {
            await axios.post('api/teste-vocacional/create', {
              nome: data.nome,
              email: data.email,
              tel: data.tel,
              courseOne,
              courseTwo,
              courseTree
            })

            await axios.post('/api/teste-vocacional/email', {
              nome: data.nome,
              email: data.email,
              tel: data.tel,
              courseOne,
              courseTwo,
              courseTree
            })

            
            /*await axios.post('api/nodemailer/leads', {
              nome: data.nome,
              email: data.email,
              tel: data.tel,
              course: course
            })*/

            setLoading(false)
            
            route.push('/teste-enviado')
            setOpenModal(false)
          } catch(err){
            console.log(err, 'Erro com a validação do formulário')
            alert(`Erro com a validação do formulário: \n\n Verifique se todas as informações estão preenchidas corretamente ou entre em contato no botão de Whatsapp acima.`)
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
        <span>Receber resultado por e-mail</span>
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>

        {loading && <Loading/>}
        
        <Dialog.Title className={styles.DialogTitle}>Receba o resultado do seu teste vocacional</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Preencha as informações abaixo.
        </Dialog.Description>
        <form onSubmit={handleSubmit} className={styles.form}>
          
          <label htmlFor="name" className={styles.labels}>Nome <span>*</span></label>
          <input type="text" name="nome" id="name" placeholder="Nome" className={`${styles.input}`} required/>

          <label htmlFor="email" className={styles.labels}>E-mail <span>*</span></label>
          <input type="email" name="email" id="email" placeholder="E-mail" className={`${styles.input}`} required/>
         
          <label htmlFor="tel" className={styles.labels}>Celular <span>*</span></label>
         <InputMask className={`${styles.input}`} mask={"(99) 99999-9999"} maskChar="_" placeholder="(00) 00000-0000" required>
          {(inputProps) => <input {...inputProps} type="text" name="tel" id="tel"   />}
         </InputMask>
         
          <button className={styles.enviarButton} type='submit'><span>Receber resultado</span></button>
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