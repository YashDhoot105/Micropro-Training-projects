import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

const  firebase= {
      apiKey: "AIzaSyCGVG-N0ZHDc6gw1q7VHGrRFVP6Y7DoV7U",
      authDomain: "conversify-5483b.firebaseapp.com",
      projectId: "conversify-5483b",
      storageBucket: "conversify-5483b.appspot.com",
      messagingSenderId: "886242904959",
      appId: "1:886242904959:web:9f12c5ecd455616880e84a",
      measurementId: "G-JZ937B31C4"
  }

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideFirebaseApp(() => initializeApp(firebase)),
    provideAuth(() => getAuth())
  ]
};
