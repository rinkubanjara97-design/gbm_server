import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || url.includes('your-supabase-project')) {
    return null
  }

  try {
    return createSupabaseClient(url.trim(), key.trim())
  } catch (err) {
    console.error('Error creating Supabase client:', err)
    return null
  }
}

export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || url.includes('your-supabase-project')) {
    return null
  }

  try {
    return createSupabaseClient(url.trim(), key.trim(), {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  } catch (err) {
    console.error('Error creating Supabase Admin client:', err)
    return null
  }
}
