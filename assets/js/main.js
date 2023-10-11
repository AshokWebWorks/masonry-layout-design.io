// Select the HTML element with the class "grid"
const grid = document.querySelector(".grid");

// Initialize the Masonry layout with configuration options
const msnry = new Masonry(grid, {
  itemSelector: ".grid-item",  // Selector for individual grid items
  columnWidth: 200,           // Width of the columns
  isFitWidth: true,           // Fit the layout to the container width
  gutter: 1,                 // Spacing between grid items
});

// Use the ImagesLoaded library to ensure all images are loaded
imagesLoaded(grid).on("progress", function () {
  // Trigger the Masonry layout after all images are loaded
  msnry.layout();
});
