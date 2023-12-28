import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import '../styles/stories.scss'
import Story from './Story'
import image from '../images/profile.jpeg';

const Stories = ({Username}) => {
  return (
    <div className='stories'>
       <Story Username={Username} image={image}/>
        <HorizontalScroll className='scroll' reverseScroll={true}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </HorizontalScroll>
    </div>
  )
}

export default Stories