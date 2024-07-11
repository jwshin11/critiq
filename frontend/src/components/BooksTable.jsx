import { useState } from 'react';
import BooksRow from './BooksRow';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
        
      <tbody>
        {books.map((book, index) => (
          <BooksRow key={book._id} book={book} index={index}/>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;