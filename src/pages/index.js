import * as React from "react"
import '../styles/app.scss'
import { Controller } from '../components/Controller'
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.TRACKING_ID);

const IndexPage = () => {
  return (
    <main>
      <Controller />
    </main>
  )
}

export default IndexPage
