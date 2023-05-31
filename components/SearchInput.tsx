"use client";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  return <div>SearchInput</div>;
};

export default SearchInput;
