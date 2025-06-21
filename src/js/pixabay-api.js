import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const params = new URLSearchParams({
    key: '50854630-6377197e49f9883f109b83eb2',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: '15',
    page,
  });
  return await axios
    .get('https://pixabay.com/api/', { params })
    .then(response => response.data);
}
