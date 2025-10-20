'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/browser';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    async function handleSession() {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace('/home');
      else router.replace('/login');
    }
    handleSession();
  }, [router]);

  return <p>Finalizando login...</p>;
}
