import { auth } from "@/auth";
import DashboardProductCard from "./DashboardProductCard";
import DashboardTopCard from "./DashboardTopCard";
import { prisma } from "@/lib/db";

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;
  if (!user || !user.email) {
    return null;
  }

  // get products from db for that specific email
  const products = await prisma.product.findMany({
    where: {
      userEmail: user.email,
    },
  });

  const productsId = products.map((p) => p.amazonId);
  const history = await prisma.productDataHistory.findMany({
    where: {
      amazonId: {
        in: productsId,
      },
    },
  });

  return (
    <div className="col-span-9">
      <h1 className="font-bold my-2">Dashboard</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        <DashboardTopCard title="Price" value="$29.99" />
        <DashboardTopCard title="Reviews" value="4.8" />
        <DashboardTopCard title="Ranking" value="352" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((p) => (
          <DashboardProductCard
            key={p.id}
            product={p}
            history={history.filter((h) => h.amazonId === p.amazonId)}
          />
        ))}
      </div>
    </div>
  );
}
