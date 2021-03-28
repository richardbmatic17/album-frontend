import React from 'react'
import {
  Parallax,
} from '../components'
import { Page } from '../partials'

const Home = (props) => {
  return (
    <div>
      <Page>
        <Parallax
          parallaxImage="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG_0623.JPEG"
          parallaxMessage="Welcome to Our Blog!"
        />
        <div>PARALLAX DEMO</div>
        Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.
        Nascetur per nec posuere turpis,
        lectus nec libero turpis nunc at,
        sed posuere mollis ullamcorper libero ante lectus,
        blandit pellentesque a,
        magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi,
        morbi sociis. Condimentum dui ipsum consequat morbi,
        curabitur aliquam pede,
        nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor,
        nunc nisl dapibus vestibulum at,
        sodales tincidunt mauris ullamcorper,
        dapibus pulvinar,
        in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend,
        aenean maecenas vulputate,
        non id vehicula lorem mattis,
        ratione interdum sociis ornare. Suscipit proin magna cras vel,
        non sit platea sit,
        maecenas ante augue etiam maecenas,
        porta porttitor placerat leo.
        <Parallax
          parallaxImage="https://album-2021-03-02.s3-ap-southeast-1.amazonaws.com/boracay/IMG20200217165328.jpg"
          parallaxMessage="Boracay Adventure"
          link="/portfolio"
      />
      </Page>
    </div>
  )
}

export default Home
