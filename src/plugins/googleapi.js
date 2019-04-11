// import something here
import VueGoogleApi from 'vue-google-api'
 
const config = {
  apiKey: 'AIzaSyC6Yw4b_1gsSAW7VYJ4w_9JJP0k1beLSuk',
  clientId: '520837015873-ss9kdrc6ad1insnb57pg4ruqeo6cqehh.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/photoslibrary',
  discoveryDocs: [ "https://photoslibrary.googleapis.com/$discovery/rest?version=v1" ]
}


// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.use(VueGoogleApi, config)
  //Vue.prototype.$gapi = VueGoogleApi
}
