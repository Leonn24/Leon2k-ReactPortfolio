import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <a href="https://github.com/Leonn24">
                <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/aversonn">
                <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/LeonHoti">
                <LinkedInIcon />
                </a>
            </div>
            <p>&copy; 2024 Leon Hoti</p>
        </div>
    )
}

export default Footer