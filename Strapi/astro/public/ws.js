const socket = new WebSocket('ws://localhost:1337');

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  if (data.event === 'productUpdated') {
    // Handle the product update
    console.log('Product updated:', data.payload);
    // Update your product list or UI accordingly
  }
});

// Optionally handle other WebSocket events
