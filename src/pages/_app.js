import 'reset-css/sass/_reset.scss';
import 'normalize.css/normalize.css';
import './../style/global.scss';
import Layout from "@/components/Layout/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;