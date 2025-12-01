import {supabaseClient} from "../supabaseClient"



// rendering statis data (products.map) and ProductCard

async function getProducts() {
  const { data, error } = await supabaseClient.from("products").select("*");
  if (error) throw error;
  return data;
}

export default getProducts;

// fetch products from supabase(database)
