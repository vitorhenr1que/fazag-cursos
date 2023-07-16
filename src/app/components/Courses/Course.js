import Image from "next/image";
import styles from './styles.module.scss'

import Link from "next/link";

export function Course({image, course, totalValue, saleValue, link, hr}){

    return (
        <>
    <div className={styles.courseContainer}>
        <div className={styles.imgCourseDiv}>
            <Link className={styles.links} href={link}>
            {image}
            </Link>
            {/*<Image className={styles.imgCourse} src={image} fill objectFit="cover" alt={"Imagem do Curso"}/>*/}
        </div>

        <div className={styles.textCourseContainer}>
            <Link href={link} className={styles.links}>
            <h3>{course}</h3>
            </Link>
            <s>{totalValue}/mês</s>
            <span>{saleValue}/mês</span>
        </div>

        <Link className={styles.buttonMore} href={link}>
            <button>Saiba mais</button>
        </Link>
    </div>
    {hr && <hr/>}
    </>
    )
}