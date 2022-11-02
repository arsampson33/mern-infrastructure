//? Organize functions used to sign-up, log in, log out, etc.

import * as userAPI from "./users-api";

export async function signUp(userData){
try {
  
  const token = await userAPI.signUp(userData)
  //Persist the token
  localStorage.setItem('token', token)
  return getUser()
} catch(error){

}
}

export function getToken() {
  //returns null if no token
  const token = localStorage.getItem('token')
  if (!token) return null;
  //Obtain the payload
  const payload = JSON.parse(atob(token.split('.')[1]))
  //removed token if expired
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token')
    return null
  }
return token

}

export function getUser(){
  const token = getToken();
  //if there is a token return the user in the payload
  return token ? JSON.parse(atob(token.split(".")[1])).user : null
}
export const logOut = () => {
  localStorage.removeItem('token')
}

export async function login(userData){
  try {
    const token = await userAPI.login(userData)
    //Persist the token
    localStorage.setItem('token', token)
    return getUser()
  } catch(error){
  
  }
  }