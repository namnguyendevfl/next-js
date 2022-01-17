import styles from './skills.module.css'
import { VercelIcon } from './SkillsIcons'
import chai from "./chai-logo.png";
import Image from 'next/image';


const vercelIcon = <div className='d-flex align-items-center justify-content-center' >
    <div className='d-flex align-items-center border-rounded justify-content-center black-white' style = {{height:"130px", width: "130px"}}>
        <VercelIcon />
    </div>
</div>
const chaiIcon = <div className='d-flex align-items-center justify-content-center' >
<div className='d-flex align-items-center justify-content-center' style = {{height:"130px", width: "130px"}}>
    <Image style = {{zIndex: "1"}} alt = "chai" src = {chai} />
</div>
</div>



export default function Skills () {
    const images = [
        {"Html": 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
        {"CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
        {"Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},
        {"TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
        {"Javascript": 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
        {"Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
        {"React":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
        {"Nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"},
        {"Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
        {"Express":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"},
        {"PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
        {"Mocha": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"},
        {"Chai": chaiIcon},
        {"Vercel": vercelIcon},
        {"Heroku": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"},
        {"Github": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    ]

    const renderedImages = images.map((image, idx) => {
        const name = Object.keys(image)
        const src = Object.values(image)
        const link = (() => {
            if (name[0] === "Vercel" || name[0] === "Chai") return false
            return true
        })()
        return (
            <div key = {idx} className='col mx-2 mt-3'>
                {link
                ?   <div className="d-flex justify-content-center align-items-center">
                        <img className={styles.image} src = {src[0]} alt = "language icons" />
                    </div>
                :   name[0] === "Vercel" ? vercelIcon : chaiIcon
                }
                <p className='w-100 d-flex justify-content-center m-0 p-2 txt-sm fw-5'>{name[0]}</p>
            </div>
        )
    })
    return (
        <>
        <div className='w-100 d-flex '>
            <div className='row d-flex flex-wrap'>
                {renderedImages}

                {/* {chaiIcon} */}
            </div>
        </div>
        
        </>
    )
}