import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Avatar } from "@/components/ui/avatar";
import RecentSales from "./RecentSales";

const data = [
  { name: "Jan", revenue: 3000 },
  { name: "Feb", revenue: 6000 },
  { name: "Mar", revenue: 3500 },
  { name: "Apr", revenue: 2500 },
  { name: "May", revenue: 5500 },
  { name: "Jun", revenue: 5200 },
  { name: "Jul", revenue: 4000 },
  { name: "Aug", revenue: 3200 },
  { name: "Sep", revenue: 5000 },
  { name: "Oct", revenue: 5800 },
  { name: "Nov", revenue: 3000 },
  { name: "Dec", revenue: 6000 },
];

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

export default function Graph() {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-black text-white w-full"
        // style={{ width: "60%" }}
      >
        {/* Overview Chart */}
        <Card className="md:col-span-2 bg-neutral-900 text-white border border-neutral-800 p-4 rounded-lg">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Bar dataKey="revenue" fill="white" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </div>
  );
}
