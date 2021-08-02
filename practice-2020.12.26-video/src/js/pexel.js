import { createClient } from 'pexels';
import refs from './refs.js';
// import videoCardTpl from '../templates/videoCard.hbs';
const API_KEY = '563492ad6f91700001000001d79b8a1ee26245cbadc229931f82ff0c';
// let query = 'Карнавал';
let per_page = 2;
const client = createClient(API_KEY);

const { videoGalleryRef, formRef } = refs;
// console.log(videoGalleryRef);
// console.log(client.videos);
const locale = 'ru-RU';

function getFetch(query) {
  client.videos.search({ query, per_page, locale }).then(response => {
    // console.log(response.videos);
    response.videos.map(video => {
      // console.log(video);
      const videoWrap = document.createElement('li');
      const videoItem = document.createElement('video');
      videoItem.setAttribute('src', video.video_files[0].link);
      videoItem.setAttribute('controls', null);
      videoItem.setAttribute('poster', video.image);
      videoItem.setAttribute('muted', false);
      // const videoPreview = document.createElement('img');
      // videoPreview.src = video.image;
      videoGalleryRef.append(videoItem);

      const picturesList = document.createElement('ul');
      picturesList.classList.add('pictures-list');
      const pictureItems = video.video_pictures.map(obj => {
        // console.log(obj.picture);
        const picturesItem = document.createElement('li');
        const picture = document.createElement('img');
        picture.setAttribute('src', obj.picture);
        picturesItem.appendChild(picture);
        return picturesItem;
      });
      // console.log('Items', pictureItems);
      picturesList.append(...pictureItems);
      videoWrap.append(videoItem, picturesList);
      videoGalleryRef.append(videoWrap);
    });
  });
}
// console.log(formRef);

function onSearch(e) {
  e.preventDefault();
  const searchQuery = e.target.elements.search.value;
  getFetch(searchQuery);
}

formRef.addEventListener('submit', onSearch);
