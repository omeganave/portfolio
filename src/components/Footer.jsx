import React from 'react'
import { IoLogoGithub, IoLogoDiscord, IoLogoReddit, IoLogoInstagram } from 'react-icons/io5'
import { BiLogoAws } from 'react-icons/bi'
import SocialButton from './SocialButton'

const Footer = ({updDate}) => {
  return (
    <footer>
        <div>Last updated: {updDate}</div>
        <SocialButton link="https://github.com/omeganave" icon={<IoLogoGithub/>} classes="socialButton"/>
        <SocialButton link="https://www.discordapp.com/users/268119897744211978" icon={<IoLogoDiscord/>} classes="socialButton"/>
        <SocialButton link="https://www.reddit.com/user/OmegaNave" icon={<IoLogoReddit/>} classes="socialButton"/>
        <SocialButton link="https://www.instagram.com/omeganave/?igshid=MmIzYWVlNDQ5Yg%3D%3D" icon={<IoLogoInstagram/>} classes="socialButton"/>
        <SocialButton link="https://www.credly.com/badges/8c651c79-3dc1-4cd5-98dc-e638bcf95c7e/public_url" icon={<BiLogoAws/>} classes="socialButton"/>
    </footer>
  )
}

export default Footer