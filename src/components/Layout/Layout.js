import Head from 'next/head';
const Layout = ({children}) => (
  <>
    <Head>
      <title>Relocate</title>
      <link rel="shortcut icon" href='/favicon.ico' />
    </Head>
    {children}
  </>

);

export default Layout;