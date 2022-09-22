import Nav from "../Nav";
import Footer from "../Footer";
const Layout = (props) => {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer />
        </div>
    );
};
export default Layout;
