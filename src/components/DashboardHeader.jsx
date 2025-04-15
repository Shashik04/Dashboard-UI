import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function DashboardHeader() {
  // ✅ Initialize with null values for proper behavior
  const [date, setDate] = useState({ from: null, to: null });

  return (
    <div className="flex flex-wrap justify-between items-center bg-black text-white p-4">
      {/* Left Section */}
      <div className="w-full md:w-auto">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Tabs defaultValue="overview" className="mt-2">
          <TabsList className="bg-neutral-900 text-white flex flex-wrap">
            <TabsTrigger
              value="overview"
              className="cursor-pointer hover:bg-purple-900"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="cursor-pointer" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="cursor-pointer" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="cursor-pointer"
              disabled
            >
              Notifications
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Right Section */}
      <div className="relative top-6 flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
        {/* Date Picker  */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-white px-4 py-2 w-full md:w-auto"
            >
              <CalendarIcon size={16} />
              <span>
                {date.from && date.to
                  ? `${format(date.from, "MMM dd, yyyy")} - ${format(
                      date.to,
                      "MMM dd, yyyy"
                    )}`
                  : "Select date"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 bg-black text-white">
            <Calendar
              mode="range"
              selected={date}
              onSelect={(range) => setDate(range)} // ✅ Fixed: Directly update state
              numberOfMonths={1} // ✅ Better UX with two months
            />
          </PopoverContent>
        </Popover>

        {/* Download Button */}
        <Button className="px-4 py-2 rounded-lg bg-white text-black cursor-pointer w-full md:w-auto hover:bg-purple-900">
          Download
        </Button>
      </div>
    </div>
  );
}
