import { About } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { Badge, BadgeSpacing } from '../components/shared/Badge'
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
    <Layout>
      <div className='d-flex' >
        <Badge />
        <BadgeSpacing />
        <div className='w-100'>
          <Header />
          <div >
            {page}
          </div>
        </div>
      </div>
    </Layout>
  )
}