import React from 'react'
import {
  Drawer,
  Parallax,
} from '../components'

const Home = (props) => {
  return (
    <div>
      <Drawer />
      <Parallax parallaxImage="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG20200217165328.jpg" />
      <div>Welcome to home page!</div>
    </div>
  )
}

export default Home