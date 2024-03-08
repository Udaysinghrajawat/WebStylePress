import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {

  const [ posts, setPosts ] = useState([]);
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
    .then(setLoader(false))
  }

  return (
<div>
 
</div>
  )
}

export default Posts