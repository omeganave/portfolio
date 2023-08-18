import React from 'react'
import ContentItem from '../components/ContentItem';

const Works = () => {

    const imagePath = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
    
  return (
    <div className='content'>
        <ContentItem imagePath={imagePath} alt="Coding 1" name="Test text 1"/>
        <ContentItem imagePath={imagePath} alt="Coding 2" name="Test text 2"/>
        <ContentItem imagePath={imagePath} alt="Coding 3" name="Test text 3"/>
        <ContentItem imagePath={imagePath} alt="Coding 4" name="Test text 4"/>
        <ContentItem imagePath={imagePath} alt="Coding 5" name="Test text 5"/>
        <ContentItem imagePath={imagePath} alt="Coding 6" name="Test text 6"/>
    </div>
  )
}

export default Works