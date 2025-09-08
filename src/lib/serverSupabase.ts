import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("As chaves do Supabase não foram carregadas no servidor.");
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
});
