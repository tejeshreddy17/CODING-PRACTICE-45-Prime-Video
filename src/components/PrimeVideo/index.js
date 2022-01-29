// Write your code here

import {SlidingContainer, AppBackground, WebsiteImage} from './styledComponents'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <AppBackground>
      <WebsiteImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <SlidingContainer>
        <MoviesSlider moviesList={moviesList} />
      </SlidingContainer>
    </AppBackground>
  )
}

export default PrimeVideo
