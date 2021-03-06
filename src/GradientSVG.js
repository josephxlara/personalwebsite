import * as React from "react";
import { useTheme } from './Design';

function Gradient(props) {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 900 288" {...props} >
      <path
        d="M900 201.4l-21.5 14c-21.5 14.2-64.5 42.3-107.3 49.1-42.9 6.8-85.5-7.8-128.4-2.5-42.8 5.4-85.8 30.8-128.6 25.2-42.9-5.8-85.5-42.3-128.4-45.2-42.8-2.9-85.8 28.3-128.6 27.6-42.9-.5-85.5-32.7-128.4-44.5-42.8-11.9-85.8-3.4-107.3.8L0 230.2V0h900v201.4z"
        fill={props.lightMode ? theme.svgGradient.lightMode.color1 : theme.svgGradient.darkMode.color1}
      />
      <path
        d="M900 216.6l-21.5-8.1C857 200.2 814 184 771.2 175.2c-42.9-8.8-85.5-9.8-128.4 5.4-42.8 15.2-85.8 46.7-128.6 51.6-42.9 4.7-85.5-17.3-128.4-22.8-42.8-5.8-85.8 5.1-128.6 4.7-42.9-.3-85.5-11.5-128.4-7.6C86 210.4 43 229.7 21.5 239.1L0 248.8V0h900v216.6z"
        fill={props.lightMode ? theme.svgGradient.lightMode.color2 : theme.svgGradient.darkMode.color2}
      />
      <path
        d="M900 125.2l-21.5 9c-21.5 9.1-64.5 27.1-107.3 38.9-42.9 11.8-85.5 17.6-128.4 16.8-42.8-.9-85.8-8.3-128.6-11.9-42.9-3.7-85.5-3.7-128.4.8-42.8 4.4-85.8 13.5-128.6 9.3-42.9-4.2-85.5-21.8-128.4-25.4-42.8-3.6-85.8 6.5-107.3 11.6L0 179.4V0h900v125.2z"
        fill={props.lightMode ? theme.svgGradient.lightMode.color3 : theme.svgGradient.darkMode.color3}
      />
      <path
        d="M900 140.5l-21.5.8c-21.5.8-64.5 2.5-107.3 1.2-42.9-1.5-85.5-5.9-128.4-11.3-42.8-5.4-85.8-11.5-128.6-14-42.9-2.5-85.5-1.5-128.4-.3-42.8 1.1-85.8 2.1-128.6 7.5-42.9 5.4-85.5 14.9-128.4 11.3C86 132 43 115.1 21.5 106.6L0 98.2V0h900v140.5z"
        fill={props.lightMode ? theme.svgGradient.lightMode.color4 : theme.svgGradient.darkMode.color4}
      />
      <path
        d="M900 76.2l-21.5 2.5c-21.5 2.5-64.5 7.6-107.3 5.1-42.9-2.5-85.5-12.7-128.4-22C600 52.5 557 44 514.2 41.1c-42.9-2.7-85.5 0-128.4 7.1C343 55.3 300 66.5 257.2 73.1c-42.9 6.4-85.5 8.1-128.4 6.1C86 77.3 43 71.6 21.5 68.9L0 66V0h900v76.2z"
        fill={props.lightMode ? theme.svgGradient.lightMode.color5 : theme.svgGradient.darkMode.color5}
      />
    </svg>
  )
}

export default Gradient;