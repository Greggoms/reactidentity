import React from "react"
import Layout from "./src/components/layout"
import { IdentityContextProvider } from "react-netlify-identity"

export const wrapRootElement = ({ element, props }) => {
  const url = "https://reactidentity.netlify.app"
  return (
    <>
      <IdentityContextProvider url={url}>
        <Layout {...props}>{element}</Layout>
      </IdentityContextProvider>
    </>
  )
}
