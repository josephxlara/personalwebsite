import * as React from "react"

function GitHub(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" {...props}>
      <path fill={props.lightMode ? 'black' : 'white'} d="M360 184.77c0-99.41-80.59-180-180-180S0 85.36 0 184.77c0 78.9 50.77 145.94 121.43 170.25 4.31-3.11 9.27-6.94 9.27-13.4 0-9.9-.21-35.37-.21-35.37s-7.81 1.33-18.96 1.33c-28.1 0-36.98-17.83-41.21-27.81-5.5-13-12.64-19.1-20.22-23.98-4.66-3-5.73-6.53-.34-7.54 24.87-4.66 31.23 28.05 47.84 33.26 11.85 3.72 27.1 2.11 34.68-2.77 1-9.99 8.24-18.63 14.27-23.18-42.24-4.04-67.29-18.63-80.28-42.08l-1.39-2.63-3.26-7.45-.96-2.67c-4.07-11.9-5.87-25.54-5.87-40.77 0-27.04 8.47-37.24 19.85-51.65-8.7-30.83 3.12-51.89 3.12-51.89s18.29-3.77 52.85 20.85c18.73-7.98 68.68-8.65 92.32-1.77 14.49-9.54 41.03-23.06 51.73-19.28 2.9 4.64 9.14 18.17 3.79 47.88 3.63 6.52 22.52 20.4 22.59 59.66-.3 14.48-1.82 26.7-4.63 37.03l-1.56 5.29s-.89 2.49-1.86 4.87l-1.14 2.63c-12.53 27.37-38.24 37.59-79.78 41.84 13.46 8.43 17.32 19 17.32 47.61s-.38 32.45-.29 39.03c.08 5.82 4.73 10 8.91 13.16C308.95 331.09 360 263.9 360 184.77z" />
    </svg>
  )
}

export default GitHub;