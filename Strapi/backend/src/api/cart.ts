// src/pages/api/cart.ts

export async function get({ request }) {
    try {
      // Extract user ID from the request headers or session
      const authHeader = request.headers.get('Authorization');
      if (!authHeader) {
        return new Response(JSON.stringify({ error: 'No authorization header' }), { status: 401 });
      }
  
      const token = authHeader.replace('Bearer ', '');
    //   const userId = /* Extract user ID from token, e.g., decode JWT */;
      const response = await fetch('http://localhost:1337/api/cart');

    //   const response = await fetch(`http://localhost:1337/api/users/${userId}?populate=cart`, {
    //     headers: { 'Authorization': `Bearer ${token}` }
    //   });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const user = await response.json();
      return new Response(JSON.stringify(user.cart), { status: 200 });
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch cart items' }), { status: 500 });
    }
  }
  