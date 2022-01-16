import { Container } from "./BannerStyles"

export default function Banner ({webBrowser}) {
    // console.log(webBrowser)
    const hello = `Hi! I'm Nam`
    return (
        <>
        <Container className="m-0 element-center">
            <div>
                <p className="m-0 p-0 txt-lg fw-5 w-100 text-center"> {hello} </p> 
                <p className="m-0 p-0 txt-lg fw-5 w-100 text-center"> Welcome to my portfolio </p> 
            </div>
        </Container>
        </>
    )
}