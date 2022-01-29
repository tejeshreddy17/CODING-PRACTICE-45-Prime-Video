// Write your code here
import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {id, thumbnailUrl, videoUrl} = eachMovie
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="popup-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="pop-up-component">
              <button
                data-testid="closeButton"
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
