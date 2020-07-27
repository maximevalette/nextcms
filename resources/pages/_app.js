import { withApollo } from '../utils/apollo';
import '../styles/simple-grid.css'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
};

export default withApollo({ ssr: true })(App);