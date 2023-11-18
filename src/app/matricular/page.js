'use client'
import InputMask from 'react-input-mask';
import styles from './style.module.scss'
import { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Matricular(){

    const [telephone, setTelephone] = useState()
    const [dirty, setDirty] = useState(false)
    const [text, setText] = useState('')
    const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
    const editorRef = useRef(null)

    const save = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            setDirty(false);
            editorRef.current.setDirty(false);
            // an application would save the editor content to the server here
            console.log(content);
          }
    }
    const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };
    function verifyEmail(email){
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(regexEmail.test(email)){
          return email
        }
        else {
          return false
        }
      }

    return (
        <div className={styles.container}>
        <h1>Inscrições FAZAG 2024</h1>

        <form className={styles.formContainer}>
            <div className={styles.inputContainer}>
            <input placeholder="Nome Completo" className={styles.input} type='name' id="psName"></input>

            <InputMask className={`${styles.input}`} mask={"(99) 99999-9999"} maskChar="_" placeholder="Celular / Whatsapp" value={telephone} onChange={(e) => setTelephone(e.target.value)}>
                {(inputProps) => <input {...inputProps} type="text" name="telephone" id="psTelephone"   />}
            </InputMask>

            <input placeholder="E-mail" className={styles.input} name='email' type='email' id="psEmail"></input>

            <input placeholder="Cidade" className={styles.input} name='city' type='text' id="psCity"></input>
            <div className={styles.containerSelect}>
                <div className={styles.divSelect}>
                    <select name='Como conheceu a FAZAG?' id='psSelectOne' className={styles.select}>
                        <option className={styles.optionOne} value="0" selected disabled>Como conheceu a FAZAG?</option>
                        <option value="instagram">Facebook</option>
                        <option value="whatsapp">Instagram</option>
                        <option value="whatsapp">Google</option>
                        <option value="whatsapp">Whatsapp</option>
                        <option value="whatsapp">Panfleto</option>
                        <option value="whatsapp">Site</option>
                        <option value="whatsapp">Amigo</option>
                        <option value="whatsapp">Outros</option>
                    </select>
                </div>
                <div className={styles.divSelect}>
                    <select name='Como deseja ingressar?' id='psSelectTwo' className={styles.select}>
                        <option value="0" className={styles.optionOne} selected disabled>Como deseja ingressar?</option>
                        <option value="vestibular">Vestibular Online</option>
                        <option value="enem">Nota do ENEM</option>
                        <option value="transferencia">Transferência Externa</option>
                        <option value="segunda">Segunda Graduação</option>
                    </select>
                </div>
            </div>
            <section>

            <div className={styles.divCourseSelect}>
                    <select name='Selecione o curso desejado' id='psSelectTwo' className={styles.selectCourse}>
                        <option value="0" className={styles.optionOne} selected disabled>Selecione o curso desejado</option>
                        <option value="administracao">Administração</option>
                        <option value="contabeis">Ciências Contábeis</option>
                        <option value="ed-fisicab">Educação Física (Bacharelado)</option>
                        <option value="ed-fisical">Educação Física (Licenciatura)</option>
                        <option value="engenharia-civil">Engenharia Civil</option>
                        <option value="enfermagem">Enfermagem</option>
                        <option value="estetica">Estética e Cosmética</option>
                        <option value="farmacia">Farmácia</option>
                        <option value="fisioterapia">Fisioterapia</option>
                        <option value="nutricao">Nutrição</option>
                        <option value="pedagogia">Pedagogia</option>
                        <option value="psicologia">Psicologia</option>
                        <option value="servico-social">Serviço Social</option>
                    </select>
                </div>

            </section>
            <div>
                
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
            <Editor
                apiKey='21293lyhysv63t5z85qew419tn8gr9nqgf2prhu3hg0y7xvi'
                onInit={(evt, editor) => editorRef.current = editor}
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
              />
              <button className={styles.buttonSubmit} onClick={save} disabled={!dirty}>Enviar</button>
            {dirty && <p>O conteúdo ainda não está salvo!</p>}
            </div>
        </div>
        </form>
        </div>
    )
}