import Header from "../components/Header";
import Footer from "../components/Footer";
import landing from "../assets/landing14.png";
// import silver from "../assets/silver.png";
import about from "../assets/about6.jpg";
import MostafaAraby from "../assets/MostafaAraby.jpg";
import hossamAlzayat from "../assets/HossamAlzayat.jpg";

const Home = () => {
  return (
    <div>
      <div className="landing" style={{ backgroundImage: `url('${landing}')` }}>
        <Header />
        <div className="container land">
          <div className="text">
            <h1>
              Welcome to
              <br />
              <span>CFO FACTORY</span>{" "}
            </h1>
            <p>
              {" "}
              A leading training academy that delivers hands-on and best
              industry practices in accounting and finance courses. Supports
              finance community through providing Online and Onsite Courses.
            </p>
            <button className="btn primary-btn">GET STARTED</button>
          </div>
          {/* <div className="silver glow-effect">
            <img srcSet={silver} alt=".." />
            <span className="lightning"></span>
          </div> */}
        </div>
      </div>
      <a href="#about" className="arrow">
        <i
          class="fas fa-angle-double-down fa-2x"
          style={{ color: "#e9ae33" }}
        ></i>
      </a>{" "}
      <section className="about" id="about">
        <div className="container">
          <div className="image">
            <img src={about} alt="" />
          </div>
          <div className="text col-4">
            <div className="heading">
              <p> About Us</p>
              <h2>CFO FACTORY</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, iure cupiditate. Eaque numquam sit consequatur dolorem
              dolor cupiditate assumenda commodi, totam, officiis id nihil illum
              enim architecto, provident a amet?
            </p>
            <button className="btn primary-btn">Learn More</button>
          </div>
        </div>
      </section>
      <section className="our-skills">
        <div className="main-heading">
          <h1>WHY CHOOSE US ?</h1>
        </div>
        <div className="container">
          <div className="skills">
            <div className="skill">
              <i
                class="fa-solid fa-business-time fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <span></span>
                <h3> skill one</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
            <div className="skill">
              <i
                class="fa-solid fa-business-time  fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <h3> skill two</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
            <div className="skill">
              <i
                class="fa-solid fa-business-time fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <h3> skill third</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
            <div className="skill">
              <i
                class="fa-solid fa-business-time fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <h3> skill fourth</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
            <div className="skill">
              <i
                class="fa-solid fa-business-time fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <h3> skill fifth</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
            <div className="skill">
              <i
                class="fa-solid fa-business-time fa-2xl"
                style={{ color: "#e9ae33" }}
              >
                <span></span>
              </i>
              <div className="text">
                <h3> skill six</h3>
                <p>
                  Experts with more than 12 years of practical experience in big
                  multi-national compaines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="main-heading">
          <h1>OUR TEAM</h1>
        </div>
        <div className="container">
          <div className="member">
            <div className="data">
              <img src={MostafaAraby} alt="Mostafa araby" />
              <div className="social">
                <a href="google.com">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="google.com">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Mostafa Araby, CMA</h3>
              <p>
                Financial Planning & Analysis Manager at Savola Foods Company |
                IMA Regional Advisory Committee Member.
              </p>
            </div>
          </div>
          <div className="member">
            <div className="data">
              <img src={hossamAlzayat} alt="Hossam Alzayat" />
              <div className="social">
                <a href="#google.com">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#google.com">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Hossam Alzayat, CMA</h3>
              <p>
                Financial Planning & Analysis Manager | Decision Support |
                Finance Business Partner | ex- GM, Coca Cola | IMA Regional
                Advisory Committe | IMA Global Leadership Academy  ex. IMA
                Board Member | Top Linkedin Voice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
