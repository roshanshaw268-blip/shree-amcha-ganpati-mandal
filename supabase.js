const supabaseUrl = "https://oqlgbmjcfrvagilkawkp.supabase.co";

const supabaseKey = "sb_publishable_jo_Kv1BCUr0mxoY6FcAnrw_9GEumP1z";

window.sb = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

alert(typeof window.sb.storage);
