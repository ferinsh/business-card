import "./MainContent.css"
import Button from './ContactBtn.jsx'
import logoTwitter from "../assets/card_footer/twitter.png"
import logoFacebook from "../assets/card_footer/facebook.png"
import logoGithub from "../assets/card_footer/github_logo.png"
import logoInsta from "../assets/card_footer/instagram.png"

export default function MainContent(clsName) {


    return(
        <>
            <div className={clsName.className}>
                <div id="business-card">
                    <img src="https://loremflickr.com/320/240"></img>
                    <div id="card-content">
                        <div id="card-details">
                            <h1>Galaxy Vinu</h1>
                            <h2>Front end developer</h2>
                        </div>
                        <div id="card-contact">
                            <Button id="email" nameBtn="Email"/>
                            <Button id="github" nameBtn="Github"/>
                        </div>
                        <div id="card-about">
                            <h1>About</h1>
                            <p>I’m a frontend developer passionate about simplifying processes and automating daily tasks. I prioritize security and best practices in my work and am constantly seeking new opportunities to learn and grow.</p>
                            <p>Additionally, I actively seek opportunities to collaborate with others, contribute to open-source projects, and engage in continuous learning to improve my craft. My goal is to create user-friendly, high-performance web applications while fostering a culture of best practices and innovation.</p>
                        </div>
                        <div id="card-interests"></div>
                    </div>
                    
                    <footer>
                        <a href="https://twitter.com" target="blank"><img src={logoTwitter}></img></a>
                        <a href="https://facebook.com" target="blank"><img src={logoFacebook}></img></a>
                        <a href="https://instagram.com" target="blank"><img src={logoInsta}></img></a>
                        <a href="https://github.com/ferinsh/" target="blank"><img src={logoGithub}></img></a>
                    </footer>
                </div>
            </div>
        </>
    )
}
