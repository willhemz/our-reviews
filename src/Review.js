import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  
  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0
    }
    if(number < 0) {
      return people.length - 1
    }
    return number
  }

  const prevPerson = () => {
    setIndex(index => {
      return checkNumber(index - 1)
    })
  }

  const nextPerson = () => {
    setIndex(index => {
      return checkNumber(index + 1)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if(randomNumber === index) {
      return index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  return <>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight />  
        </span>  
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
    </article>
  </>
};

export default Review;
