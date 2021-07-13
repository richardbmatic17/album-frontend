import React from 'react'
import {
  Drawer,
  Footer,
  Header,
} from '../components'

const _Page = (props) => {
  return (
    <div>
      <Header />
      <Drawer />
      {props.children}
      <Footer />
    </div>
  )
}

export default _Page
