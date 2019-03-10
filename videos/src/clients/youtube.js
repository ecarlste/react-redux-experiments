import axios from 'axios';

const KEY = 'AIzaSyADVFJ2zsicRzJZvvY4NvADgluPD_3p4H4';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

export default youtube;
