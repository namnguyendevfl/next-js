import { About } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Badge, BadgeSpacing, BadgeHeading  } from '../components/shared/Badge'
import { Layout } from '../components/shared/Layout'

export default function Home() {
  return (
    <>
    <section>
      <About />
    </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout type = "About">
      <div className='d-flex' >
        <Badge />
        <BadgeSpacing />
        <BadgeHeading />
        <div className='w-100'>
          <Header type = "About"/>
          <div >
            {page}
          </div>
        </div>
      </div>
    </Layout>
  )
}