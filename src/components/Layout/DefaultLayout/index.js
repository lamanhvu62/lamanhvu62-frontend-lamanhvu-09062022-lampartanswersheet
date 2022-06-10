import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="main">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
