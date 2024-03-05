import React from 'react';
import './AuthorCard.css';

const AuthorCard = ({name, totalBooks, work, onChange}) => {
  return (
    <div onClick={() => onChange(name)} className='author-card'>
      <div className='name'>{name}</div>
      <div className='total-books'>
        <span className='font-bold'>Total Books:</span> {totalBooks}
      </div>
      <div className='work'><span className='font-bold'>Famous Work:</span> {work}</div>
    </div>
  )
}

export default AuthorCard;