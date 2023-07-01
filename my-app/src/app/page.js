import Image from 'next/image'
import styles from './page.module.css';
import Homepage from './components/Homepage';

export default function Home() {
  return (
    <div className={styles.main}>
   <Homepage/>
   
    </div>
  )
}
