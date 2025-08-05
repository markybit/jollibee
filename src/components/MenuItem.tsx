import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface MenuItemProps {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
}

const MenuItem = ({
  id = "1",
  name = "Chickenjoy",
  description = "Jollibee's signature fried chicken that's crispy on the outside, tender and juicy on the inside.",
  price = 5.99,
  image = "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
  category = "Chicken",
}: MenuItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>

      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-red-600">{name}</h3>
          <span className="font-bold text-lg">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </CardContent>

      <CardFooter className="pt-0 pb-4">
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          <PlusCircle className="mr-2 h-4 w-4" /> Add to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
