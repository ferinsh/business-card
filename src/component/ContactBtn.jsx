import mailLogo from "../assets/mail.png"
import githubLogo from "../assets/github_logo.png"

export default function ContactBtn(prop){
    const logo = prop.nameBtn === "Email"? mailLogo:githubLogo
    
    return (
        <button id={prop.id}>
            <img src={logo}></img>
            {prop.nameBtn}
        </button>
    )
}