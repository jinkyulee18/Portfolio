import './about.scss'
import Profile from '../About/profile.png'
import Loaders from 'react-loaders'


const About = () => {
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1 className='about-page'>
                        About Me:
                    </h1>
                    <p className='bio-text'>
                            My name is John Lee and am currently 22 years old finishing up my Coding Bootcamp
                            as a Full-Stack Developer from CareerFoundry. Currently, I have multiple projects ranging from
                            Web Design to the implementation of authorizations server side. I have created projects using JavaScript,
                            HTML, CSS, SQL, and NoSQL, with the use of Git. I am an ambitious student that is determined to learn
                            with any task presented, and progress my journey to become an excellent Developer. 
                              
                        </p>
                </div>
                <div>
                    <img src= {Profile} alt='profile' className='profile'/>
                </div>
            </div>
            <Loaders type= 'line-scale' />
        </>
    )
}

export default About