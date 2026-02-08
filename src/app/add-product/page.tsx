"use client";

import { addProduct } from "@/actions/productActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function AddProduct() {
  return (
    <div className="col-span-9 flex items-center">
      <div className="grow max-w-xs mx-auto flex flex-col mb-16">
        <h1 className="font-bold mt-4 text-center">Add Product</h1>
        <form
          action={async (data: FormData) => {
            console.log(data.get("productId"));
            const productId = await addProduct(data.get("productId") as string);
            if (productId) {
              redirect(`/`);
            }
          }}
        >
          <label className="text-sm" htmlFor="productId">
            Product ID
          </label>
          <Input
            id="productId"
            name="productId"
            placeholder="Enter product ID, example B081F1Z927"
          />
          <div className="flex justify-center mt-4">
            <Button type="submit">Add product</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
