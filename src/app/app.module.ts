import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from 'src/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCXSUY08gP_Bx0PErQmEZ4OLKPtcB-UuUQ",
//   authDomain: "angular-fitness-app-7805e.firebaseapp.com",
//   databaseURL: "https://angular-fitness-app-7805e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "angular-fitness-app-7805e",
//   storageBucket: "angular-fitness-app-7805e.appspot.com",
//   messagingSenderId: "240025049991",
//   appId: "1:240025049991:web:23ac7c29f78c2d5185d122",
//   measurementId: "G-209CXPYNKL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
