import { createTheme } from '@material-ui/core/styles'

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    mainColor: string,
    secondaryColor: string,
    mainBackground: string
  }
  interface PaletteOptions {
    mainColor: string,
    secondaryColor: string,
    mainBackground: string
  }
}

export const theme = createTheme({
  palette: {
      mainColor:'#A72670',
      secondaryColor:'#39314C',
      mainBackground:'#1A1A1C',
  },
  typography:{
    fontFamily:['Montserrat', 'sans-serif'].join(),
    h3:{
      fontSize:'48px'
    }
  },
  overrides:{
    MuiInputBase:{
        input:{
          color:'#39314C',
          fontSize:'32px',
          width:'600px'
        }
    },
    MuiOutlinedInput:{
      input:{
        padding:'18px 25px'
      },
      notchedOutline:{
        padding:'0 10px',
        borderRadius:'56px',
        borderWidth:'3px',
        borderColor:'#A72670',
      }
    }
  },
  props:{
    MuiTextField:{
      variant: 'outlined',
    }
  }
})