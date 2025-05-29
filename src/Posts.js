import React, { useEffect, useState } from 'react';

import PostCard from './PostCard';
import { Image, Container, Row, Col } from 'react-bootstrap';


export default function Posts(props) {


    const getCategoryUrl = (category) =>{

      return 'https://www.bergamoreggae.org/bgr/wp-json/wp/v2/posts?categories=' + category + '&per_page=100&_embed'
        //return 'https://www.bergamoreggae.org/bgr/wp-json/wp/v2/posts?categories=' + category + '&_embed&_per_page=100'

    }


    const [posts, setPosts] = useState([]);
    useEffect(() => {
    async function loadPosts() {
      const response = await fetch(getCategoryUrl(props.category));
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, [])




    const getPost = (post) => {
      console.log(post)
      let image = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url : ""
        return <PostCard link={post.link} content={post.content.rendered}  title={post.title.rendered} imageUrl={image} ></PostCard>

    }


    

    let a = (  <Container className="post"> <Row> { posts.map((post, index) => {

        return (<Col sm={3} > { getPost(post) } </Col>) 

    }) } </Row> </Container>)

    return a
}