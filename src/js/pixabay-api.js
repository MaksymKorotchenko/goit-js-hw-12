import axios from 'axios';

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: '50854630-6377197e49f9883f109b83eb2',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return axios
    .get('https://pixabay.com/api/', { params })
    .then(response => response.data);
}
