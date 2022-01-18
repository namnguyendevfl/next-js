import { Skills } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { Badge, BadgeHeading, BadgeSpacing } from '../components/shared/Badge'

export default function SkillsPage() {
    return (<>
    <Skills />
    </>)
}

SkillsPage.getLayout = function getLayout(page) {
    return (
    <Layout>
        <div className='d-flex'>
          <Badge />
          <BadgeSpacing />
          <BadgeHeading />
          <div className='w-100'>
            <Header type = "Skills"/>
            {page}
          </div>
        </div>
    </Layout>
    )
  }