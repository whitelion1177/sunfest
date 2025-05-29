import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import PostCard from './PostCard';
import Posts from './Posts';
import {
    Switch,
    Route,
    Link, useParams,
  } from "react-router-dom";


export default function Post(props) {

    let { topicId } = useParams();


    const getCategoryUrl = (id) =>{

        return 'https://www.bergamoreggae.org/bgr/wp-json/wp/v2/posts/' + id  + '?_embed'
        

    }


    const [post, setPost] = useState([]);
    useEffect(() => {
    async function loadPosts() {



      const response = await fetch(getCategoryUrl(topicId));
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const post = await response.json();
      setPost(post);
    }

    loadPosts();
  }, [])




    const getPost = (post) => {
      

        if (post && post.length != 0){
            let image = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url : ""
            return <PostCard  content={post.content.rendered}  title={post.title.rendered} imageUrl={image} ></PostCard>
        }

        

    }


    

    

        return <div>{getPost(post)}</div>

    

    
}