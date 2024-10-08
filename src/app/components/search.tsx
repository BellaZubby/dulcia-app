"use client";
import React, {useEffect, useRef} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
type Props = {};

const Search = (props: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const searchInputRef = useRef(null);

 
  // clears url on reload
  useEffect(() => {
    const handleRefresh = () => {
      const entries = performance.getEntriesByType('navigation');
      if (entries.length > 0) {
        replace(`${pathname}`);
      }
    }
    handleRefresh();
  }, [pathname, replace])
  // handleSearch.
  const handleSearch = (query:string) => {
    const params = new URLSearchParams(searchParams);
    if(query) {
      params.set('query', query);
      
    }else {
      params.delete('query');
    
    }
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <>
    {/* desktop */}
      <div className="relative w-1/2 hidden md:block">
          <input
          type='text'
          onChange={(e) => handleSearch(e.target.value)}
          className="border py-2 px-4 w-full rounded-md outline-none" />
          <button  className="absolute top-1/2 -translate-y-1/2 right-6">
            <FaSearch className="w-5 h-5 text-primary-50/40" />
          </button>
      </div>
{/* mobile */}
      <div className="relative w-full ssm:w-[70%] md:hidden">
        <input 
         type='text'
         onChange={(e) => handleSearch(e.target.value)}
        className="border py-2 ssm:py-2 px-4 w-full rounded-md outline-none" />
        <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-6">
          <FaSearch className="text-primary-50/40 w-4 h-4" />
        </button>
        
      </div>
    </>
  );
};

export default Search;
