import { Banner } from '../components/shared/Banner'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { SideInfo, SideInfoOffset } from '../components/shared/Badge'

export default function Resume() {
    return (<>
    <div>
        This is the resume page
    </div>
    </>)
}

Resume.getLayout = function getLayout(page) {
    return (
    <Layout>
        <div className='d-flex'>
          <SideInfo />
          <SideInfoOffset />
          <div className='w-100'>
            <Header />
            {page}
          </div>
        </div>
    </Layout>
    )
  }