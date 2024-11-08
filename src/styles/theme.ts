import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import ImgFundo from '../images/imgFundo.jpg';

export const theme: ThemeConfig = extendTheme({

  colors: {
    gray: {
      "900": "#181b23",
      "850": "#00ae9d",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "70": "#acacb4bd",
      "50": "#eeeef2",
      "35": "#efefef",
      "25": "#f9f9fb"
    },
    green: {
      "200": '#00C645',
      "900": "#00A091",
      "800": "#003641",
      "700" : "#007065"
    },
    purple: {
      "900": '#49479D',
      "950": '#353897'
    },
    yellow: {
      "200": '#FFC228',
    },
    or: {
      "200": '#FF854C',
    },
    blue: {
      "200": '#0087EF'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        backgroundImage: ImgFundo,
        color: mode('gray.700', 'gray.900')(props),
      },
      ':root': {
        '--chakra-colors-green-900': mode('#00A091', '#353646')(props),
        '--chakra-colors-green-800': mode('#003641', '#49479D')(props),
        '--chakra-colors-green-700': mode('#007065', '#0c5c55')(props), 
        '--chakra-colors-gray-900': mode('#181b23', '#eeeef2')(props),
        '--chakra-colors-gray-500': mode('#616480', '#eeeef2')(props),
        '--chakra-colors-gray-100': mode('#d1d2dc', '#727376')(props),
        '--chakra-colors-gray-70': mode('#acacb4bd', '#3b4460')(props),
        '--chakra-colors-gray-50': mode('#eeeef2', '#2f2f32')(props), 
        '--chakra-colors-gray-35': mode('#efefef', '#202024')(props), 
        '--chakra-colors-gray-25': mode('#f9f9fb', '#202024')(props), 
      }
    })
  },
})