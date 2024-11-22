import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StockPage = () => {
  // Example stock data (replace with real data or fetch from an API)
  const stocks = [
    { id: 1, name: "Apple", symbol: "AAPL", price: "$145", description: "Apple Inc. is a multinational technology company." },
    { id: 2, name: "Tesla", symbol: "TSLA", price: "$720", description: "Tesla, Inc. is an electric vehicle and clean energy company." },
    { id: 3, name: "Amazon", symbol: "AMZN", price: "$3,300", description: "Amazon.com, Inc. is a multinational technology company." },
  ];

  const [selectedStock, setSelectedStock] = useState(null);

  const navigate = useNavigate();

  // Show stock details when clicked
  const handleStockClick = (stock) => {
    setSelectedStock(stock);
    navigate(`/stocks/${stock.id}`); // Navigates to a dynamic URL for stock details
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Stocks</h1>
      
      {/* If no stock is selected, display stock list */}
      {!selectedStock ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocks.map((stock) => (
            <div
              key={stock.id}
              className="border p-4 rounded-lg cursor-pointer hover:bg-gray-200"
              onClick={() => handleStockClick(stock)}
            >
              <h2 className="text-xl font-semibold">{stock.name} ({stock.symbol})</h2>
              <p className="text-gray-500">{stock.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Stock detail view */}
          <h2 className="text-3xl font-semibold mb-4">{selectedStock.name} ({selectedStock.symbol})</h2>
          <p className="text-lg">{selectedStock.description}</p>
          <p className="text-xl mt-4">Current Price: {selectedStock.price}</p>
        </div>
      )}
    </div>
  );
};

export default StockPage;
