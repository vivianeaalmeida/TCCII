import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

@Injectable({
    providedIn: 'root'
    })
export class FirebaseService {
    
    // TODO: Replace the following with your app's Firebase project configuration
    firebaseConfig = {
        apiKey: "AIzaSyCMUPHRH1_MS8U-mVNJaCS6AXnGYsvH4S4",
        authDomain: "pequenospassos-22.firebaseapp.com",
        projectId: "pequenospassos-22",
        storageBucket: "pequenospassos-22.appspot.com",
        messagingSenderId: "420818323110",
        appId: "1:420818323110:web:9986a34a64813ddcc05667"
    };

    app = initializeApp(this.firebaseConfig);
    db: Firestore = getFirestore(this.app);

    // Get a list of cities from your database
    public async getCities() {
        const citiesCol = collection(this.db, 'cities');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        return cityList;
    }
}


