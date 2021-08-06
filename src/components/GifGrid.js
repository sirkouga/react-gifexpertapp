import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <div>
      <h2 className="animate__animated animate__fadeIn">{ category }</h2>

      { loading && <p className="animate__animated animate__flash">Loading</p> }

      {
        images && (
          <div className="main-grid">
            {
              images.map(img => (
                <GifGridItem
                  key={ img.id }
                  { ...img }
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default GifGrid
