// Import Supabase
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Project URL
const SUPABASE_URL = "https://oqlgbmjcfrvagilkawkp.supabase.co";

// Publishable Key
const SUPABASE_KEY = "sb_publishable_jo_Kv1BCUr0mxoY6FcAnrw_9GEumP1z";

// Connect
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log("Supabase Connected");
