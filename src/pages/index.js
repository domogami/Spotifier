import GatsbyLink from "gatsby-link"
import * as React from "react"
import Header from "../components/header";
import "../style/index.scss"
import Blob from "../images/Blob.svg"
import Album from "../images/Album.png"
const IndexPage = () => {
  return (
    <main>
      <Header />
      <img alt="Blob" className="Blob" src={Blob} />
      <img alt="Album" className="AlbumCover" src={Album} />
      <title>Home Page</title>
      <div className="Hero">
          <h1>Spotify Clone</h1>
          <p>A new way to visualize your listening!</p>
          <GatsbyLink to="/app" className="Link">Link to app</GatsbyLink>
      </div>
    </main>
  )
}

export default IndexPage
