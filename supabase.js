const supabaseUrl = "https://oqlgbmjcfrvagilkawkp.supabase.co";

const supabaseKey = "sb_publishable_jo_Kv1BCUr0mxoY6FcAnrw_9GEumP1z";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

console.log("Supabase Connected");
