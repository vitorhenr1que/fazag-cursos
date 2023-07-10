import { Course } from './Course'
import styles from './styles.module.scss'
import administracao from '../../../../public/courses/administracao.jpg'
import contabeis from '../../../../public/courses/ciencias-contabeis.png'
import educacaoFisica from '../../../../public/courses/educacao-fisica.jpeg'
import psicologia from '../../../../public/courses/psicologia.png'

export function Courses(){

    return(
        <section className={`${styles.trueContaiener}`}>
        <div className={`${"container"} ${styles.coursesContainer}`}>
            <h2 id='nossos-cursos'>Escolha seu curso</h2>
            <div className={styles.containerPadding}>
                <Course image={administracao} course={"Administração"} totalValue={"R$540,00"} saleValue={"R$270,00"} link={"/"} hr/>
                <Course image={contabeis} course={"Ciências Contábeis"} totalValue={"R$540,00"} saleValue={"R$270,00"} link={"/"} hr/>
                <Course image={educacaoFisica} course={"Educação Física"} totalValue={"R$540,00"} saleValue={"R$270,00"} link={"/"} hr/>
                <Course image={psicologia} course={"Psicologia"} totalValue={"R$540,00"} saleValue={"R$270,00"} link={"/cursos/psicologia"}/>
            </div>
           
        </div>
        </section>
    )
}