import React from 'react';

import { Image, Container, Row, Col } from 'react-bootstrap';

function PostCard(props) {

    let title = props.title;
    let imageUrl = props.imageUrl;


    let getImage = ()=>{
        if (imageUrl != ""){
        return (
            <div sm={imageUrl == "" ? 0 : 3}>
            <Image src={imageUrl} fluid ></Image>
        </div>
        )}} 



    return (

     


        <div className="post" >

            
               <a href={props.link}>
               
                    <h2 className="post-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
                    {getImage()}
                    
               
            </a>

        </div>





    );
}

export default PostCard;