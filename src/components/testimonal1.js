import React from 'react'

import PropTypes from 'prop-types'

import './testimonal1.css'

const Testimonal1 = (props) => {
  return (
    <div className="testimonal1-testimonal testimonal">
      <span className="testimonal1-text">{props.Quote}</span>
      <div className="testimonal1-author">
        <div className="testimonal1-avatar">
          <img
            alt={props.Avatar_alt}
            src={props.Avatar_src}
            className="testimonal1-image"
          />
        </div>
        <div className="testimonal1-user">
          <span className="testimonal1-name">{props.Name}</span>
          <span className="testimonal1-divider">—</span>
          <span className="testimonal1-from">{props.From}</span>
        </div>
      </div>
    </div>
  )
}

Testimonal1.defaultProps = {
  Quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
  Avatar_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  Name: 'Andy Smith',
  From: 'Vista Social',
  Avatar_alt: 'image',
}

Testimonal1.propTypes = {
  Quote: PropTypes.string,
  Avatar_src: PropTypes.string,
  Name: PropTypes.string,
  From: PropTypes.string,
  Avatar_alt: PropTypes.string,
}

export default Testimonal1
