import { QnAs } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Layout } from '../components/shared/Layout'
import { Badge, BadgeSpacing, BadgeHeading } from '../components/shared/Badge'

export default function QNAsPage() {
    return (<>
    <div>
        <QnAs />
    </div>
    </>)
}

QNAsPage.getLayout = function getLayout(page) {
    return (
    <Layout type = "qna">
        <div className='d-flex' >
          <Badge />
          <BadgeSpacing />
          <BadgeHeading />
          <div className='w-100'>
            <Header type = {`Q&A`}/>
            {page}
          </div>
        </div>
    </Layout>
    )
  }