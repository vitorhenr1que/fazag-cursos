import Image from 'next/image'
import Link from 'next/link'
import {
  FaBalanceScale,
  FaComments,
  FaTooth,
} from 'react-icons/fa'
import { Courses } from './components/Courses'
import { FiveReasons } from './components/FiveReasons'
import { Slide } from './components/Slide'
import { nerSans, ppEditorialUltraItalic } from './fonts'
import styles from './page.module.scss'
import fachadaFazag from '../../public/hero/faixada-marrom.png'

const newCourses = [
  {
    title: 'Fonoaudiologia',
    eyebrow: 'Comunicação e cuidado',
    description: 'Um curso para atuar com voz, fala, audição e linguagem, ampliando possibilidades de inclusão e qualidade de vida.',
    cta: 'Quero cuidar da comunicação',
    href: '/cursos/fonoaudiologia',
    icon: FaComments,
  },
  {
    title: 'Odontologia',
    eyebrow: 'Saúde e tecnologia',
    description: 'Formação prática para quem quer transformar sorrisos e cuidar de pessoas desde os primeiros semestres.',
    cta: 'Quero transformar sorrisos',
    href: '/cursos/odontologia',
    icon: FaTooth,
  },
  {
    title: 'Direito',
    eyebrow: 'Carreira jurídica',
    description: 'Prepare-se para interpretar leis, defender direitos e construir uma trajetória sólida no universo jurídico.',
    cta: 'Quero construir minha carreira jurídica',
    href: '/cursos/direito',
    icon: FaBalanceScale,
  },
]

const socialProof = [
  {
    label: 'Depoimento de aluno',
    quote: 'A estrutura prática dos laboratórios e o acolhimento dos professores desde o primeiro dia me deram a certeza de que escolhi a faculdade certa para o meu futuro.',
    author: 'Mariana Silva',
    info: 'Graduanda de Odontologia',
    stars: 5,
  },
  {
    label: 'Depoimento de egresso',
    quote: 'Concluí minha formação na FAZAG e hoje vejo como os diferenciais práticos me prepararam para o mercado de trabalho. Recomendo de olhos fechados!',
    author: 'Carlos Andrade',
    info: 'Egresso de Direito',
    stars: 5,
  },
  {
    label: 'Destaque de carreira',
    quote: 'Com suporte contínuo dos docentes e incentivo à pesquisa e estágio, conquistei minha primeira vaga profissional antes mesmo de me formar.',
    author: 'Juliana Costa',
    info: 'Aprovada OAB / Estagiária',
    stars: 5,
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroSticker}>Futuro Profissional</span>
            <h1 className={styles.heroTitle} aria-label="Novos cursos, novas oportunidades">
              <span className={`${nerSans.className} ${styles.titleBlock}`}>Novos</span>
              <span className={`${ppEditorialUltraItalic.className} ${styles.titleScript}`}>cursos</span>
              <span className={`${nerSans.className} ${styles.titleBlock} ${styles.titleMuted}`}>Novas</span>
              <span className={`${nerSans.className} ${styles.titleSmall}`}>Oportunidades</span>
            </h1>
            <span className={styles.transformTag}>Transformação</span>
          </div>

          <div className={styles.heroMiddle}>
            <span className={styles.openSticker}>Inscrições Abertas</span>
            <div className={styles.heroPanel} aria-label="Novos cursos da FAZAG">
              {newCourses.map((course) => {
                const Icon = course.icon

                return (
                  <Link className={styles.heroCourseCard} href={course.href} key={course.title}>
                    <div className={styles.courseIcon}>
                      <Icon aria-hidden="true" />
                    </div>
                    <h2>{course.title}</h2>
                  </Link>
                )
              })}
            </div>
            <div className={styles.heroActions}>
              <Link href="#nossos-cursos" className={styles.primaryButton}>
                Conheça todos os cursos
              </Link>
              <Link href="/matriculas" className={styles.secondaryButton}>
                Faça sua inscrição
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrap}>
              <Image
                src={fachadaFazag}
                alt="Fachada da Faculdade Zacarias de Góes"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 720px"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

      </section>

      <section className={styles.urgency} aria-labelledby="matriculas-novos-cursos">
        <div className={styles.urgencyTextDiv}>
          <span className={styles.urgencyBadge}>Vagas Limitadas</span>
          <h2 id="matriculas-novos-cursos">Matrículas abertas para os novos cursos</h2>
          <p>Garanta sua vaga nas primeiras turmas de Odontologia, Fonoaudiologia e Direito.</p>
        </div>
        <Link href="/matriculas" className={styles.impactButton}>
          Garantir minha vaga
        </Link>
      </section>

      <section className={styles.newCoursesSection} id="novos-cursos" aria-labelledby="novos-cursos-title">
        <div className={styles.sectionHeader}>
          <span>Escolha seu próximo passo</span>
          <h2 id="novos-cursos-title">Três novas áreas para transformar seu futuro</h2>
          <p>
            Cursos pensados para unir formação humana, prática profissional e oportunidades reais em Valença e região.
          </p>
        </div>

        <div className={styles.newCoursesGrid}>
          {newCourses.map((course) => {
            const Icon = course.icon

            return (
              <article className={styles.featureCourseCard} key={course.title}>
                <Icon aria-hidden="true" />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Link href={course.href}>{course.cta}</Link>
              </article>
            )
          })}
        </div>
      </section>

      <FiveReasons />

      <section className={styles.socialProof} aria-labelledby="historias-title">
        <div className={styles.sectionHeader}>
          <span>Depoimentos</span>
          <h2 id="historias-title">Histórias que inspiram novos começos</h2>
          <p>Depoimentos reais e conquistas de quem escolheu construir sua trajetória profissional na FAZAG.</p>
        </div>

        <div className={styles.testimonialGrid}>
          {socialProof.map((item) => (
            <article className={styles.testimonialCard} key={item.label}>
              <div className={styles.testimonialHeader}>
                <span className={styles.testimonialLabel}>{item.label}</span>
                <div className={styles.starsRow}>
                  {'*'.repeat(item.stars)}
                </div>
              </div>
              <p>{item.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar}>
                  {item.author.split(' ').map((name) => name[0]).join('')}
                </div>
                <div className={styles.authorMeta}>
                  <strong>{item.author}</strong>
                  <span>{item.info}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Slide />
      <Courses />

      <section className={styles.finalCta}>
        <div className={styles.finalCtaContent}>
          <div>
            <span>Seu futuro começa aqui</span>
            <h2>Pronto para começar uma nova fase?</h2>
            <p>Escolha seu curso e dê o primeiro passo para transformar seu futuro.</p>
          </div>
          <Link href="/matriculas" className={styles.primaryButton}>
            Quero estudar na FAZAG
          </Link>
        </div>
      </section>
    </main>
  )
}
