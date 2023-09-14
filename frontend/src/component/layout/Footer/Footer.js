import React  from "react";
import "./Footer.css"
const Footer = () =>{
    return(
        <footer id="footer">
            <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App For Android and IOS mobile phone</p>
            </div>

            <div className="MidFooter">
            <h1>PurunMool</h1>
            <p>High Quality is our first pripority</p>  
            <p>Copyrights 2021 &copy; PurunMoolIndia</p>  
                
            </div>

            <div className="RightFooter">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/purunmool/">Instagram</a>
            <a href="https://www.instagram.com/purunmool/">Youtube</a>
            <a href="https://www.instagram.com/purunmool/">Facebook</a>


            </div>
        </footer>
    )
}

export default Footer;