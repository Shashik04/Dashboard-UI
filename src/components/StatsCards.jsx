import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: <DollarSign />,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1% from last month",
    icon: <Users />,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19% from last month",
    icon: <ShoppingCart />,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: <Activity />,
  },
];

export default function StatsCards() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-black text-white"
      // style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-neutral-900 text-white border border-neutral-800 p-4 rounded-lg"
          // style={{ border: "1px solid black", padding: "10px" }}
        >
          <CardContent className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{stat.title}</span>
              <span className="text-gray-400">{stat.icon}</span>
            </div>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p className="text-sm text-gray-400">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
