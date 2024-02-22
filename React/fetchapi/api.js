// src/services/api.js

const BASE_URL = 'https://api.example.com';

async function fetchData(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return await response.json();
}

export async function fetchUser(userId) {
  return await fetchData(`users/${userId}`);
}

export async function fetchPosts() {
  return await fetchData('posts');
}

export async function createPost(postData) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };
  return await fetchData('posts', options);
}
