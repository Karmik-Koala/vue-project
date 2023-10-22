<template>
    <div>
    </div>
  </template>
  
  <script>

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { sendUserIdToDatabase } from "@/services/meals.js";

  export default {
    mounted() {
      const auth = getAuth();
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userId = user.uid;
          sendUserIdToDatabase(userId);

        }
      });
    },
    methods: {
      
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales para tu componente */
  </style>