import React, { useState, Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import CustomModal from './CustomModal'; 




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    hover: {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardStyle: {
      marginBottom: "50px"
  }
}));

export const RecipeReviewCard = () => {
  const classes = useStyles();
  const items = useSelector((state) => state.firestore.data.items);
  

  return (
    // {items &&
        // Object.values(items).map((item,key) => (

        // <RecipeReviewCard key={item.itemId}/>
          // <li key={item.itemId}>
          //   <label>name: {item.name}</label>
          //   <label>description: {item.description}</label>
          //   <label>image: <img src={item.image}></img> </label>
          //   <label>price: {item.price}</label>
          //   <label>starReview: {item.starReview}</label>                        
          // </li>
        // ))}

        Object.values(items).map((item,key) => (
   <div className={classes.cardStyle} >
       

        <Card className={classes.root} key={item.itemId} >
        <CustomModal>
            
       </CustomModal>
            <CardHeader
                title={item.name}
                subheader={item.price}
                subheader={item.starReview}
            />
            <CardMedia
                className={classes.media}
                image= {item.image}
                title={item.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" >
               description: {item.description}
                </Typography>
            </CardContent>   
        </Card>
    </div>
        )
  )        
    );
}
