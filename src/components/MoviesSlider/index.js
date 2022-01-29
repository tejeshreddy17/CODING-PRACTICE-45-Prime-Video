// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {MovieHeading} from '../PrimeVideo/styledComponents'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <>
        <MovieHeading>Action Movies</MovieHeading>
        <Slider {...settings}>
          {actionMovies.map(eachMovie => (
            <MovieItem eachMovie={eachMovie} />
          ))}
        </Slider>
      </>
      <>
        <MovieHeading>Comedy Movies</MovieHeading>
        <Slider {...settings}>
          {comedyMovies.map(eachMovie => (
            <MovieItem eachMovie={eachMovie} />
          ))}
        </Slider>
      </>
    </>
  )
}

export default MoviesSlider
