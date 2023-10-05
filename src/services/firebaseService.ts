import { Injectable } from '@angular/core';
import { id } from 'date-fns/locale';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, Firestore, where, query } from 'firebase/firestore/lite';
import { Register } from 'src/app/interfaces/register';
import { Student } from 'src/app/interfaces/student';
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

    // Get a list of students from database
    public async getStudents() {
        const studentsCollection = collection(this.db, 'students');
        const studentSnapshot = await getDocs(studentsCollection);
        const studentsList: Student[] = studentSnapshot.docs.map(doc => {
            const studentData = {
                id: doc.id,
                idResponsiblePerson: doc.data()['idResponsiblePerson'],
                name: doc.data()['name'] 
            } as Student;
            return studentData;  //map e depois retorno aluno por aluno para studentList
        });
        return studentsList;
    }

    public async getRegistersByStudentAndDate(idStudent: string, occurenceDate: string): Promise<Register | undefined>{
        const registersCollection = collection(this.db, 'register');
        const q = query(registersCollection,
            where('idStudent', '==', idStudent),
            where('occurenceDate', '==', occurenceDate) //nome da "prop" da db = ao parametro recebido para busca
        );

        
        const registerSnapshot = await getDocs(q);
        const registersList: Register[] = registerSnapshot.docs.map(doc => {
            const registerData = {
                id: doc.id,
                idStudent:  doc.data()['idStudent'],
                sleep: doc.data()['sleep'],
                activities: doc.data()['activities'],
                health: doc.data()['health'],
                incidents: doc.data()['incidents'],
                occurenceDate: doc.data()['occurenceDate']
            } as Register;
            return registerData;  //map e depois retorno aluno por aluno para studentList
        });
        return registersList.find( qualquer => qualquer.idStudent);
    }

    //nome Variavel -> register - recebe o obj Register, criado no register.ts
    public async saveRegister(register: Register) {
        try {
            const registerCol = collection(this.db, 'register');
            await addDoc(registerCol, register);
            return true; // Retorna true se o registro foi adicionado com sucesso
        } catch (error) {
            console.error('Erro ao adicionar cidade:', error);
            return false; // Retorna false se ocorrer um erro
        }
    }

    public async editCity(cityId: string, newData: any) {
        try {
            const cityRef = doc(this.db, 'cities', cityId);
            await setDoc(cityRef, newData); // Use setDoc para substituir completamente o documento ou use updateDoc para fazer uma atualização parcial
            return true; // Retorna true se a edição foi bem-sucedida
        } catch (error) {
            console.error('Erro ao editar cidade:', error);
            return false; // Retorna false se ocorrer um erro
        }
    }
}


