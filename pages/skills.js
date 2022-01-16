import { Skills } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { SideInfo } from '../components/shared/SideInfo'

export default function SkillsPage() {
    return (<>
    <Skills />
    </>)
}

SkillsPage.getLayout = function getLayout(page) {
    return (
    <Layout>
        <div className='d-flex'>
          <SideInfo />
          <div className='w-100'>
            <Header />
            {page}
          </div>
        </div>
    </Layout>
    )
  }