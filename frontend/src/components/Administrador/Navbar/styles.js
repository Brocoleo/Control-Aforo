import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 61%, rgba(247,246,242,1) 80%)',
    boxShadow: 'none',
    padding: '12px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Kaushan Script',
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '80px',
  },
  menu:{  
    display: 'table-cell',
    fontSize: '1.1rem'
  }
 
}));