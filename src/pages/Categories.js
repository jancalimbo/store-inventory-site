import React from 'react';

const Categories = ({categories}) => {
  return ( 
    <div id="basta-kani" className='d-flex'> 
      {categories.map((category) => (
        <div id='every-category' className='' key={category.id}>
          <img class="card-img-top" src="/item.jpg" alt="Card image cap"></img>
          <div className="category-card">
            <h4 className='card-title text-center'>{category.category}</h4>
            <div className='card-body'>
              {category.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Categories;