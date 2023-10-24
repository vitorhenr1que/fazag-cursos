import styles from './style.module.scss'
import Image from "next/image";
import fazag from '../../../../public/fazag.png'
import aula01 from '../../../../public/photos/labaula02.jpeg'
import aula from '../../../../public/photos/labaula.jpg'
import labcolacao from '../../../../public/photos/labcolacao.jpg'
import colacao from '../../../../public/photos/colacao.jpg'
import turmafarmacia from '../../../../public/photos/turmafarmacia.jpg'
import biblioteca from '../../../../public/photos/biblioteca.jpg'
import aula02 from '../../../../public/photos/labaula03.jpeg'
import lab01 from '../../../../public/photos/lab01.jpeg'
import lab02 from '../../../../public/photos/lab02.jpeg'
import lab03 from '../../../../public/photos/lab03.jpeg'
import lab04 from '../../../../public/photos/lab04.jpeg'
import lab05 from '../../../../public/photos/lab05.jpg'
import lab06 from '../../../../public/photos/lab06.jpg'
import biblioteca01 from '../../../../public/photos/biblioteca01.jpeg'
import biblioteca02 from '../../../../public/photos/biblioteca02.jpeg'


export function Slide(){
    return (
        <div className={styles.slideContainer}>
            <p className={styles.titleCarousel}>Confira algumas fotos e eventos da FAZAG</p>
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className={`carousel-inner ${styles.carouselDiv}`} >
    <div className={`carousel-item active ${styles.imgCarouselDiv}`}>
      <Image src={fazag} className="d-block w-100" objectFit='cover'  fill quality={100}  alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={aula02} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item  ${styles.imgCarouselDiv}`}>
      <Image src={lab05} className="d-block w-100" objectFit='cover'  fill quality={100}  alt="..."/>
    </div>
    <div className={`carousel-item  ${styles.imgCarouselDiv}`}>
      <Image src={lab06} className="d-block w-100" objectFit='cover'  fill quality={100}  alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={aula01} className="d-block w-100" objectFit='cover' fill quality={100}  alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={aula} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={labcolacao} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={colacao} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={lab03} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={lab01} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={turmafarmacia} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={biblioteca01} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>
    <div className={`carousel-item ${styles.imgCarouselDiv}`}>
      <Image src={biblioteca02} className="d-block w-100" objectFit='cover' fill quality={100} alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        
    )
}