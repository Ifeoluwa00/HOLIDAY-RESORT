import fetch from 'node-fetch';
import request from 'request';
const apiKey = 'AIzaSyB5ogo9sggZT1Lcw30dZU50Cbkx1gUDuAs';

const placeDetails = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=${apiKey}`;
//input place_id

//input photo ref

interface Use {
  [key: string]: number | string;
}
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=123%20main%20street&location=42.3675294,-71.186966&radius=10000&key=${apiKey}
// const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-75.1327,40.0115&radius=1500&type=restaurant&keyword=cruise&key=${apiKey}`;
let display: {}[];

export const places = (
  location: string,
  find: string,
  callback: (error: string | undefined, data: undefined | Use[]) => void,
) => {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${find}+${location}&key=${apiKey}`;

  request({ url, json: true }, async (error: string, {body: {results}}) => {
    //console.log(response.body.results[0].photos[0].html_attributions[0]);
    if (error) {
      callback('Unable to connect', undefined);
    } else {
      const output = [];
      const photoRef = [];
      // console.log(response.body.results[7])
      for (let i = 0; i < results.length; i++) {
        if(results[i].photos){

          let temp: {
            name: string;
            address: string;
            rating: number;
            photoRef: string | Promise<string>;
            place_id: string;
            htmlAtt: string;
          } = {
            name: results ? results[i]?.name : '',
            address: results ? results[i]?.formatted_address : '',
            rating: results ? results[i]?.rating : '',
            photoRef: results[i] ? await img(results[i]?.photos[0]?.photo_reference) : '',
            place_id: results ? results[i]?.place_id : '',
            htmlAtt: results ? results[i]?.photos[0]?.html_attributions : '',
          };
          console.log(temp)
          output.push(temp);
        }

      }

      display = output.sort((a, b) => b.rating - a.rating);
      // display = await Promise.all(display)
      callback(undefined, display);
    }
  });
};

// places('philadelphia', 'hotels', (error, response) => {});

async function img(url: string) {
  if(url){

    const placePhotos = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${url}&key=${apiKey}`;

    let val = await fetch(placePhotos);
    return val.url;
  }else {
    return ''
  }

}

