/* eslint-disable jsx-a11y/anchor-has-content */
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div>
                    <div className="dsmovie-nav-content">
                        <h1>DSMovie</h1>
                        <a href="https://github.com/Dilermando10"></a>
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link"> target="_blank" rel="Dilermando"</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>);

}
export default Navbar;