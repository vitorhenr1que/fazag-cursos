import { FaBriefcase, FaGraduationCap, FaHandsHelping, FaMicroscope } from 'react-icons/fa'
import { PiSealCheckFill } from 'react-icons/pi'
import styles from './style.module.scss'

const reasons = [
  {
    title: 'Estrutura pensada para sua formação prática',
    text: 'Ambientes de aprendizagem que aproximam teoria, prática e rotina profissional desde a graduação.',
    icon: FaMicroscope,
  },
  {
    title: 'Professores experientes para acompanhar sua jornada',
    text: 'Docentes preparados para orientar escolhas, desafios acadêmicos e os primeiros passos da carreira.',
    icon: FaHandsHelping,
  },
  {
    title: 'Tradição e credibilidade em Valença e região',
    text: 'Mais de duas décadas formando profissionais e fortalecendo oportunidades no Baixo Sul da Bahia.',
    icon: PiSealCheckFill,
  },
  {
    title: 'Cursos voltados para o mercado',
    text: 'Formações conectadas com demandas reais, empregabilidade e desenvolvimento profissional.',
    icon: FaBriefcase,
  },
  {
    title: 'Uma faculdade para construir o seu futuro',
    text: 'Aqui, sua escolha de curso vira projeto de vida, com acolhimento e direção para avançar.',
    icon: FaGraduationCap,
  },
]

export function FiveReasons() {
  return (
    <section className={styles.trueContainer} aria-labelledby="por-que-fazag">
      <div className={`container ${styles.containerReasons}`}>
        <div className={styles.heading}>
          <span>Por que escolher a FAZAG?</span>
          <h2 id="por-que-fazag">Uma formação feita para quem quer sair do lugar</h2>
          <p>
            Mais do que iniciar um curso, você encontra suporte, estrutura e uma trajetória acadêmica conectada ao futuro que deseja construir.
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <article className={styles.reasonCard} key={reason.title}>
                <div className={styles.iconsCircle}>
                  <Icon aria-hidden="true" />
                </div>
                <div className={styles.iconsParagraph}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
