'use client'
import InputMask from '@mona-health/react-input-mask';
import styles from './style.module.scss'
import { useState } from 'react';
//import { Editor } from '@tinymce/tinymce-react';
import { Loading } from '../components/ModalMatriz/Loading'
import { api } from '../services/api';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {QuillEditor} from '../components/QuillEditor'
import "react-quill/dist/quill.snow.css"; // Estilos do Quill


export default function Matricular(){

    const [telephone, setTelephone] = useState()
    const [loading, setLoading] = useState(false)
    const [dirty, setDirty] = useState(false)
    //const editorRef = useRef(null)
    const route = useRouter()
    const [ingresso, setIngresso] = useState('Vestibular Online')
    const date = new Date()
    const actualDate = date.toLocaleString('pt-BR', {year: 'numeric'})
    const [code, setCode] = useState("<p> </p>");

    function handleChange(value, delta, source, editor){
      setCode(value)
    }
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

          // if (editorRef.current) {  
          //     const content = editorRef.current.getContent();
          //     setDirty(false);
          //     editorRef.current.setDirty(false);
          //     // an application would save the editor content to the server here
          //     console.log(content);
          //   }
      
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const formIngresso = ingresso
        console.log('ESTE SÃO OS DADOS DO FORMULÁRIO:', data)
        
        if(verifyEmail(data.email)){

        } else {
          setLoading(false)
          return alert('Insira um e-mail válido!')
        }


        try {
           await api.post('inscricao/create', {
             nome: data.nome,
             city: data.city,
             conheceu: data.conheceu,
             course: data.course,
             email: data.email,
             ingresso: data.ingresso,
             tel: data.tel
           })

          await axios.post('api/inscricao/email', {
            nome: data.nome,
            city: data.city,
            conheceu: data.conheceu,
            course: data.course,
            email: data.email,
            ingresso: data.ingresso,
            tel: data.tel,
            text: code
            //Para o TinyMCE - text: formIngresso === 'Vestibular Online' ? editorRef.current.getContent() : "<p> </p>"
          })

          

          setLoading(false) 
          
          alert('Inscrição Realizada com sucesso!')
          route.push('/inscricao-enviada')
        } catch(err){
          console.log(err, 'Erro com a validação do formulário')
          alert(`Erro com a validação do formulário: \n\n Verifique se todas as informações estão preenchidas corretamente ou entre em contato no botão de Whatsapp acima.`)
          setLoading(false)
        } 
      }


   
    return (
        
        <div className={styles.container}>

          {loading && <Loading/>}

        <h1>Inscrições FAZAG {actualDate}</h1>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input placeholder="Nome Completo" className={styles.input} type='name' name='nome' id="psName"></input>

             <InputMask
              mask="(99) 99999-9999"
              placeholder="(XX) XXXXX-XXXX">
              <input className={styles.input} type='tel' name='tel' id='tel'/>
            </InputMask> 

            <input placeholder="E-mail" className={styles.input} name='email' type='email' id="psEmail"></input>

            <input placeholder="Cidade" className={styles.input} name='city' type='text' id="psCity"></input>
            <div className={styles.containerSelect}>
                <div className={styles.divSelect}>
                    <select name='conheceu' defaultValue={"0"} id='psSelectOne' className={styles.select}>
                        <option className={styles.optionOne} value="0" disabled>Como conheceu a FAZAG?</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Google">Google</option>
                        <option value="Whatsapp">Whatsapp</option>
                        <option value="Panfleto">Panfleto</option>
                        <option value="Site">Site</option>
                        <option value="Amigo">Amigo</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div className={styles.divSelect}>
                    <select name='ingresso' defaultValue={"conheceu"} id='psSelectTwo' className={styles.select} onChange={(e) => {setIngresso(e.target.value)}}>
                        <option value="0" className={styles.optionOne} disabled>Como deseja ingressar?</option>
                        <option value="Vestibular Online">Vestibular Online</option>
                        <option value="Nota do ENEM">Nota do ENEM</option>
                        <option value="Transferência Externa">Transferência Externa</option>
                        <option value="Segunda Graduação">Segunda Graduação</option>
                    </select>
                </div>
            </div>
            <section>

            <div className={styles.divCourseSelect}>
                    <select name='course' id='psSelectTwo' className={styles.selectCourse} defaultValue={"Selecione o curso"}>
                        
                        <option value="Administração">Administração</option>
                        <option value="Ciências Contábeis">Ciências Contábeis</option>
                        <option value="Educação Física (Bacharelado)">Educação Física (Bacharelado)</option>
                        <option value="Educação Física (Licenciatura)">Educação Física (Licenciatura)</option>
                        <option value="Engenharia Civil">Engenharia Civil</option>
                        <option value="Enfermagem">Enfermagem</option>
                        <option value="Estética e Cosmética">Estética e Cosmética</option>
                        <option value="Farmácia">Farmácia</option>
                        <option value="Fisioterapia">Fisioterapia</option>
                        <option value="Nutrição">Nutrição</option>
                        <option value="Pedagogia">Pedagogia</option>
                        <option value="Psicologia">Psicologia</option>
                        <option value="Serviço Social">Serviço Social</option>
                    </select>
                </div>

            </section>
            <div>
                
               
            {ingresso === 'Vestibular Online' && 
            <>
             <section className={styles.instrucoesDiv}>
             <hr/>
             <h3>Instruções</h3>
             <span>Leia com atenção o tema proposto</span>
             <span>Será ANULADA a Redação que:</span>
             <span>1.  Redigida fora dos temas propostos;</span>
             <span>2.  Apresentada em forma de verso;</span>
             </section>
             <hr/>
             <section className={styles.divRedacao}>
             <h3>Redação</h3>
             <h5>Tema: Exclusão Social</h5>
             <p>A Exclusão Social designa um processo de afastamento e privação de determinados indivíduos ou de grupos sociais em diversos âmbitos da estrutura da sociedade.</p>
             <p>Trata-se de uma condição inerente ao capitalismo contemporâneo, ou seja, esse problema social foi impulsionado pela estrutura desse sistema econômico e político.</p>
             <p>Com base nos conhecimentos construídos ao longo de sua formação, redija texto dissertativo- argumentativo em modalidade escrita formal da língua portuguesa sobre o tema “Exclusão Social”, apresentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione, de forma coerente e coesa, argumentos e fatos para defesa de seu ponto de vista.</p>
             </section>
            
            {/* <Editor
                apiKey='21293lyhysv63t5z85qew419tn8gr9nqgf2prhu3hg0y7xvi'
                onInit={(evt, editor) => ingresso === "Vestibular Online" ? editorRef.current = editor : editorRef.current = "<p> </p>"}
                initialValue="<p>Faça a sua redação aqui.</p>"
                onDirty={() => setDirty(true)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              /> */}

              
                
      <div className={styles.textDiv}>
      {console.log(code)}
     <QuillEditor onChange={setCode} value={code} dirty={dirty} setDirty={setDirty}/>
 
      </div>
                
              </>}
            {/* Verificação do Botão desabilitado da redação ou habilitado de outras formas */}                                  
            { ingresso === 'Vestibular Online' ? 

            <button className={styles.buttonSubmit} type='submit' disabled={!dirty}>Enviar</button> : 
            <button className={styles.buttonSubmit} type='submit'>Enviar</button> }

            {dirty && <p>O conteúdo ainda não está salvo!</p>}
            {/*ingresso && <pre>{ingresso}</pre>*/}
            </div>
        </div>
        </form>
        </div>
    )
}