import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Logo-JL.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = 'logo'/>
        </Link>
        <nav>
            <NavLink exact ='true' activeclassname = 'active' to= '/'>
                <FontAwesomeIcon icon = {faHome} color = '#4d4d4e'/>
            </NavLink>
            <NavLink exact ='true' activeclassname = 'active' className = 'about-link' to= '/about'>
                <FontAwesomeIcon icon = {faUser} color = '#4d4d4e'/>
            </NavLink>
            {/* <NavLink exact ='true' activeclassname = 'active' className= 'projects' to= '/projects'>
                <FontAwesomeIcon icon = {faRProject} color = '#4d4d4e'/>
            </NavLink> */}
            <NavLink exact ='true' activeclassname = 'active' className= 'contact-link' to= '/contact'>
                <FontAwesomeIcon icon = {faEnvelope} color = '#4d4d4e'/>
            </NavLink>
            
        </nav>

        <ul>
            <li>
                <a target = '_blank' rel = 'noreferrer' href='https://www.linkedin.com/in/john-lee-46ab9619b/'>
                    <FontAwesomeIcon icon = { faLinkedin } color = '#4d4d4e'  />
                </a>
            </li>
            <li>
                <a href='https://github.com/jinkyulee18' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
        </ul>
    </div>
)

export default Sidebar