import { getDocs, collection, addDoc, query, where } from "firebase/firestore";

import { db } from "../shared/database/FirebaseConfig";
import { CONSTANTS } from "@/constants";

const { API } = CONSTANTS;

/**
 * Get a list of meals based on the provided filters.
 *
 * @param {Object} filters - Filters to apply to the meal list.
 * @returns {Promise} A Promise that resolves to the meal data.
 * @example
 * const filters = {
 *   q: 'Coffe',
 * };
 * const meals = await getListMeals(filters);
 */
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

/**
 * Get a list of favorite meals from the database.
 *
 * @returns {Promise} A Promise that resolves to a snapshot of favorite meals.
 * @example
 * const favoriteMealsSnapshot = await getListFavoriteMeals();
 */
export const getListFavoriteMeals = async () => {
  const itemsCollection = collection(db, "favorites");
  const snapshot = await getDocs(itemsCollection);

  return snapshot;
};

/**
 * Create a favorite meal in the database.
 *
 * @param {Object} meal - The meal to add to favorites.
 * @example
 * const newFavoriteMeal = {
 *   id: {UID},
 *   label: 'Spaghetti Carbonara',
 *   image: {IMAGE},
 *   totalNutrients: [],
 *   userId: {USER_UID},
 * };
 * createFavoriteMeal(newFavoriteMeal);
 */
export const createFavoriteMeal = async (meal) => {
  const favoritesRef = collection(db, "favorites");
  try {
    await addDoc(favoritesRef, meal);
    console.log("Meals agregado a la base de datos");
  } catch (error) {
    console.error("Error al agregar meals:", error);
  }
};

/**
 * Send a user's ID to the database if it doesn't already exist.
 *
 * @param {string} userId - The user's ID to send to the database.
 * @example
 * const userId = '12345';
 * sendUserIdToDatabase(userId);
 */
export async function sendUserIdToDatabase(userId) {
  const usuariosRef = collection(db, "favorites");

  // Verificar si el ID de usuario ya existe
  const q = query(usuariosRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    // El ID de usuario no existe, por lo que lo agregamos a la base de datos
    try {
      await addDoc(usuariosRef, {
        userId: userId,
        // Otros datos del usuario si los tienes
      });
      console.log("Usuario agregado a la base de datos");
    } catch (error) {
      console.error("Error al agregar usuario:", error);
    }
  } else {
    console.log("El ID de usuario ya existe en la base de datos");
  }
}

/**
 * Get detailed information about a recipe by its ID.
 *
 * @param {string} id - The ID of the recipe to fetch.
 * @returns {Promise} A Promise that resolves to recipe information.
 * @example
 * const recipeId = '56789';
 * const recipeInfo = await getRecipeInfo(recipeId);
 */
export const getRecipeeInfo = async (id) => {
  try {
    let url = `${API.BASE_URL}/${id}?app_id=${API.APP_ID}&app_key=${API.APP_KEY}&type=public`;

    const info = await fetch(url).then((res) => res.json());
    return info;
  } catch (error) {
    console.log(error);
  }
};
