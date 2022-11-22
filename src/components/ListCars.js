import React from 'react'
import '../App.css';

const ListCars = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className='box'>
        {data.map((cars) => (
          <div key={cars.max_car_id} className='list'>
            <div key={cars.max_car_id} className='main'>
              <img alt='cars' src={cars.img_url}></img>
              <p>Price: {Math.round(cars.avg_price)}$</p>
              <h1 className='title' key={cars.max_car_id}>{cars.name}</h1>
            </div>
            <button className='button'>Buy</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListCars
