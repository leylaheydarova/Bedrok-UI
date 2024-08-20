import Image from 'next/image';
import styles from './FeaturesPost.module.css';
const POST_DATA = [
  {
    heading: "ENTREPRENEURSHIP",
    title: "Designers who changed the web",
    time: "July 28, 2022 · 6 min read"
  }
]

export default function FeaturedPost() {
  return (
    <section id="featuredpost">
      <div className="container">
        <div className={styles.featuredpostBox}>
          <div className={styles.up}>
            <h1>Featured Post</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.entrepreneurshipCard}>
               <div className={styles.cardLeft}>
                 {/* {POST_DATA.map((link)=>
                      {<p>{link.heading}</p>;
                      <h3>{link.title}</h3>;
                      <p>{link.time}</p>}
                      )} */}
                      <p className={styles.entre}>ENTREPRENEURSHIP</p>
                      <h3>Designers who changed the web</h3>
                      <p className={styles.time}>July 28, 2022 · 6 min read</p>
                </div>
                <div className={styles.cardRight}>
                  <Image src="/images/primary/Primaryimg.svg" alt='Primary image' width={674} height={290} />
                </div>
          </div>
         
          </div>
        </div>
      </div>
    </section>
  )
}
