import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Header() {
  return (
    <header id="home">
      <div className="row">
        <div className="navbar navbar-default navbar fixed-light w-100">
          <ul
            class="nav  navbar-right w-100 justify-content-center align-items-center space-x-2"
            data-in="fadeInDown"
            data-out="fadeOutUp"
          >
            <img
              src="../assets/img/logo.png"
              class="logo default mr-3"
              alt="Logo"
            />
            <li>
              <a class="smooth-menu" href="#features">
                Features
              </a>
            </li>
            <li>
              <a class="smooth-menu" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="smooth-menu" href="#services">
                Services
              </a>
            </li>
            <li>
              <a class="smooth-menu" href="#process">
                process
              </a>
            </li>
            <li>
              <a class="smooth-menu" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a class="smooth-menu" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <nav class="navbar navbar-default navbar-fixed-light attr-border navbar-fixed dark no-background bootsnav">
        <div class="container">
          <div class="row">
            <div class="top-search">
              <div class="input-group">
                <form action="#">
                  <input
                    type="text"
                    name="text"
                    class="form-control"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <i class="ti-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="attr-nav">
            <ul>
              <li class="search">
                <a href="#">
                  <i class="ti-search"></i>
                </a>
              </li>
              <li class="side-menu">
                <a href="#">
                  <i class="ti-menu-alt"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index-2.html">
              <img
                src="assets/img/logo-light.png"
                class="logo default"
                alt="Logo"
              />
              <img
                src="assets/img/logo.png"
                class="logo logo-responsive"
                alt="Logo"
              />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-menu"></div>
        </div>
        <div class="side">
          <a href="#" class="close-side">
            <i class="ti-close"></i>
          </a>
          <div class="widget">
            <h4 class="title">Contact Info</h4>
            <ul class="contact">
              <li>
                <div class="icon">
                  <i class="flaticon-email"></i>
                </div>
                <div class="info">
                  <span>Email</span> Info@gmail.com
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="flaticon-call-1"></i>
                </div>
                <div class="info">
                  <span>Phone</span> +123 456 7890
                </div>
              </li>
              <li>
                <div class="icon">
                  <i class="flaticon-countdown"></i>
                </div>
                <div class="info">
                  <span>Office Hours</span> Sat - Wed : 8:00 - 4:00
                </div>
              </li>
            </ul>
          </div>
          <div class="widget">
            <h4 class="title">Additional Links</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div class="widget social">
            <h4 class="title">Connect With Us</h4>
            <ul class="link">
              <li class="facebook">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="twitter">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="pinterest">
                <a href="#">
                  <i class="fab fa-pinterest"></i>
                </a>
              </li>
              <li class="dribbble">
                <a href="#">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
}

export default Header;
