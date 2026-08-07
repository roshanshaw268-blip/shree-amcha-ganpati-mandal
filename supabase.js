const supabaseUrl = "https://oqlgbmjcfrvagilkawkp.supabase.co";
const supabaseKey = "YOUR_PUBLISHABLE_KEY";

window.supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

alert("Supabase Connected");
