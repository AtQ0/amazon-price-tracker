import LineChart from "./LineChart";
import { Card } from "./ui/card";
import type { Product, ProductDataHistory } from "@prisma/client";
import TimeAgo from "./TimeAgo";

export default function DashboardProductCard({
  product,
  history,
}: {
  product: Product;
  history: ProductDataHistory[];
}) {
  return (
    <Card className="py-4 px-4 overflow-hidden">
      <div className="flex gap-4 items-center">
        <div className="w-22 h-22 flex justify-center items-center">
          {" "}
          <img src={product.img} className="max-h-22 w-auto" alt="" />
        </div>
        <div className="grow">
          <h3 className="font-bold">Amazon echo Dot</h3>
          <div className="flex">
            <div className="">
              <h4 className="my-3">{product.price / 100}kr</h4>
              <h5 className="text-xs text-gray-600">
                <TimeAgo date={product.updatedAt} />
              </h5>
            </div>
            <div className="grow pt-4">
              <LineChart
                data={history.map((hp) => ({
                  x: hp.createdAt.toLocaleDateString(),
                  price: hp.price / 100,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
