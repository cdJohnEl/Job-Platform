import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import HeroImage from "../assets/job-portal-hero.png"
import John from "../assets/profile-pic11--.png"
import Tata from "../assets/tata-divine-pp.jpg"
import JobVideo from "../assets/job-platform-video_.mp4"

const LandingPage = () => {
  return (
    <>
      <div>
        {/* <!-- Navbar --> */}
        <nav class="relative container mx-auto p-6">
          {/* <!-- Flex container --> */}
          <div class="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div class="pt-2">
              <a
                class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                href="#hero"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10 text-white p-2 bg-jobBlue rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Job Portal</span>
              </a>
            </div>
            {/* <!-- Menu Items --> */}
            <div class="hidden space-x-6 md:flex">
              <a href="#hero" class="hover:text-darkGrayishBlue">
                Home
              </a>
              <a href="#features" class="hover:text-darkGrayishBlue">
                Features
              </a>
              <a href="#about" class="hover:text-darkGrayishBlue">
                About Us
              </a>
            </div>
            {/* <!-- Button --> */}
            <a
              href="/sign-up"
              class="hidden p-3 px-6 pt-2 text-white bg-jobBlue rounded-full baseline hover:bg-brightRedLight md:block"
            >
              Get Started
            </a>

            {/* <!-- Hamburger Icon --> */}
            <button
              id="menu-btn"
              class="block hamburger md:hidden focus:outline-none"
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div class="md:hidden">
            <div
              id="menu"
              class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <a href="#hero">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About Us</a>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* < />!-- Flex Container --> */}
        <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* < />!-- Left item --> */}
          <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Discover Your <span class="text-jobBlue">Dream Job</span>, Elevate
              Your Job Search Effortlessly!
            </h1>
            <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Discover your ideal job with ease on our platform, where we
              streamline the process, ensuring you stay aligned with your career
              ambitions.
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                href="/sign-up"
                class="p-3 px-6 pt-2 text-white bg-jobBlue rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* < />!-- Image --> */}
          <div class="md:w-1/2">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section id="features">
        {/* <!-- Flex container --> */}
        <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* <!-- What's Different --> */}
          <div class="flex flex-col space-y-12 md:w-1/2">
            <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
              Features
            </h2>
            <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Job Portal provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
            <video src={JobVideo} class="w-full max-w-4xl rounded-lg pr-8" controls> </video>
          </div>

          {/* <!-- Numbered List --> */}
          <div class="flex flex-col space-y-8 md:w-1/2">
            {/* <!-- List Item 1 --> */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- Heading --> */}
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-jobBlue">
                    01
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Smart Job Filtering
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Smart Job Filtering
                </h3>
                <p class="text-darkGrayishBlue">
                  Find the perfect job with our super-smart filters! Search by
                  location, salary, or experience level – it's like magic!
                </p>
              </div>
            </div>

            {/* <!-- List Item 2 --> */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- Heading --> */}
              <div class="rounded-l-full bg-jobBlueSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-jobBlue">
                    02
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Fresh Jobs, Fresh You
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Fresh Jobs, Fresh You
                </h3>
                <p class="text-darkGrayishBlue">
                  Stay ahead of the game with our real-time job listings.
                  Discover new opportunities as soon as they pop up!
                </p>
              </div>
            </div>
            {/* <!-- List Item 3 --> */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- Heading --> */}
              <div class="rounded-l-full bg-jobBlueSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-jobBlue">
                    03
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Simplified Application Process
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Simplified Application Process
                </h3>
                <p class="text-darkGrayishBlue">
                  Applying for jobs has never been easier! With our streamlined
                  application process, you can submit your application with just
                  a few clicks, saving you time and effort.
                </p>
              </div>
            </div>
            {/* <!-- List Item 4 --> */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* <!-- Heading --> */}
              <div class="rounded-l-full bg-jobBlueSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-jobBlue">
                    04
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Interactive User Dashboard
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Interactive User Dashboard
                </h3>
                <p class="text-darkGrayishBlue">
                  Keep track of your job applications, saved listings, and
                  interview invitations with our intuitive user dashboard. Stay
                  organized and stay ahead in your job search journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About us --> */}
      <section id="about">
        {/* <!-- Container to heading and team blocks --> */}
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* <!-- Heading --> */}
          <h2 class="text-4xl font-bold text-center">About the project</h2>
          <p class="w-full mx-auto mt-6 text-darkGrayishBlue mb-8">
            We started this project with a simple goal: to build something cool
            for our portfolio. After chatting and brainstorming, we settled on
            creating a job platform. You see, we realized that finding a job can
            be really tough sometimes. So, we wanted to make it easier. We
            wanted to create a place where people could find jobs without all
            the stress. We worked hard on this project, putting our hearts into
            every part of it. Even though we faced some challenges along the
            way, we didn't give up. We kept pushing forward because we really
            believed in what we were doing. And now, after months of work, we're
            excited to share our project with you. It's not just a portfolio
            piece anymore – it's something we're really proud of.
          </p>
          <hr />

          <h2 class="text-4xl font-bold text-center mt-8">Meet the Team</h2>

          <div class="flex flex-col items-center justify-center mt-24 md:flex-row md:space-x-6">
            {/* <!-- Team  member 1 --> */}
            <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={John} class="w-50 -mt-14" alt="" />
              <h5 class="text-lg font-bold mb-0">John Chimdike</h5>
              <p class="text-sm text-darkGrayishBlue mt-0">Frontend</p>
              <div class="flex justify-center space-x-4">
                {/* <!-- Link 1 --> */}
                <a href="https://github.com/cdJohnEl" target="_blank">
                  <FaGithub size={30} />
                </a>
                {/* <!-- Link 2 --> */}
                <a
                  href="https://www.linkedin.com/in/chimdikejohn/"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </a>
                {/* <!-- Link 3 --> */}
                <a href="https://twitter.com/cdJohnEl" target="_blank">
                  <FaTwitter size={30} />
                </a>
              </div>
            </div>
            {/* <!-- Team member 2 --> */}
            <div class="flex flex-col items-center mt-8 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={Tata} class="w-60 -mt-14" alt="" />
              <h5 class="text-lg font-bold mb-0">Tata Divine</h5>
              <p class="text-sm text-darkGrayishBlue mt-0">Backend</p>
              <div class="flex justify-center space-x-4">
                {/* <!-- Link 1 --> */}
                <a href="https://github.com/magnifiscence">
                  <FaGithub size={30} />
                </a>
                {/* <!-- Link 2 --> */}
                <a href="https://www.linkedin.com/in/tata-divine-a5aa16259">
                  <FaLinkedin size={30} />
                </a>
                {/* <!-- Link 3 --> */}
                <a href="https://twitter.com/TATADIVINE3">
                  <FaTwitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section id="cta" class="bg-jobBlue mt-5">
        {/* <!-- Flex Container --> */}
        <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* <!-- Heading --> */}
          <h2 class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Ready to find your dream job? Start your journey now!
          </h2>
          {/* <!-- Button --> */}
          <div>
            <a
              href="/sign-up"
              class="p-3 px-6 pt-2 text-jobBlue bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer class="text-gray-700 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <a
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-jobBlue rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Job Portal</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Job Portal
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
