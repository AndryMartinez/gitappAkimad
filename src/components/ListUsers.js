import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ImageAvatars from './avatar';
import { Link } from 'react-router-dom';

function ListUsers(props) {
    
    const classes = useStyles();

    return (

        <List className={classes.root}>

          {props.users.map(user =>(
              <Link to={`/user/${user.login}`} style={{ textDecoration: 'none' ,color:'black'}}>
                <ListItem 
                  key={user.login}
                  >
                    <ListItemAvatar>
                        <Avatar>
                        <ImageAvatars src={user.avatar_url} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.login} />
                </ListItem>
              </Link>
            ))}
        
        </List>
      );

}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default ListUsers