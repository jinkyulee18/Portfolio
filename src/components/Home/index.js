import { faNodeJs, faCss3, faGitAlt, faHtml5, faJsSquare, faReact,} 
    from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loaders from 'react-loaders'
import './home.scss'
// import Gitimg from '../Home/github-mark.png'
// import Linkimg from '../Home/Linkedin-logo-icon-png.png'

const Home = () => {
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br /> My name is John Lee</h1>
                    <h2>A Full-Stack Developer</h2>
                </div>
            
            </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>

                    {/* <div className='social-link'>
                        
                            <a className = 'git-link' href='https://www.linkedin.com/in/john-lee-46ab9619b/' target= '_blank' rel = 'noreferrer' > 
                                <img src = {Gitimg} alt = 'github-img' height= '50px' width = '50px'  />
                            </a> 
                            <a className='link-link'  href='https://github.com/jinkyulee18' target= '_blank' rel = 'noreferrer'>
                                <img src = {Linkimg} alt = 'linkedin-img' height= '50px' width = '50px'/>
                            </a>
                        
                </div> */}
            <Loaders type= 'line-scale' />
        </>
    )
}

export default Home