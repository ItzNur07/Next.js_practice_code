import Navbar from "../Components/Navbar"
import styles from '../styles/contact.module.css'
const Contact = () => {
  return (
    <>
    <Navbar />
      <h1 className={styles.heading}>Welcome to Contact Pages</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus explicabo error aperiam autem dolorem dolores quas nesciunt consectetur ipsum recusandae mollitia veritatis odit eos quibusdam doloremque ullam officia consequatur, minima deserunt deleniti repudiandae eius pariatur neque. Quasi, quidem aspernatur.</p>
      <a className={styles.button}>back</a>

      <style jsx>{
        `
        p{
          color:blue;
        }
      `
      }</style>
    </>
  )
} 

export default Contact
