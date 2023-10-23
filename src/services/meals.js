import { getDocs, collection,addDoc, query, where } from "firebase/firestore";

import { db } from "../shared/database/FirebaseConfig";
import { CONSTANTS } from "@/constants";

const { API } = CONSTANTS;

export const getListMeals = async (filters) => {
  try {
    let url = `${API.BASE_URL}?app_id=${API.APP_ID}&app_key=${API.APP_KEY}&type=any`;

    for (const property in filters) {
      const value = filters[property];
      if (value) {
        url += `&${property}=${value}`;
      }
    }

    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getListFavoriteMeals = async () => {
  const itemsCollection = collection(db, "favorites");
  const snapshot = await getDocs(itemsCollection);

  return snapshot;
};

export const createFavoriteMeal = async (meal) => {
  const favoritesRef = collection(db, "favorites");
  try {
    await addDoc(favoritesRef, meal);
    console.log('Meals agregado a la base de datos');
  } catch (error) {
    console.error('Error al agregar meals:', error);
  }

}

export async function sendUserIdToDatabase(userId) {
  const usuariosRef = collection(db, 'favorites');

  // Verificar si el ID de usuario ya existe
  const q = query(usuariosRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    // El ID de usuario no existe, por lo que lo agregamos a la base de datos
    try {
      await addDoc(usuariosRef, {
        userId: userId,
        // Otros datos del usuario si los tienes
      });
      console.log('Usuario agregado a la base de datos');
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  } else {
    console.log('El ID de usuario ya existe en la base de datos');
  }
}

export const getRecipeeInfo = async (id) => {
  try {
    let url = `${API.BASE_URL}/${id}?app_id=${API.APP_ID}&app_key=${API.APP_KEY}&type=public`;

    const info = await fetch(url).then((res) => res.json());
    return info;
  } catch (error) {
    console.log(error);
  }
};
