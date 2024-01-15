import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowId = "1" title = "Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowId = "2" title = "popular" fetchUrl={requests.requestPopular} />
      <Row rowId = "3" title = "Trending" fetchUrl={requests.requestTrending} />
      <Row rowId = "4" title = "top rated" fetchUrl={requests.requestTopRated} />
      <Row rowId = "5" title = "Horror" fetchUrl={requests.requestHorror} />
    </>
  )
}

export default Home
