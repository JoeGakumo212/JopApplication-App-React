import { Fragment } from 'react'
import '../styles/globals.css'
import Header from '../componets/header';



function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default App;