import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Router> */}
      <Header />
      <div className="banner-area text-combo top-pad-90 rectangular-shape bg-light-gradient">
        <div className="item">
          <div className="box-table">
            <div className="box-cell">
              <div className="container">
                <div className="row">
                  <div className="double-items">
                    <div className="col-lg-6 info">
                      <h2 className="wow fadeInDown" data-wow-duration="1s">
                        <span>Applying Data Science</span> And Techniques with
                        Systems
                      </h2>
                      <p className="wow fadeInLeft" data-wow-duration="1.5s">
                        Contented continued any happiness instantly objection
                        yet her allowance. Use correct day new brought tedious.
                        Kept easy or sons my it done.
                      </p>
                      <a
                        className="btn circle btn-md btn-gradient wow fadeInUp"
                        data-wow-duration="1.8s"
                        href="#"
                      >
                        Get Started <i className="fas fa-plus"></i>
                      </a>
                    </div>
                    <div
                      className="col-lg-6 thumb wow fadeInRight"
                      data-wow-duration="1s"
                    >
                      <img src="assets/img/illustration/1.png" alt="Thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="features"
        className="our-features-area wavesshape-bottom carousel-shadow default-padding-top"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="thumb wow fadeInRight">
                <img src="assets/img/illustration/2.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-7 info">
              <div className="feature-items feature-carousel owl-carousel owl-theme">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-target"></i>
                  </div>
                  <h3>Traget your audience</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by
                    interested boisterous. Linen mrs seems men table. Jennings
                    dashwood to quitting marriage bachelor in. On as conviction
                    in of appearance apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Get Started
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-competition"></i>
                  </div>
                  <h3>Analysis competitors</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by
                    interested boisterous. Linen mrs seems men table. Jennings
                    dashwood to quitting marriage bachelor in. On as conviction
                    in of appearance apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Get Started
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                  <h3>Analysis big Data</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by
                    interested boisterous. Linen mrs seems men table. Jennings
                    dashwood to quitting marriage bachelor in. On as conviction
                    in of appearance apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="waveshape">
          <img src="assets/img/shape/6.svg" alt="Shape" />
        </div>
      </div>

      <div
        id="about"
        className="about-area default-padding-top text-center bg-gray"
      >
        <div className="container">
          <div className="about-items">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="heading">
                  <h4>About Us</h4>
                  <h2>
                    We provide big data analytics Techniques & realtime data
                    Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content">
                  <p>
                    Whole front do of plate heard oh ought. His defective nor
                    convinced residence own. Connection has put impossible own
                    apartments boisterous. At jointure ladyship an insisted so
                    humanity he. Friendly bachelor entrance to on by. Extremity
                    as if breakfast agreement. Off now mistress provided out
                    horrible opinions. Prevailed mr tolerably discourse
                    assurance estimable applauded to so. Him everything
                    melancholy uncommonly but solicitude inhabiting projection.
                  </p>
                </div>
                <div className="center-tabs">
                  <ul id="tabs" className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        href="#"
                        data-target="#tab1"
                        data-toggle="tab"
                        className="active nav-link"
                      >
                        Research & Solution
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        data-target="#tab2"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        Design & Strategy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        data-target="#tab3"
                        data-toggle="tab"
                        className="nav-link"
                      >
                        Generate Report
                      </a>
                    </li>
                  </ul>
                  <div
                    id="tabsContent"
                    className="tab-content wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div id="tab1" className="tab-pane fade active show">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>
                            Data Visualization Research technique & Solution
                          </h3>
                          <p>
                            Delightful unreserved impossible few estimating men
                            favourable see entreaties. She propriety immediate
                            was improving. He or entrance humoured likewise
                            moderate. Much nor game son say feel. Fat make met
                            can must form into gate. Me we offending prevailed
                            discovery.
                          </p>
                          <a className="btn-simple" href="#">
                            <i className="fas fa-angle-right"></i> Read More
                          </a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img
                            src="assets/img/illustration/7.png"
                            alt="Thumb"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="tab2" className="tab-pane fade">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>Collect Ongoing Big Data Design And Strategy</h3>
                          <p>
                            Delightful unreserved impossible few estimating men
                            favourable see entreaties. She propriety immediate
                            was improving. He or entrance humoured likewise
                            moderate. Much nor game son say feel. Fat make met
                            can must form into gate. Me we offending prevailed
                            discovery.
                          </p>
                          <a className="btn-simple" href="#">
                            <i className="fas fa-angle-right"></i> Read More
                          </a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img
                            src="assets/img/illustration/7.png"
                            alt="Thumb"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="tab3" className="tab-pane fade">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>Final Report Generate</h3>
                          <p>
                            Delightful unreserved impossible few estimating men
                            favourable see entreaties. She propriety immediate
                            was improving. He or entrance humoured likewise
                            moderate. Much nor game son say feel. Fat make met
                            can must form into gate. Me we offending prevailed
                            discovery.
                          </p>
                          <a className="btn-simple" href="#">
                            <i className="fas fa-angle-right"></i> Read More
                          </a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img
                            src="assets/img/illustration/7.png"
                            alt="Thumb"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-factor-area bg-gray default-padding">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(../assets/img/map.svg)" }}
        ></div>
        <div className="container">
          <div className="client-items text-center">
            <div className="row">
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="687" data-speed="5000">
                    687
                  </div>
                  <span className="medium">Projects Executed</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="2348" data-speed="5000">
                    2348
                  </div>
                  <span className="medium">Data Analytics</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="450" data-speed="5000">
                    450
                  </div>
                  <span className="medium">Data Management</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="1200" data-speed="5000">
                    1200
                  </div>
                  <span className="medium">Satisfied Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="services-area left-border default-padding bottom-less"
      >
        <div className="shape-fixed animation-rotation">
          <img src="assets/img/round-shappe.png" alt="Thumb" />
        </div>

        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5">
                <h2>
                  We offer a wide range of services and provide realtime data
                  Solutions
                </h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p>
                  Everything melancholy uncommonly but solicitude inhabiting
                  projection off. Connection stimulated estimating excellence an
                  to impression.
                </p>
                <a
                  className="btn circle btn-md btn-gradient wow fadeInUp"
                  href="#"
                >
                  View All <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="services-items">
            <div className="row">
              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src="assets/img/icon/1.png" alt="Thumb" />
                  <h4>Big Data</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention
                    diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src="assets/img/icon/2.png" alt="Thumb" />
                  <h4>Data Analytics</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention
                    diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src="assets/img/icon/3.png" alt="Thumb" />
                  <h4>Business Intelligence</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention
                    diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="process" className="work-process-area bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4>Work Process</h4>
                <h2>How We Work</h2>
              </div>
            </div>
          </div>
          <div className="works-process-items text-center">
            <div className="row">
              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-problem"></i>
                    <span>01</span>
                  </div>
                  <div className="info">
                    <h4>Frame the Problem</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted
                      be of justice sending. On so they as with room cold
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-data-collection"></i>
                    <span>02</span>
                  </div>
                  <div className="info">
                    <h4>Collect Data</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted
                      be of justice sending. On so they as with room cold
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-cloud-data"></i>
                    <span>03</span>
                  </div>
                  <div className="info">
                    <h4>Process Data</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted
                      be of justice sending. On so they as with room cold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="skill"
        className="skill-area left-border overflow-hidden circular-shape default-padding"
      >
        <div className="container">
          <div className="skill-items">
            <div className="row">
              <div className="col-lg-6 info">
                <h2>Our Skill</h2>
                <h3>
                  We are master in data science <br /> & big data analysis
                </h3>
                <p>
                  Attention sex questions applauded how happiness. To travelling
                  occasional at oh sympathize prosperous. His merit end means
                  widow songs linen known. Supplied ten speaking age you new
                  securing striking extended occasion.
                </p>
                <div className="skill-items">
                  <div className="progress-box">
                    <h5>
                      Data Anaylsis <span className="float-right">88%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="88"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <h5>
                      Social Assistant <span className="float-right">95%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="95"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <h5>
                      AI Solutions <span className="float-right">70%</span>
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="70"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 thumb">
                <div className="image-box">
                  <img
                    className="wow fadeInRight"
                    data-wow-delay="0.6s"
                    src="assets/img/app/3.jpg"
                    alt="Thumb"
                  />
                  <img
                    className="wow fadeInLeft"
                    data-wow-delay="0.8s"
                    src="assets/img/app/1.jpg"
                    alt="Thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-area default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4>Testimonials</h4>
                <h2>What people say</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-items text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div
                  className="carousel slide"
                  data-ride="carousel"
                  id="testimonial-carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do
                        invitation. Dried quick round it or order. Add past see
                        west felt did any. Say out noise you taste merry plate
                        you share. My resolve arrived is we chamber be removal.
                      </p>
                      <h4>Junl Sarukh</h4>
                      <span>CEO of Softing</span>
                    </div>
                    <div className="carousel-item">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do
                        invitation. Dried quick round it or order. Add past see
                        west felt did any. Say out noise you taste merry plate
                        you share. My resolve arrived is we chamber be removal.
                      </p>
                      <h4>Anil Spia</h4>
                      <span>Director of Softing</span>
                    </div>
                    <div className="carousel-item">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do
                        invitation. Dried quick round it or order. Add past see
                        west felt did any. Say out noise you taste merry plate
                        you share. My resolve arrived is we chamber be removal.
                      </p>
                      <h4>Paul Munni</h4>
                      <span>Developer of Softing</span>
                    </div>
                  </div>

                  <ol className="carousel-indicators">
                    <li
                      data-target="#testimonial-carousel"
                      data-slide-to="0"
                      className="active"
                    >
                      <img src="assets/img/team/1.jpg" alt="Thumb" />
                    </li>
                    <li data-target="#testimonial-carousel" data-slide-to="1">
                      <img src="assets/img/team/2.jpg" alt="Thumb" />
                    </li>
                    <li data-target="#testimonial-carousel" data-slide-to="2">
                      <img src="assets/img/team/3.jpg" alt="Thumb" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="blog"
        className="blog-area bg-gray left-border default-padding bottom-less"
      >
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5">
                <h2>Stay Update with Anada from latest & popular News</h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p>
                  Everything melancholy uncommonly but solicitude inhabiting
                  projection off. Connection stimulated estimating excellence an
                  to impression.
                </p>
                <a
                  className="btn circle btn-md btn-gradient wow fadeInUp"
                  href="#"
                >
                  View All <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-items content-less">
            <div className="row">
              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/blog/1.jpg" alt="Thumb" />
                      <div className="date">
                        18 Jul <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Process</a>
                        </li>
                        <li>
                          <a href="#">Store</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">
                        Analysis rendered entir Highly indeed to garden
                      </a>
                    </h4>
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/blog/2.jpg" alt="Thumb" />
                      <div className="date">
                        05 Aug <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Data</a>
                        </li>
                        <li>
                          <a href="#">Analysis</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">Lasted am so before on esteem vanity oh. </a>
                    </h4>
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src="assets/img/blog/3.jpg" alt="Thumb" />
                      <div className="date">
                        27 Dec <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Atrificial</a>
                        </li>
                        <li>
                          <a href="#">Data</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">Repeated of endeavor mr position kindness.</a>
                    </h4>
                    <a className="btn-simple" href="#">
                      <i className="fas fa-angle-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-area default-padding">
        <div className="container">
          <div className="contact-items">
            <div className="row">
              <div className="col-lg-4 left-item">
                <div className="info-items">
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <div className="info">
                      <h5>Location</h5>
                      <p>22 Baker Street, London, United Kingdom, W1U 3BW</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="info">
                      <h5>Make a Call</h5>
                      <p>+44-20-7328-4499</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-envelope-open"></i>
                    </div>
                    <div className="info">
                      <h5>Send a Mail</h5>
                      <p>info@yourdomain.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 right-item">
                <h2>We’d love to hear from you anytime</h2>
                <form
                  action="https://validthemes.online/themeforest/anada/assets/mail/contact.php"
                  method="POST"
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          type="text"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          type="text"
                        />
                        <span className="alert-error"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Tell Us About Project *"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="submit">
                        Send Message <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
