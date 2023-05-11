import '../styles/index.scss';
import type { AppProps } from 'next/app'
import MainLayout from '@/comps/layouts/MainLayout/MainLayout'

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component { ...pageProps } />
    </MainLayout>
  )
}

export default App;