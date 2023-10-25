import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../shared/database/FirebaseConfig";
import { useAuthStore } from "@/auth/stores/authStore.js";
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
 * Get a list of favorite meals for the currently authenticated user.
 *
 * @returns {Promise<Array<Object>>} A Promise that resolves to an array of favorite meal objects.
 * @example
 * const favoriteMeals = await getListFavoriteMeals();
 */
export const getListFavoriteMeals = async () => {
  const authStore = useAuthStore();
  const userId = authStore?.user?.uid;

  if (!userId) return [];

  const favoritesRef = collection(db, "favorites");
  const data = [];

  try {
    const q = query(favoritesRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return data;

    querySnapshot.forEach((doc) => {
      const meal = doc.data();
      data.push(meal);
    });
  } catch (error) {
    console.log(error);
  }

  return data;
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
 * Delete a favorite meal from the "favorites" collection by its ID.
 *
 * @param {string} mealId - The ID of the meal to delete.
 * @returns {Promise} A Promise that resolves when the meal is successfully deleted, or rejects on error.
 * @example
 * const mealIdToDelete = MEAL_ID;
 * deleteFavoriteMeal(mealIdToDelete)
 *   .then(() => {
 *     console.log("Meal deleted successfully.");
 *   })
 *   .catch((error) => {
 *     console.error("Error deleting meal:", error);
 *   });
 */
export const deleteFavoriteMeal = async (mealId) => {
  const favoritesRef = collection(db, "favorites");

  try {
    const q = query(favoritesRef, where("id", "==", mealId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return;

    const docToDelete = querySnapshot.docs[0];

    const docRef = doc(db, "favorites", docToDelete.id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error al agregar meals:", error);
  }
};

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
