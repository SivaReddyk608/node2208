import * as React from "react";
import "./styles/Footer.css"

class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer">
                <h3> © Copyright MSCI 2014. All rights reserved</h3>
                <div className="login-footer-link" />
                <a href="https://www.msci.com/legals" target="_blank">
                    Legal
                </a>
                |
                <a href="https://www.msci.com/privacy-pledge" target="_blank"/>
            <span className="login-footer-link">
              <a href="https://www.msci.com/cookie-policy" target="_blank">
                Cookies
              </a>
            </span>
                    |
                    <span className="login-footer-link">
              <a href="https://www.msci.com/contact-us" target="_blank">
                Contact Us
              </a>
            </span>
                    | Privacy Notice
                
            </div>
        );
    }
}
export default Footer;
