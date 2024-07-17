import React from 'react'

const MyListCards = ({ lists }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {lists.map((item) => (
        <ListSingleCard key={item._id} list={item} />
      ))}
    </div>
  );
}

export default MyListCards