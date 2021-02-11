
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDI_5vfn_U_-tC9jJqhNvcFo-LlcDomDog",
    authDomain: "tiendautt.firebaseapp.com",
    projectId: "tiendautt",
    storageBucket: "tiendautt.appspot.com",
    messagingSenderId: "942854942057",
    appId: "1:942854942057:web:c7cb1a0ef36a1d536921f8"
  },
  collection: 'products'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
