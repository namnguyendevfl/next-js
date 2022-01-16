import styles from './contact.module.css'
import { Icon } from './Icons'

export default function Contact () {
    return (
        <>
        <div className='d-flex justify-content-between'>
            <form className='col-4'>
                <h2 className='fw-7 letter-spacing-tight'>Contact me</h2>
                <div className='d-flex flex-column'>
                    <label>Name: </label>
                    <input className={styles.input + " mt-1"}/>
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label>Email: </label>
                    <input className={styles.input + " mt-1"}/>
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label>Phone: </label>
                    <input className={styles.input + " mt-1"}/>
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <label>Message: </label>
                    <textarea className={styles.textarea + " mt-1"}/>
                </div>
                <button className={styles.send + " txt-md fw-6 border-8px px-4 mt-4 border-outline-none"}>Send</button>
            </form>
            <div className='mx-5'></div>
            <div className={styles.info + " col-4"}>
                <h2 className='fw-7 letter-spacing-tight'>Infomation</h2>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"address"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>1705 Powder Ridge, Valrico, Fl 33594</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"phone"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>8134202585</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"skype"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>skype</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <Icon type = {"email"}/>
                    <p className='m-0 px-2 txt-sm fw-5 txt-gray-6'>namnguyenfl990@gmail.com</p>
                </div>
            </div>
        </div>
       
        </>
    )
}