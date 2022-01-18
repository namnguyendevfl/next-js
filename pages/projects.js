import { Projects } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { Badge, BadgeSpacing, BadgeHeading } from '../components/shared/Badge'

export default function ProjectsPage() {
    return (<>
    <Projects />
    </>)
}

ProjectsPage.getLayout = function getLayout(page) {
    return (
    <Layout>
        <div className='d-flex'>
          <Badge />
          <BadgeSpacing />
          <BadgeHeading />
          <div className='w-100'>
            <Header type = "Projects"/>
            {page}
          </div>
        </div>
    </Layout>
    )
  }