import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Adiciona uma verificação de segurança para garantir que as chaves existam.
if (!supabaseUrl || !supabaseKey) {
  console.error("Erro de configuração: As chaves do Supabase não foram carregadas corretamente. Verifique o seu arquivo .env.local.");
  throw new Error("As chaves do Supabase não foram carregadas corretamente. Verifique o seu arquivo .env.local.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);