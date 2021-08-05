import '../styles/index.css'

/* CODE block from 
 * https://vpilip.com/next-js-page-loading-indicator-improve-ux-of-next-js-app/ 
 */
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
/* END Code Block */

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
