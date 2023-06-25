import Image from "next/image";
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"
const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.png' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1 className="h1-text">Hey, I'm Almas Ansari 👋</h1>
        <p>
          I'm a software developer based in Pakistan. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
           <BsTwitter />
          </a>
          <a
            href="https://github.com/AlmasHanif"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
           <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/almas-hanif/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;