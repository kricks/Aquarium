// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUri = 'http://localhost:8080/';

export const environment = {
  production: false,
  baseUri: baseUri,
  firebase: {
    apiKey: 'AIzaSyB_SpBHe6kFvKp7TMrTSOu-aRQRfyhm-B8',
    authDomain: 'aquarium-builder.firebaseapp.com',
    databaseURL: 'https://aquarium-builder.firebaseio.com',
    projectId: 'aquarium-builder',
    storageBucket: 'aquarium-builder.appspot.com',
    messagingSenderId: '530948337246',
    appId: '1:530948337246:web:609d4cce20d3afc0510ecf'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
