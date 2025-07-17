
// import { TCategory } from "@/types";
// import Link from "next/link";


// const getCategories = async (): Promise<TCategory[] | null> => {
//   try {
//     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

//     if (res.ok) {
//       const categories = await res.json();
//       return categories;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return null;
// };

// export default async function CategoriesList() {
//   const categories = await getCategories();
//   return (
//     <div className="w-full py-6">
//     <div className="flex flex-wrap gap-2 text-sm">
//       {categories &&
//         categories.map((category) => (
//           <Link
//             key={category.id}
//             href={`/categories/${category.catName}`}
//             className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
//           >
//             {category.catName}
//           </Link>
//         ))}
//     </div>
//   </div>
//   );
// }

import React from 'react'

const CategoriesList = () => {
  return (
    <div>CategoriesList</div>
  )
}

export default CategoriesList
