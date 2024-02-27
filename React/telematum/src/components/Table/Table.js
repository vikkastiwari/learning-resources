import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';

const Table = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold text-gray-400 my-5">Today's Appointment List</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b text-left text-sm font-semibold text-gray-400 p-4">PATIENTS</th>
            <th className="border-b text-left text-sm font-semibold text-gray-400 p-4">DATE</th>
            <th className="border-b text-left text-sm font-semibold text-gray-400 p-4">TIME</th>
            <th className="border-b text-left text-sm font-semibold text-gray-400 p-4">DOCTOR</th>
            <th className="border-b text-left text-sm font-semibold text-gray-400 p-4">INJURY</th>
            <th className="border-b text-center text-sm font-semibold text-gray-400 p-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b px-4 py-2">
                <div className='flex justify-between items-center gap-2'>
                    <img src="path_to_your_image.jpg" alt="Placeholder" className="rounded-full w-12 h-12" />
                    <div>
                        <p >Vikas Tiwari</p>
                        <p>98792738492</p>
                    </div>
                </div>
            </td>
            <td className="border-b px-4 py-2">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-400 bg-white rounded-full border border-gray-100 w-5 h-5" />
                    <span className='text-gray-500 font-normal'>20 Jan 2024</span>
                </div>
            </td>
            <td className="border-b px-4 py-2">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-gray-400 bg-white rounded-full border border-gray-100 w-5 h-5" />
                    <span className='text-gray-500 font-normal'>10:18</span>
                </div>
            </td>
            <td className="border-b px-4 py-2">
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faStar} className="text-white bg-green-500 rounded-full p-1 w-4 h-4" />
                    <span className='text-gray-500 font-normal'>Dr. Vikas Tiwari</span>
                </div>
            </td>
            <td className="border-b px-4 py-2">
                <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-bold text-gray-500">Fever</span>
            </td>
            <td className="border-b px-4 py-2 text-center">
                <FontAwesomeIcon icon={faEllipsisV} className="text-gray-400" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
