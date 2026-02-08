export async function scrapeProduct(productId: string) {
  const response = await fetch("https://scraper-api.decodo.com/v2/scrape", {
    method: "POST",
    body: JSON.stringify({
      target: "amazon_product",
      query: productId,
      domain: "se",
      parse: true,
      autoselect_variant: false,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.DECODO_BASIC_TOKEN}`,
    },
  });

  if (!response) {
    throw new Error("Failed to get a response");
  }

  const data = await response.json();
  const productInfo = data.results?.[0].content?.results;
  const { title, images, rating, price_buybox, reviews_count } = productInfo;

  return {
    title,
    img: images[0],
    price: price_buybox * 100,
    reviewsCount: reviews_count,
    reviewsAverageRating: rating * 10,
    amazonId: productId,
  };
}
