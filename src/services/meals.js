import { getDocs, collection } from "firebase/firestore";
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
