import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f162dd98583d2e53b40f063d373d09429b211b6b3c302d3e86d802620de0856f'
  }
});
