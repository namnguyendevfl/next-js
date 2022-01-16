import styles from './projects.module.css'
import { StyledProject } from "./ProjectsStyles"

export default function Projects() {
    return (<>
    <div className="row">
        <div className={styles.project}>
            this is a project
        </div>
        <div className="">
            <StyledProject>
                this is a project
            </StyledProject>

        </div>
        <div className="me-auto">
            <StyledProject>
                this is a project
            </StyledProject>
        </div>
        <div className="">
            <StyledProject>
                this is a project
            </StyledProject>
        </div>
        <div className="">
            <StyledProject>
                this is a project
            </StyledProject>
        </div>
    </div>
    </>)
}