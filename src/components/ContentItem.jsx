import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';

const ContentItem = ({ imagePath, alt, name, text }) => {

    const itemRef = useRef(null);


    const handleMouseMove = (event) => {
        const item = itemRef.current;
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;
        const deltaX = Math.max(-5, Math.min(5, (x - centerX) / 20));
        const deltaY = Math.max(-5, Math.min(5, (y - centerY) / 20));
        item.style.transform = `translate(${-deltaX}px, ${-deltaY}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        itemRef.current.style.transform = 'translate(0, 0)';
    };

  return (
    <div className="contentItem" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={itemRef}>
        
        <img src={imagePath} alt={alt} className='contentImage'/>
        
        <NavLink to={{pathname:`/work/${name.toLowerCase()}`, state: { name: name, text: text, imagePath: imagePath, alt: alt },}}><div className='contentDescWrapper'>
            <p className='contentDesc'>{name}</p>
        </div></NavLink>
       
      
       

        
    </div>
  )
}

export default ContentItem