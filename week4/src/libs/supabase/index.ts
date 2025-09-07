import { createClient } from '@supabase/supabase-js'
import type {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './database.types'

const { VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY } = import.meta.env

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY)

export default supabase

export type Profile = Tables<'profiles'>
export type Insert = TablesInsert<'profiles'>
export type Update = TablesUpdate<'profiles'>
