import React, {useState} from 'react';
import './Products.css';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Products() {
    return (
        <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

const Product = () => {
    const [color, setColor] = useState('grey');

    const handleColorChange = () => {
        const nextColor = color ==='grey'? "#ee2525":"grey";
        setColor(nextColor);
    }

    return(
    <Card className="product__card">
        <img src="https://rukminim1.flixcart.com/image/580/696/kf5pzm80/cufflink-tie-pin/v/y/w/men-s-polyester-necktie-pocket-square-lapel-pin-and-cufflinks-original-imafvzrc5fkqxh26.jpeg?q=50" alt="AXLON Satin Tie & Cufflink" />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            AXLON Satin Tie & Cufflink<br />
            <b>₹599</b>
            </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites" onClick ={handleColorChange} style={{color:color}}>
            <FavoriteIcon />
        </IconButton>
    </Card>
    )
}

export default Products;
