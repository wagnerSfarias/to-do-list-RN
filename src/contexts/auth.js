import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@authuser');
 
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        
        loadStorage();
     }, []);
  
    async function signIn(email, password){
       
        setLoadingAuth(true);
        await auth().signInWithEmailAndPassword(email,password)
        .then( async (user)=>{
           
            let uid = user.user.uid;
            const userProfile = await firestore().collection('users')
            .doc(uid).get();
    
            let data ={
                uid: uid,
                nome: userProfile.data().nome,
            };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                
        })     
        .catch((error)=> {
            if (error.code === 'auth/user-not-found') {
                Alert.alert(
                    "Atenção !!",
                    "Email inválido!",
                    [
                      { text: "OK" }
                    ]
                  )
              }
            else if(error.code ==='auth/wrong-password'){
                Alert.alert(
                    "Atenção !!",
                    "Senha inválida!",
                    [
                      { text: "OK" }
                    ]
                  )
              }else{
                Alert.alert(
                    "Atenção !!",
                    "Email e senha inválidos!",
                    [
                      { text: "OK" }
                    ]
                  )
              }

            setLoadingAuth(false);
        });
      
    }

    async function signUp(email, password, name){    
        setLoadingAuth(true);
       
        await auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            value.user.updateProfile({
                displayName: name
              })
            await firestore().collection('users')
            .doc(uid).set({
                nome:name,
                createdAt: new Date(),
            }).then(()=>{
                let data ={
                    uid: uid,
                    nome: name
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })         
        
    })       
        .catch((error)=> {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert(
                    "Atenção !!",
                    "Email já está em uso!",
                    [
                      { text: "OK" }
                    ]
                  )
              }
         if (error.code === 'auth/invalid-email') {
            Alert.alert(
                "Atenção !!",
                "Email inválido!",
                [
                  { text: "OK" }
                ]
              )
              }
            setLoadingAuth(false);
        });        
    }

    async function signOut(){
        await auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
           setUser(null); 
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('@authuser', JSON.stringify(data));
    }


    return(
     <AuthContext.Provider value={{ signed: !!user, signUp, signIn, signOut, loadingAuth, user, loading, storageUser}}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;
