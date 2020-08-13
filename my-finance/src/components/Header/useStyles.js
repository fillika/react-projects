import { makeStyles } from '@material-ui/styles';

const drawerWidth = 240; // Ширина боковой панели (дровера)

export const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    whiteSpace: 'nowrap',
    transition: createTransition(theme, ['width', 'margin']),
  },
  appBarShift: { // Стили для appbar в активном состоянии
    marginLeft: drawerWidth, // NOTE: Не совсем понятно зачем тут margin
    width: `calc(100% - ${drawerWidth}px)`,
    transition: createTransition(theme, ['width', 'margin']),
    whiteSpace: 'nowrap',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: createTransition(theme, 'width'),
  },
  drawerClose: {
    transition: createTransition(theme, 'width'),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

/**
 * Функции хелперы
 */

/**
 * Фунция создает свойство transition для стилей
 * @param {$ObjMap} theme объект основной темы
 * @param {string | array} options либо 1 свойство либо массив
 * @param {boolean} status true - если открываем, false - если закрываем
 */
function createTransition(theme, options, status = true) {
  return theme.transitions.create(options, {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration[status ? 'enteringScreen' : 'leavingScreen'],
  });
}
