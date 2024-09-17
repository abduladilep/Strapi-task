// export async function get() {
//     const response = await fetch('http://localhost:1337/products');
//     const products = await response.json();
//     return new Response(JSON.stringify(products), { status: 200 });
//   }
  
// src/pages/api/products.js// src/pages/api/products.ts
export async function get() {
  try {
    const response = await fetch('http://localhost:1337/api/products?populate=Image');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
}

