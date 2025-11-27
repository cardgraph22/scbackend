export const load = async ({ fetch })=> {
  let res = await fetch('https://dummyjson.com/products/?limit=10');
  let {products} = await res.json();
    return{
    products
  }
}