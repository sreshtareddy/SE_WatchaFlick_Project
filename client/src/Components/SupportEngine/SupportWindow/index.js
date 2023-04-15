import React from 'react'

import {styles} from '../styles'

const SupportWindow = props => {
    return (
        <div
          className="transition-3"
          style={{
            ...styles.supportWindow,
            ...{ opacity: props.visible ? "1" : "0" },
          }}
        >
          {props.visible && <p>Hello! I'm the support window.</p>}
        </div>
      );
}
export default SupportWindow