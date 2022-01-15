import { About } from '../components/per-page'
import { Header } from '../components/shared/Header'
import { SideInfo } from '../components/shared/SideInfo'
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