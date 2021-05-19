import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Link } from 'react-router-dom';

function ListRepos(props) {
    
    const classes = useStyles();

    return (

        <List className={classes.root}>

            {props.list.map(item =>{
                console.log("hola");
                return(
                    <ListItem 
                    key={item.id}
                    >
                        <ListItemAvatar>
                            <Avatar>
                            <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} />
                    </ListItem>
                )
            })}
        
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

export default ListRepos