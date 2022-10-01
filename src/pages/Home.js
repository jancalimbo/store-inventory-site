
import Categories from './Categories';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [categories, setCategories] = useState(null);

    useEffect(() =>{
      fetch('http://localhost:8200/categories')
        .then(res =>{
          return res.json();
        })
        .then (data => {
          setCategories(data)
          console.log(data);
        })
    }, []);
 
  return (  
    <>
    <h2 id='landing-title'>Our Products</h2>
    {categories && <Categories categories={categories} />}
    </>
  );
}
 
export default Home;