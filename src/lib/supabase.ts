
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// Use esta função para criar o cliente Supabase em Componentes de Cliente
export const createClient = () => {
  return createClientComponentClient();
};
