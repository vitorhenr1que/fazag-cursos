import styles from './style.module.scss'
import Image from "next/image";
import psicologia from '../../../../public/courses/psicologia.png'
import administracao from '../../../../public/courses/administracao.jpg'

export function Slide(){
    return (
        <div className={styles.slideContainer}>
            <span>Confira algumas fotos e eventos</span>
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={psicologia} className="d-block w-100" width={100} alt="..."/>
    </div>
    <div class="carousel-item">
      <Image src={administracao} className="d-block w-100" width={100} alt="..."/>
    </div>
    <div class="carousel-item">
      <Image src={administracao} className="d-block w-100" width={100} alt="..."/>
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