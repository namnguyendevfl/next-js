import { Contact } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { SideInfo, SideInfoOffset  } from '../components/shared/Badge'

export default function ContactPage() {
    return (<>
    <Contact />
    </>)
}

ContactPage.getLayout = function getLayout(page) {
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