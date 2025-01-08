import { SUPABASE_ANON_KEY, SUPABASE_URL, TOKEN } from '../config';

export const getAuthenticatedUser = async () => {
  const API_URL = `${SUPABASE_URL}/auth/v1/user` 
//   const API_URL = `${SUPABASE_URL}/rest/v1/profiles?select=id,name,email,role` 
  let data = await fetch(API_URL, {
    headers: {
      ContnetType:  'application/json',
      apikey: SUPABASE_ANON_KEY,  
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  data = await data.json();
  return data
};