import './reset.css'

function MyApp({ Component, pageProps }) {
    return (
      <div className="body-reset">
        <Component {...pageProps} />
      </div>
    );
  }
  
export default MyApp;