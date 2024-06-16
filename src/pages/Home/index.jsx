import React from 'react'

function Home () {
  return (
    <div>Home
      <div class='masonry'>
        <div class='masonry-item bg-white p-4 rounded shadow'>
          <h2 class='text-lg font-bold mb-2'>Item 1</h2>
          <p>Content goes here.</p>
        </div>
        <div class='masonry-item bg-white p-4 rounded shadow'>
          <h2 class='text-lg font-bold mb-2'>Item 2</h2>
          <p>Content goes here.</p>
        </div>
        <div class='masonry-item bg-white p-4 rounded shadow'>
          <h2 class='text-lg font-bold mb-2'>Item 3</h2>
          <p>Content goes here.</p>
        </div>
        <div class='masonry-item bg-white p-4 rounded shadow'>
          <h2 class='text-lg font-bold mb-2'>Item 4</h2>
          <p>Content goes here.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
