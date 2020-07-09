import { withApollo } from '../utils/apollo';
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
};

export default withApollo({ ssr: true })(App);