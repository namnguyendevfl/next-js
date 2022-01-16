import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { SideInfo } from '../components/shared/SideInfo'

export default function QNAPage() {
    return (<>
    <div>
        This is the project page
    </div>
    </>)
}

QNAPage.getLayout = function getLayout(page) {
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