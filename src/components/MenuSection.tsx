"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import MenuItem from "./MenuItem";
import { Button } from "@/components/ui/button";

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  customizationOptions?: {
    title: string;
    options: { name: string; price?: number }[];
  }[];
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("chicken");
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample menu data
  const menuItems: MenuItemType[] = [
    {
      id: "1",
      name: "Chickenjoy Solo",
      description:
        "Jollibee's signature fried chicken - crispy on the outside, juicy on the inside",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
      category: "chicken",
      customizationOptions: [
        {
          title: "Spice Level",
          options: [{ name: "Regular" }, { name: "Spicy" }],
        },
        {
          title: "Sides",
          options: [
            { name: "Gravy", price: 0.5 },
            { name: "Extra Gravy", price: 1.0 },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Chickenjoy Bucket",
      description: "Perfect for sharing! 8 pieces of our famous Chickenjoy",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80",
      category: "chicken",
    },
    {
      id: "3",
      name: "Spicy Chickenjoy",
      description: "Our signature Chickenjoy with a spicy kick",
      price: 6.49,
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
      category: "chicken",
    },
    {
      id: "4",
      name: "Yumburger",
      description: "100% pure beef patty with Jollibee's special dressing",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
      category: "burgers",
    },
    {
      id: "5",
      name: "Big Yumburger",
      description: "Larger beef patty with cheese, lettuce, and tomatoes",
      price: 5.49,
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80",
      category: "burgers",
    },
    {
      id: "6",
      name: "Aloha Yumburger",
      description: "Beef patty with cheese and a slice of pineapple",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
      category: "burgers",
    },
    {
      id: "7",
      name: "Jolly Spaghetti",
      description: "Sweet-style spaghetti with ham, ground meat, and hotdog",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&q=80",
      category: "sides",
    },
    {
      id: "8",
      name: "Palabok Fiesta",
      description: "Filipino-style noodles with shrimp, pork, and egg",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80",
      category: "sides",
    },
    {
      id: "9",
      name: "Peach Mango Pie",
      description: "Crispy pie filled with peach and mango",
      price: 2.49,
      image:
        "https://images.unsplash.com/photo-1621743478914-cc8a68d76208?w=400&q=80",
      category: "desserts",
    },
    {
      id: "10",
      name: "Chocolate Sundae",
      description: "Vanilla soft serve with chocolate syrup",
      price: 1.99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
      category: "desserts",
    },
    {
      id: "11",
      name: "Pineapple Juice",
      description: "Refreshing pineapple juice",
      price: 1.99,
      image:
        "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80",
      category: "beverages",
    },
    {
      id: "12",
      name: "Soft Drink",
      description: "Your choice of soda",
      price: 1.49,
      image:
        "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&q=80",
      category: "beverages",
    },
  ];

  const categories = [
    { id: "chicken", name: "Chicken Joy" },
    { id: "burgers", name: "Burgers" },
    { id: "sides", name: "Sides" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );

  const handleItemClick = (item: MenuItemType) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-600">
          Our Menu
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover our delicious range of Jollibee favorites, from our
          world-famous Chickenjoy to mouthwatering burgers and desserts.
        </p>

        <Tabs
          defaultValue="chicken"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-red-50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="cursor-pointer"
                  >
                    <MenuItem
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Item Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-red-600">
                  {selectedItem.name}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                <p className="text-lg font-bold text-red-600 mb-4">
                  ${selectedItem.price.toFixed(2)}
                </p>

                {selectedItem.customizationOptions && (
                  <div className="space-y-4">
                    {selectedItem.customizationOptions.map((option, index) => (
                      <div key={index} className="border-t pt-4">
                        <h4 className="font-medium mb-2">{option.title}</h4>
                        <div className="space-y-2">
                          {option.options.map((opt, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between"
                            >
                              <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`option-${index}`}
                                  className="text-red-600"
                                />
                                <span>{opt.name}</span>
                              </label>
                              {opt.price && (
                                <span className="text-gray-600">
                                  +${opt.price.toFixed(2)}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Add to Order
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
