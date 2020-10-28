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
        border: '1px solid #ecf1f7',
        borderRadius: 4,
        transition: `${ duration.shorter }ms ${ easing.sharp }`,
      },

      '& .MuiFilledInput-underline:before': {
        border: 'none',
      },

      '& .MuiFilledInput-input:hover': {
        backgroundColor: '#e4ebf3',
        border: '1px solid #e4ebf3',
      },

      '& .MuiInputBase-input:focus': {
        backgroundColor: '#fff',
        color: '#333',
        border: '1px solid #333'
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
      paddingTop: spacing() - 4,
      paddingBottom: spacing(),

      '& .MuiSlider-rail': {
        backgroundColor: 'transparent'
      },

      '& .MuiSlider-thumb': {
        position: 'relative',

        '&:before': {
          width: '60%',
          height: '60%',
          display: 'block',
          backgroundColor: '#fff',
          content: "''",
          borderRadius: '50%',
          left: 0,
          top: 0,
        },

        '&:after': {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
        },
      },

      '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover': {
        boxShadow: 'none',
        backgroundColor: '#fcc521'
      },
    },
    underText: {
      display: 'flex',
      justifyContent: 'space-between',
      color: 'rgb(102, 102, 102)',
      whiteSpace: 'nowrap',
      fontSize: 13,
      lineHeight: '20px'
    },
  }));
