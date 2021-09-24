import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path
        d="M128 23.1c34.2 0 38.2.1 51.7.7 12.5.6 19.3 2.7 23.8 4.4 6 2.3 10.2 5.1 14.7 9.6s7.3 8.7 9.6 14.7c1.8 4.5 3.8 11.3 4.4 23.8.6 13.5.7 17.5.7 51.7s-.1 38.2-.7 51.7c-.6 12.5-2.7 19.3-4.4 23.8-2.3 6-5.1 10.2-9.6 14.7s-8.7 7.3-14.7 9.6c-4.5 1.8-11.3 3.8-23.8 4.4-13.5.6-17.5.7-51.7.7s-38.2-.1-51.7-.7c-12.5-.6-19.3-2.7-23.8-4.4-6-2.3-10.2-5.1-14.7-9.6s-7.3-8.7-9.6-14.7c-1.8-4.5-3.8-11.3-4.4-23.8-.6-13.5-.7-17.5-.7-51.7s.1-38.2.7-51.7c.6-12.5 2.7-19.3 4.4-23.8 2.3-6 5.1-10.2 9.6-14.7s8.7-7.3 14.7-9.6c4.5-1.8 11.3-3.8 23.8-4.4 13.5-.6 17.5-.7 51.7-.7M128 0C93.2 0 88.9.1 75.2.8c-13.6.6-22.9 2.8-31 5.9-8.4 3.3-15.6 7.6-22.7 14.8S10 35.7 6.7 44.2C3.5 52.3 1.4 61.6.8 75.3.1 88.9 0 93.2 0 128s.1 39.1.8 52.8c.6 13.6 2.8 22.9 5.9 31.1 3.3 8.4 7.6 15.6 14.8 22.7 7.1 7.1 14.3 11.5 22.7 14.8 8.1 3.2 17.4 5.3 31.1 5.9 13.7.6 18 .8 52.8.8s39.1-.1 52.8-.8c13.6-.6 22.9-2.8 31.1-5.9 8.4-3.3 15.6-7.6 22.7-14.8 7.1-7.1 11.5-14.3 14.8-22.7 3.2-8.1 5.3-17.4 5.9-31.1.6-13.7.8-18 .8-52.8s-.1-39.1-.8-52.8c-.6-13.6-2.8-22.9-5.9-31.1-3.3-8.4-7.6-15.6-14.8-22.7S220.3 10 211.8 6.7c-8.1-3.2-17.4-5.3-31.1-5.9C167.1.1 162.8 0 128 0zm0 62.3c-36.3 0-65.7 29.4-65.7 65.7s29.4 65.7 65.7 65.7 65.7-29.4 65.7-65.7-29.4-65.7-65.7-65.7zm0 108.4c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7 42.7 19.1 42.7 42.7-19.1 42.7-42.7 42.7zm83.7-111c0 8.5-6.9 15.4-15.4 15.4S181 68.2 181 59.7s6.9-15.4 15.4-15.4 15.3 6.9 15.3 15.4z"
        fill={props.lightMode ? '#333333' : 'white'}
      />
    </svg>
  )
}

export default SvgComponent