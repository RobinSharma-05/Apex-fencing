import React from 'react'

const ShowcaseGrid = () => {
   var grid = document.querySelector(".grid");
   var msnry = new Masonry(grid, {
     // options...
     itemSelector: ".grid-item",
     columnWidth: 200,
   });

   // init with selector
   var msnry = new Masonry(".grid", {
     // options...
   });
  return (
    <>
      <div
        class="grid"
        data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
      >
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        ...
      </div>
    </>
  );
}

export default ShowcaseGrid
