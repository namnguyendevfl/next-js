import { StyledBtnContainer, StyledProject, StyledTech } from "./ProjectsStyles"
const data = [
    {
        project_id: 1,
        project_name: "Flashcard-o-matic",
        project_description: "This app help users create decks of flash cards. Additionally, they can edit or delete any deck or card.",
        project_tech: "Html,CSS,Javascript,React.js,Node.js,Vercel",
        project_role: "",
        project_demo: "",
        project_code: "",
    },
    {
        project_id: 2,
        project_name: "We love movies",
        project_description: "This app provides users with information about movies and theaters. Users can learn movie details as well as reviews from other users and look up where to watch the movie.",
        project_tech: "Html,CSS,Javascript,React.js,Node.js,Express,Knex,Heroku",
        project_role: "",
        project_demo: "https://we-love-movies-client-nam.herokuapp.com/",
        project_code: "",
    },
    {
        project_id: 3,
        project_name: "Restaurant reservation",
        project_description: "This app is designed for restaurant personels to add customer information when a customer calls to request a reservation",
        project_tech: "",
        project_role: "",
        project_demo: "",
        project_code: "",
    }
]

export default function Projects() {

    const renderedProjects = data.map((project,idx) => {
        const technologies = project.project_tech.split(",")
        const renderedTech = technologies.map((tech,techIdx) => {
            return (
                    <div key = {techIdx} className='m-2 px-2 py-1 border-8px border-gray-1px' style = {{border: "1px solid "}}>
                        {tech}
                    </div>
            )
        })
        return (
            <div key = {idx} className="my-2 float-end">
            <StyledProject>
                <h3>{project.project_name}</h3>
                <p>{project.project_description}</p>
                <StyledTech>
                    <div className='d-flex flex-wrap justify-content-center'>{renderedTech}</div>
                </StyledTech>
                <StyledBtnContainer className='w-100'>
                    <div className='d-flex justify-content-center'>
                        <button className='m-2 mb-4'>Tech</button>
                        <button className='m-2 mb-4'>Demo</button>
                        <button className='m-2 mb-4'>Code</button>
                    </div>
                </StyledBtnContainer>
            </StyledProject>
        </div>
        )
    })
    return (<>
    <div className="d-flex flex-wrap justify-content-evenly">
       {renderedProjects}
    </div>
    </>)
}