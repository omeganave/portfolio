import React from 'react'

const SocialButton = ({ link, icon, classes }) => {
  return (
    <div>
        <a href={link} target='_blank' rel='noreferrer' className={classes}>{icon}</a>
    </div>
  )
}

export default SocialButton