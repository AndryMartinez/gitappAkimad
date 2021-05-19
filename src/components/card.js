import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function CardUser(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
           {props.children}
        </CardContent>
      </Card>
    );
  }

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 345
    }
  });

export default CardUser