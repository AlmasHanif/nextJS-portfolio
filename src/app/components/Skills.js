import {SiHtml5, SiCss3, SiJavascript, SiReact, SiKubernetes} from 'react-icons/si'
import {FaNodeJs, FaLinux, FaDocker} from 'react-icons/fa'
const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
           <SiHtml5 />
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <SiCss3 />
            <p>CSS</p>
          </div>
          <div className="skill-card js">
           <SiJavascript />
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
           <SiReact />
            <p>React</p>
          </div>
          <div className="skill-card node">
            <FaNodeJs />
            <p>Node</p>
          </div>
          <div className="skill-card linux">
           <FaLinux />
            <p>Linux</p>
          </div>
          <div className="skill-card docker">
           <FaDocker />
            <p>Docker</p>
          </div>
          <div className="skill-card kuberenetes">
           <SiKubernetes />
            <p>Kubernetes</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;