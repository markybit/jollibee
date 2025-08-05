"use client";

import React, { useState } from "react";
import { Search, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  distance?: string;
  isOpen: boolean;
}

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // Mock data for stores
  const mockStores: Store[] = [
    {
      id: "1",
      name: "Jollibee Times Square",
      address: "1500 Broadway",
      city: "New York",
      state: "NY",
      zip: "10036",
      phone: "(212) 555-1234",
      hours: "10:00 AM - 10:00 PM",
      distance: "0.5 miles",
      isOpen: true,
    },
    {
      id: "2",
      name: "Jollibee Downtown",
      address: "100 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "(212) 555-5678",
      hours: "9:00 AM - 11:00 PM",
      distance: "1.2 miles",
      isOpen: true,
    },
    {
      id: "3",
      name: "Jollibee Brooklyn",
      address: "500 Atlantic Ave",
      city: "Brooklyn",
      state: "NY",
      zip: "11217",
      phone: "(718) 555-9012",
      hours: "10:00 AM - 9:00 PM",
      distance: "3.7 miles",
      isOpen: false,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would filter stores based on the search query
    // or make an API call to get nearby stores
    console.log("Searching for:", searchQuery);
  };

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
  };

  const handleGetDirections = () => {
    if (selectedStore) {
      const address = `${selectedStore.address}, ${selectedStore.city}, ${selectedStore.state} ${selectedStore.zip}`;
      window.open(
        `https://maps.google.com/maps?q=${encodeURIComponent(address)}`,
        "_blank",
      );
    }
  };

  return (
    <section className="w-full py-16 bg-white" id="store-locator">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Search Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Enter ZIP code or address"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button
                      type="submit"
                      className="rounded-l-none bg-red-600 hover:bg-red-700"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>

                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Nearby Locations</h3>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto">
                    {mockStores.map((store) => (
                      <div
                        key={store.id}
                        className={`p-3 border rounded-md cursor-pointer transition-colors ${selectedStore?.id === store.id ? "bg-yellow-50 border-yellow-400" : "hover:bg-gray-50"}`}
                        onClick={() => handleStoreSelect(store)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{store.name}</h4>
                            <p className="text-sm text-gray-600">
                              {store.address}
                            </p>
                            <p className="text-sm text-gray-600">
                              {store.city}, {store.state} {store.zip}
                            </p>
                          </div>
                          <div className="text-sm">
                            <span className="block text-right">
                              {store.distance}
                            </span>
                            <span
                              className={`block text-right ${store.isOpen ? "text-green-600" : "text-red-600"}`}
                            >
                              {store.isOpen ? "Open" : "Closed"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="map">Map</TabsTrigger>
                <TabsTrigger value="details">Store Details</TabsTrigger>
              </TabsList>
              <TabsContent value="map" className="h-[500px]">
                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                  {/* In a real implementation, this would be a map component */}
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto text-red-600 mb-2" />
                    <p className="text-gray-600">
                      Interactive map would be displayed here
                    </p>
                    <p className="text-sm text-gray-500">
                      Using Google Maps or similar service
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="details">
                {selectedStore ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-red-600">
                        {selectedStore.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-2 text-red-600 mt-0.5" />
                        <div>
                          <p>{selectedStore.address}</p>
                          <p>
                            {selectedStore.city}, {selectedStore.state}{" "}
                            {selectedStore.zip}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-red-600" />
                        <p>{selectedStore.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-red-600" />
                        <div>
                          <p>{selectedStore.hours}</p>
                          <p
                            className={`text-sm ${selectedStore.isOpen ? "text-green-600" : "text-red-600"}`}
                          >
                            {selectedStore.isOpen ? "Open Now" : "Closed Now"}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 flex space-x-3">
                        <Button
                          onClick={handleGetDirections}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> Get
                          Directions
                        </Button>
                        <Button
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-50"
                        >
                          Order from this Location
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-gray-500">
                      Select a store to view details
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
