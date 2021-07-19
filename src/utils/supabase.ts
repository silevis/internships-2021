import { createClient } from '@supabase/supabase-js';

const supabaseUrl = String(process.env.REACT_APP_SUPABASE_URL);
const supabaseKey = String(process.env.REACT_APP_SUPABASE_TOKEN);
export const supabase = createClient(supabaseUrl, supabaseKey);

// REACT_APP_SUPABASE_URL=xxx REACT_APP_SUPABASE_TOKEN=xxx npm run start

export default supabase;
