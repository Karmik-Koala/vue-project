<template>
    <div>
      <SendUserId />
    </div>
  </template>
  
  <script>
  
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { db } from "@/shared/database/FirebaseConfig";
  import { collection, addDoc } from 'firebase/firestore';

  export default {
    mounted() {
      const auth = getAuth();
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userId = user.uid;
          this.addToDatabase(userId);
        }
      });
    },
    methods: {
      async addToDatabase(userId) {
        const usuariosRef = collection(db, 'users');
  
        try {
          await addDoc(usuariosRef, {
            userId: userId,
            // Otros datos del usuario si los tienes
          });
          console.log('Usuario agregado a la base de datos');
        } catch (error) {
          console.error('Error al agregar usuario:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales para tu componente principal */
  </style>