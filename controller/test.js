const url = 'https://example.com/api';
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  console.log('Response received:', data);
})
.catch(error => {
  console.error('Error:', error);
});