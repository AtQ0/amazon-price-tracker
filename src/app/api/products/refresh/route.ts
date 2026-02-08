import { prisma } from "@/lib/db";
import { scrapeProduct } from "@/lib/productScraper";
import { isToday } from "date-fns";

export async function GET() {
  const products = await prisma.product.findMany();
  console.log(products);

  for (const product of products) {
    const latestHistoryDbData = await prisma.productDataHistory.findFirst({
      where: {
        amazonId: product.amazonId,
      },
    });
    if (latestHistoryDbData && isToday(latestHistoryDbData.createdAt)) {
      continue;
    }

    // put new data into history
    const newProductData = await scrapeProduct(product.amazonId);
    await prisma.productDataHistory.create({
      data: newProductData,
    });
  }
  return Response.json("ok");
}
