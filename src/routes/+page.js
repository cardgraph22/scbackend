/*
export const load = async ({ fetch })=> {
  fetch('https://dummyjson.com/products/10')
    .then(res => res.json())
    .then(console.log);
    return{
      product: 'iPhone 14'
    }
}
*/


// svelte fetch?
/*
export async function load() {
  fetch('https://picsum.photos/v2/list/')
  //fetch('https://jsonplaceholder.typicode.com/photos/10')
    .then(response => response.json())
    .then(json => console.log(json))
    return response
  //return { users };
}
*/

/*
// src/routes/some-page/+page.js or +page.server.js
export const load = async ({ fetch }) => { // Destructure fetch from the load event
  const response = await fetch('https://picsum.photos/v2/list/');
  if (!response.ok) {
    // Handle errors appropriately, e.g., throw an error
    throw new Error('Failed to fetch data');
  }
  const data = await response.json(); // Process the response, usually into JSON
  // Return an object with the data you want to pass to the page component
  return {
    apiData: data
  };
};
*/
