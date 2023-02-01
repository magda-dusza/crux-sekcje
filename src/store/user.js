import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async signIn(email, password) {
      const auth = getAuth()
      return signInWithEmailAndPassword(auth, email, password) 
      .then((data) => {
        console.log('Successfully logged in!', data);
        this.user = data.user;
        return { data, error: null}
      })
      .catch(error => {
        return { error: createErrorMessage(error), data: null}
      });
    },
  },
});

const createErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/invalid-email':
        return 'Invalid email'
    case 'auth/user-not-found':
        return 'No account with that email was found'
    case 'auth/wrong-password':
        return 'Incorrect password'
    default:
        return 'Email or password was incorrect'
  }
}