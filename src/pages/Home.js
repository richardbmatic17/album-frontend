import React from 'react'
import {
  Drawer,
  Parallax,
} from '../components'

const Home = (props) => {
  return (
    <div>
      <Drawer />
      <Parallax
        parallaxImage="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG20200217165328.jpg"
        parallaxMessage="Welcome to Our Blog!"
      />
      <div>Welcome to home page!</div>
      <Parallax
        parallaxImage="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG20200217165328.jpg"
        parallaxMessage="Boracay Adventure"
        link="/portfolio"
      />
    </div>
  )
}

export default Home
