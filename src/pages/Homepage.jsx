import femaleDoctor from "../assets/female-doctor.png";

function Homepage() {
    return (
        <div className="home">

            <section className="hero">
                <div className="hero-container">
                    <div className="hero-left">
                        <span className="hero-tagline">WE ONLY GIVE</span>
                        <h1 className="hero-title">
                            BEST CARE TO <br/>
                            <span className="cyan-text">YOUR PILES</span>
                        </h1>
                        <div className="hero-buttons">
                            <button className="btn-readmore">Read More</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={femaleDoctor} alt="Specialist Doctor" className="hero-img" />
                    </div>
                </div>
            </section>


            {/* ABOUT */}
            <section className="about">
                <h2>About Tamanna Clinic</h2>
                <p>
                    <b > Tamanna Clinic & Laser Piles Centre</b> was founded by <b>Dr. Tamanna Sharma </b>
                    to provide advanced and patient-focused care for anorectal disorders.
                    We offer modern laser treatments that ensure minimal pain and faster recovery.
                </p>
            </section>

            {/* SPECIALITIES */}
            <section className="services">
                <h2>Our Specialities</h2>

                <div className="card-container">
                    <div className="card">
                        <h3>Laser Piles</h3>
                        <p>Advanced treatment with minimal pain and quick healing.</p>
                    </div>

                    <div className="card">
                        <h3>Fissure Treatment</h3>
                        <p>Fast recovery for chronic and acute fissures.</p>
                    </div>

                    <div className="card">
                        <h3>Fistula Treatment</h3>
                        <p>Minimally invasive laser procedure.</p>
                    </div>

                    <div className="card">
                        <h3>Pilonidal Sinus</h3>
                        <p>Safe and long-term relief treatment.</p>
                    </div>

                    <div className="card">
                        <h3>Constipation</h3>
                        <p>Expert consultation for digestive issues.</p>
                    </div>

                    <div className="card">
                        <h3>Consultation</h3>
                        <p>Complete diagnosis and treatment.</p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="why">
                <h2>Why Choose Us</h2>

                <div className="why-list">
                    <div>✔ Advanced Laser Technology</div>
                    <div>✔ Highly Experienced Doctors</div>
                    <div>✔ Minimal Pain</div>
                    <div>✔ Same-Day Discharge</div>
                    <div>✔ Affordable Treatment</div>
                    <div>✔ Complete Privacy</div>
                    <div>✔ Personalized Care</div>
                    <div>✔ Modern Infrastructure</div>
                </div>
            </section>

        </div>
    );
}

export default Homepage;