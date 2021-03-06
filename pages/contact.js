import { Contact } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { Badge, BadgeSpacing } from '../components/shared/Badge'

export default function ContactPage() {
    return (<>
    <Contact />
    </>)
}

ContactPage.getLayout = function getLayout(page) {
    return (
    <Layout>
        <div className='d-flex'>
          <Badge />
          <BadgeSpacing />
          <div className='w-100'>
            <Header type = "Contact"/>
            {page}
          </div>
        </div>
    </Layout>
    )
  }