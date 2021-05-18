import GatsbyLink from "gatsby-link"
import * as React from "react"
import "../style/index.scss"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <div className="Link"><GatsbyLink to="/app">Link to app</GatsbyLink></div>
      
    </main>
  )
}

export default IndexPage
