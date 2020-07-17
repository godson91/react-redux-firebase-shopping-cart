import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <IconButton edge="start"  aria-haspopup="true" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SHOP NOW
          </Typography>
          <Button color="inherit">Login</Button>
          {/* <Button color="inherit"><Link to="/cart">My Cart</Link></Button> */}
          {/* <Button color="inherit"><Link to="/cart"><ShoppingBasketIcon/></Link></Button> */}
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
