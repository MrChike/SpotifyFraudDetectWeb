// import { useState } from "react";
// import { Bar, Line } from "recharts";
// import { Search, User, Play, ChevronRight } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Dashboard() {
//   return (
//     <div className="flex min-h-screen bg-black text-white">
//       {/* Sidebar */}
//       <aside className="w-64 p-4 bg-zinc-900">
//         <h1 className="text-green-500 text-lg font-bold">Spotify</h1>
//         <nav className="mt-6">
//           {[
//             "Dashboard",
//             "Artist Roaster",
//             "Releases",
//             "Analytics",
//             "Campaigns",
//             "Settings",
//           ].map((item) => (
//             <div key={item} className="p-2 text-gray-300 hover:text-white cursor-pointer">
//               {item}
//             </div>
//           ))}
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="relative">
//             <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-zinc-800 text-white pl-8 pr-4 py-2 rounded-lg focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <User className="text-gray-400" />
//             <button className="bg-zinc-700 px-4 py-2 rounded-lg">Log in or create account</button>
//           </div>
//         </div>

//         {/* Engagement Overview */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           {["Track Listened", "Artist Discovery", "Listening Time"].map((item, index) => (
//             <Card key={index} className="p-4 bg-zinc-800">
//               <CardContent>
//                 <h3 className="text-lg font-semibold">{item}</h3>
//                 <p className="text-xl font-bold">{[2532, 128, 127222][index]}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Revenue Data */}
//         <Card className="p-4 bg-zinc-800 mb-6">
//           <CardContent>
//             <h3 className="text-lg font-semibold">Revenue Data</h3>
//             <Line data={[]} />
//           </CardContent>
//         </Card>

//         {/* Most Popular Albums */}
//         <Card className="p-4 bg-zinc-800 mb-6">
//           <CardContent>
//             <h3 className="text-lg font-semibold">The Most Popular Albums</h3>
//             {["Autumn Variations - Ed Sheeran", "My House - Beyoncé", "Teenage Dream - Katy Perry", "Christmas Mix 2022 - Boris Brejcha", "Flacien Oral - Shakira", "Talk That Talk - Rihanna", "Curtain Call: The Hits - Eminem"].map((album, index) => (
//               <div key={index} className="flex justify-between items-center py-2">
//                 <span>{album}</span>
//                 <ChevronRight className="text-gray-400 cursor-pointer" />
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Most Popular Tracks & Genres */}
//         <div className="grid grid-cols-2 gap-4">
//           <Card className="p-4 bg-zinc-800">
//             <CardContent>
//               <h3 className="text-lg font-semibold">The Most Popular Tracks</h3>
//               {["Real Slim Shady", "Where the hood at", "Maria Maria"].map((track, index) => (
//                 <div key={index} className="flex justify-between items-center py-2">
//                   <span>{track}</span>
//                   <Play className="text-green-500 cursor-pointer" />
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           <Card className="p-4 bg-zinc-800">
//             <CardContent>
//               <h3 className="text-lg font-semibold">Top Performing Genres</h3>
//               <Bar data={[]} />
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }
