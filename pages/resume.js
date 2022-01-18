import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { Badge, BadgeSpacing, BadgeHeading } from '../components/shared/Badge'

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
        <div className='d-flex' >
          <Badge />
          <BadgeSpacing />
          <BadgeHeading />
          <div className='w-100'>
            <Header type = "Resume" />
            {page}
          </div>
        </div>
    </Layout>
    )
  }