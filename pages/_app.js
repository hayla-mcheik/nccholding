import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import '../styles/styless.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
