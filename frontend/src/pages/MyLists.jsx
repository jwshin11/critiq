import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import axios from 'axios';
import Spinner from '../components/Spinner';
import ListCards from '../components/MyListCards';

const MyLists = () => {
  const [myLists, setMyLists] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('/my_lists')
      .then((response) => {
        setMyLists(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>My Lists</h1>
        <Link to='/my_lists/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <ListCards lists={myLists} />
      )}
    </div>
  );
}

export default MyLists