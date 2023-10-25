import { useAuthStore } from "@/auth/stores/authStore.js";

/**
 * Check if the user is authenticated.
 *
 * @returns {boolean} A boolean value indicating whether the user is authenticated.
 * @example
 * if (isAuthenticated()) {
 *   console.log('User is authenticated');
 * } else {
 *   console.log('User is not authenticated');
 * }
 */
export const isAuthenticated = () => {
  const authStore = useAuthStore();
  return authStore?.user?.uid;
};
