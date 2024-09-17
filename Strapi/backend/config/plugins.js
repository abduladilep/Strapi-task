// config/plugins.js
// module.exports = {
//     'strapi-plugin-io': {
//       enabled: true,
//       config: {
//         // WebSocket server URL
//         url: 'http://localhost:1337', // Replace with your WebSocket server URL
        
//         // Additional configuration options if needed
//         reconnect: true, // Automatically reconnect if the connection is lost
//         // ... other configuration options
//       },
//     },
//   }
module.exports = {
  'strapi-plugin-io': {
    enabled: true,
    config: {
      url: 'http://localhost:1337',
      reconnect: true,
      contentTypes: ['your-content-type'], // Ensure you specify content types
    },
  },
};
