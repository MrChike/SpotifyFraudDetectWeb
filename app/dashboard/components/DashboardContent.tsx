"use client";

import React, { useEffect, useState } from "react";

import Box from "@/components/Box";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Play } from "lucide-react";

const revenueData = [
  { name: "Jan", income: 500000, expenses: 100000 },
  { name: "Feb", income: 700000, expenses: 150000 },
  { name: "Mar", income: 300000, expenses: 120000 },
  { name: "Apr", income: 400000, expenses: 200000 },
  { name: "May", income: 500000, expenses: 250000 },
  { name: "Jun", income: 450000, expenses: 200000 },
  { name: "Jul", income: 600000, expenses: 180000 },
  { name: "Aug", income: 800000, expenses: 500000 },
  { name: "Sep", income: 300000, expenses: 150000 },
  { name: "Oct", income: 700000, expenses: 100000 },
  { name: "Nov", income: 900000, expenses: 200000 },
  { name: "Dec", income: 1000000, expenses: 300000 }
];

const genreData = [
  { genre: "Pop", streams: 2435545 },
  { genre: "Hip-Hop/Rap", streams: 1100343 },
  { genre: "Electronic/Dance", streams: 850122 },
  { genre: "Indie/Alternative", streams: 712676 },
  { genre: "Classical", streams: 314434 }
];

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-black text-white">
      <Box className="col-span-3 flex justify-between p-4">
        <Box>Tracks Listened: 2,532 (+6.8%)</Box>
        <Box>Artist Discovery: 128 (+11%)</Box>
        <Box>Listening Time: 127,222 min (-1.2%)</Box>
      </Box>

      <Box className="col-span-3">
        <h2 className="p-4">Revenue Data (Total Profit: 54,769)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#bbb" />
            <YAxis stroke="#bbb" />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="green" strokeWidth={2} />
            <Line type="monotone" dataKey="expenses" stroke="red" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Box>
        <h2 className="p-4">Most Popular Albums</h2>
        <ul className="p-4">
          {["Ed Sheeran", "Beyonce", "Katy Perry", "Boris Brejcha", "Shakira", "Rihanna", "Eminem"].map((artist, index) => (
            <li key={index} className="py-2">{artist}</li>
          ))}
        </ul>
      </Box>

      <Box>
        <h2 className="p-4">Most Popular Tracks</h2>
        {["Real Slim Shady", "Where the hood at", "Maria Maria"].map((track, index) => (
          <div key={index} className="flex justify-between p-4 border-b border-gray-700">
            <span>{track}</span>
            <Play className="w-4 h-4" />
          </div>
        ))}
      </Box>

      <Box className="col-span-3">
        <h2 className="p-4">Top Performing Genres</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={genreData} layout="vertical">
            <CartesianGrid stroke="#444" />
            <XAxis type="number" stroke="#bbb" />
            <YAxis dataKey="genre" type="category" stroke="#bbb" width={150} />
            <Tooltip />
            <Bar dataKey="streams" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}
