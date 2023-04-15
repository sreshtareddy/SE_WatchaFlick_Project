import React, {useState} from 'react'

import {styles} from './styles'

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);
  const { isVisible } = props;

  return (
      <div style={{position:"fixed",bottom:"24px", right: "24px"}}>
          <div 
              className="transition-3"
              style={{
                  ...styles.avatarHello,
                  ...{opacity: hovered || isVisible ? '1':'0'}
              }}>Hey it's WISE!! </div>

          <div 
              className="transition-3"
              onMouseEnter={()=> setHovered(true)}
              onMouseLeave={()=> setHovered(false)}
              onClick={() => props.onClick && props.onClick()}
              style={{
                  ...styles.chatWithMeButton,
                  ...{border: hovered ? '1px solid #f9f0ff':'4px solid #7a39e0'}
              }}
          >{console.log("clicked on avatar")}</div>
      </div>
  )
}


export default Avatar