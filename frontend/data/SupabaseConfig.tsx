import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://ytnlaxyukkahwdqzrkgy.supabase.co",
  "sb_publishable_5OzhFlx4xFJbqQwDw9pEAg_rQzQNb2n",
  {
   auth: {
    storage: null,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
   },
  })