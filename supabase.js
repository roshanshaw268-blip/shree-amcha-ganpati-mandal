const supabaseUrl = "https://oqlgbmjcfrvagilkawkp.supabase.co";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

window.sb = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

alert(typeof window.sb.storage);
