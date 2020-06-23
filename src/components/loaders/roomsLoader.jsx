import React from "react"
import ContentLoader from "react-content-loader"

const roomsLoader = (props) => (
  <ContentLoader 
  speed={0.4}
  width={1200}
  height={1200}
  viewBox="0 0 1200 1200"
  backgroundColor="#e5e5e5"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="24" y="131" rx="0" ry="0" width="370" height="287" /> 
  <rect x="25" y="453" rx="0" ry="0" width="370" height="287" /> 
  <rect x="23" y="773" rx="0" ry="0" width="370" height="287" /> 
  <rect x="397" y="130" rx="0" ry="0" width="554" height="287" /> 
  <rect x="399" y="453" rx="0" ry="0" width="554" height="287" /> 
  <rect x="397" y="774" rx="0" ry="0" width="554" height="287" /> 
  <rect x="955" y="774" rx="0" ry="0" width="185" height="287" /> 
  <rect x="957" y="452" rx="0" ry="0" width="185" height="287" /> 
  <rect x="956" y="131" rx="0" ry="0" width="185" height="287" />
</ContentLoader>

)

export default roomsLoader;