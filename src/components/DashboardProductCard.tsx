import LineChart from "./LineChart";
import { Card } from "./ui/card";

export default function DashboardProductCard() {
  return (
    <Card className="py-4 px-4 overflow-hidden">
      <div className="flex gap-4">
        <div className="w-24">
          {" "}
          <img
            src="https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_SL1000_.jpg"
            alt=""
          />
        </div>
        <div className="relative grow -mb-4 flex items-end">
          <div className="absolute top-0">
            <h3 className="font-bold">Amazon echo Dot</h3>
            <h4>$49.99</h4>
            <h5 className="text-xs text-gray-600">4 hours ago</h5>
          </div>
          <div className="grow -ml-2 -mr-7">
            {" "}
            <LineChart />
          </div>
        </div>
      </div>
    </Card>
  );
}
