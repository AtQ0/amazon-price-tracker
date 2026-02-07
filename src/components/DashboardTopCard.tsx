import { Card } from "./ui/card";
import LineChart from "./LineChart";

export default function DashboardTopCard({
  title = "Price",
  value = "$29.99",
}) {
  return (
    <Card className="pt-4 pb-0">
      <div className="flex justify-between p-0 relative">
        <div className="absolute top-1 left-4">
          {title} <br />
          <span className="font-bold">{value}</span>
        </div>
        <div className="grow h-24 overflow-hidden rounded-bl-xl">
          <div className="-mx-3 ">
            <LineChart />
          </div>
        </div>
      </div>
    </Card>
  );
}
