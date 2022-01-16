import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { SideInfo } from '../components/shared/SideInfo'
import { Education } from '../components/per-page'

export default function EducationPage() {
    return (<>
        <Education />
    </>)
}

EducationPage.getLayout = function getLayout(page) {
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