import React from 'react';
import PropTypes from 'prop-types';

const foodList = [
  { 
    id: 1,
    name: 'kimchi',
    rating: 10,
    image: 'https://www.thespruceeats.com/thmb/d3Be5bJwgAxumaOevXYXV1gTKo8=/1859x1859/smart/filters:no_upscale()/korean-sriracha-kimchi-recipe-2118867-hero-011-f6964d865b6246b180ddb843cdeb132d.jpg'
  },
  {
    id: 2,
    name: 'ramen',
    rating: 3.1,
    image: 'https://health.chosun.com/site/data/img_dir/2021/10/26/2021102601968_0.jpg'
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  //console.log(foodList.map(FoodRenderer));
  return (
    <div>
      {foodList.map(foodObject => (
        <Food 
          key={foodObject.id} 
          name={foodObject.name} 
          rating={foodObject.rating} 
          image={foodObject.image} />))}
    </div>
  );
}

function Food(paramObject) {
  //console.log(imageObject.image);
  return (
    <div>
      <h2>I love {paramObject.name}!</h2>
      <h4>{paramObject.rating}/10</h4>
      <img src={paramObject.image} width="400px" alt={paramObject.name}/>
    </div>
  );
}

// function FoodRenderer(foodObject) {
//   return <Food name={foodObject.name} picture={foodObject.image} />;
// }

export default App;
