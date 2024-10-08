"use client";
import React, { Suspense } from "react";
import { banner } from "@/app/Hooks/data";
import HeroSection from "@/app/components/hero/hero";
import Products from "@/app/components/products";
import { useSearchParams } from "next/navigation";
import SearchResult from "@/app/components/searchResult";
import School from "@/app/components/school";
import TestimonialDesktop from "@/app/components/testimonial/testimonialDesktop";
import useMediaQuery from "@/app/Hooks/useMediaQuery";
import TestimonialMobile from "@/app/components/testimonial/testimonialMobile";
import Services from "@/app/components/services";
import { queryData } from "@/app/Hooks/testData";
import Spinner from "@/app/components/spinner";
type Props = {};

const HomePage = ({}: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <>
      {query ? (
        <Suspense fallback={<Spinner/>}>
            <SearchResult query={query} />
        </Suspense>
      ) : (
        
          <div className="pt-14 ssm:pt-24 sm:pt-32 font-robotoCondensed">
          <HeroSection data={banner} />
          <Products data={queryData} className={""} />
          <Services />
          {aboveMediumScreen ? <TestimonialDesktop /> : <TestimonialMobile />}
          <School className=""/>
        </div>
        
      )}
    </>
  );
};

export default HomePage;
