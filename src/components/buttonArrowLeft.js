import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    }
}));

export default function ButtonArrowLeft() {
    const classes = useStyles();
  
    return (
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <ArrowBackIcon />
      </IconButton>
    );
  }