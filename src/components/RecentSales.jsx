import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "$1,999.00",
  },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "$299.00",
  },
  { name: "William Kim", email: "will@email.com", amount: "$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00" },
];

export default function RecentSales() {
  return (
    <Card className="bg-neutral-900 text-white border border-neutral-800 p-6 rounded-lg max-w-lg">
      <CardContent>
        <h2 className="text-lg font-semibold">Recent Sales</h2>
        <p className="text-gray-400 text-sm mb-4">
          You made 265 sales this month.
        </p>
        <div className="space-y-4">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10 bg-gray-700 text-white rounded-full">
                  <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs text-gray-400">{sale.email}</p>
                </div>
              </div>
              <span className="text-sm font-semibold">{sale.amount}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
