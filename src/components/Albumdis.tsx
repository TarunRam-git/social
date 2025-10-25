
import { FetchAlbums } from '@/back/Albums';
import React from 'react'

const Albumdis = async () => {
  const albums = await FetchAlbums();
  return (
    <div className="grid grid-cols-5 gap-4">
      {albums.map((album: { userId:number, id: number; title: string }) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 transition"
        >
          <h3 className="text-lg font-bold mb-2 text-amber-300">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
          <p className='text-blue-600'>User id: {album.userId}</p>
        </div>
      ))}
    </div>
  );
};


export default Albumdis
