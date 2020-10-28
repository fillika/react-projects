import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(({ spacing, breakpoints, transitions: { easing, duration }, palette }) =>
  createStyles({
    inputWrapper: {
      position: 'relative',
    },
    input: {
      color: '#333',
      borderRadius: 4,
      overflow: 'hidden',
      transition: `${ duration.shorter }ms ${ easing.sharp }`,

      '& .MuiInputLabel-root': {
        color: '#333',
        transition: `${ duration.shorter }ms ${ easing.sharp }`,
      },

      '& .MuiFilledInput-input': {
        color: '#333',
        backgroundColor: '#ecf1f7',
        transition: `${ duration.shorter }ms ${ easing.sharp }`,
      },

      '& .MuiFilledInput-input:hover': {
        backgroundColor: '#e4ebf3',
      },

      '& .MuiInputBase-input:focus': {
        backgroundColor: '#fff',
        color: '#333'
      },

      '& .MuiFilledInput-underline:after': {
        borderBottom: 'none'
      }
    },
    slider: {
      position: 'absolute',
      left: 0,
      height: 3,
      bottom: -spacing() - 1,
      padding: `${ spacing() }px 0`,

      '& .MuiSlider-rail': {
        backgroundColor: 'transparent'
      },

      '& .MuiSlider-thumb': {
        position: 'relative',

        '&:before': {
          width: '65%',
          height: '65%',
          display: 'block',
          backgroundColor: '#fff',
          content: "''",
          borderRadius: '50%',
          left: 0,
          top: 0,
        },
      },

      '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
        boxShadow: 'none',
        backgroundColor: '#fcc521'
      },
    }
  }));
