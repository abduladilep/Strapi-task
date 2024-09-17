export async function post({ request }) {
    const formData = await request.formData();
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
  
    const response = await fetch('http://localhost:1337/auth/local/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
  
    const data = await response.json();
    if (response.ok) {
      return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, error: data.message }), { status: 400 });
    }
  }
  