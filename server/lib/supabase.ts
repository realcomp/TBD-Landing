import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

export const supabase = {
    get client(): SupabaseClient {
        if (supabaseInstance) return supabaseInstance;

        const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

        if (!supabaseUrl || !supabaseServiceKey) {
            throw new Error('Supabase credentials missing in environment variables (checked VITE_SUPABASE_URL/SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY/VITE_SUPABASE_SERVICE_ROLE_KEY)');
        }

        supabaseInstance = createClient(supabaseUrl, supabaseServiceKey);
        return supabaseInstance;
    },

    from(table: string) {
        return this.client.from(table);
    }
};
