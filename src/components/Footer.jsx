import { Link, useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate(); // 👈 ADD

    const handleNav = (path) => {
        window.scrollTo(0, 0); // 👈 instant scroll
        navigate(path);        // 👈 then navigate
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-left">
                    <h2 className="logo">TAMANNA CLINIC</h2>

                    <p><b>Business Hours:</b></p>
                    <p>Morning: 9 AM – 1 PM</p>
                    <p>Evening: 5 PM – 9 PM</p>

                    <p className="mt"><b>Phone number:</b></p>
                    <p className="click"> +91 7058430179 </p>

                    <p className="mt"><b>Email:</b></p>
                    <p className="click"> tamannapilesclinic@gmail.com</p>

                    <p className="mt"><b>Address:</b></p>
                    <p className="click">
                        Main Road, Sindhi Camp,<br />
                        Near Gurunanak School, Akola
                    </p>
                </div>

                <div className="footer-links">

                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li onClick={() => handleNav("/about")} style={{cursor:"pointer"}}>About</li>
                            <li onClick={() => handleNav("/reviews")} style={{cursor:"pointer"}}>Reviews</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li onClick={() => handleNav("/laserTreatment")} style={{cursor:"pointer"}}>Laser Treatment</li>
                            <li onClick={() => handleNav("/piles")} style={{cursor:"pointer"}}>Piles</li>
                            <li onClick={() => handleNav("/fissure")} style={{cursor:"pointer"}}>Fissure</li>
                            <li onClick={() => handleNav("/fistula")} style={{cursor:"pointer"}}>Fistula</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li onClick={() => handleNav("/faq")} style={{cursor:"pointer"}}>FAQ</li>
                            <li onClick={() => handleNav("/contact")} style={{cursor:"pointer"}}>Contact</li>
                            <li onClick={() => handleNav("/helpdesk")} style={{cursor:"pointer"}}>Helpdesk</li>
                            <li onClick={() => handleNav("/feedback")} style={{cursor:"pointer"}}>Feedback</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    Powered by{" "}
                    <a href="https://ashtrinox.in" target="_blank" rel="noopener noreferrer">
                        ashtrinox.in
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;