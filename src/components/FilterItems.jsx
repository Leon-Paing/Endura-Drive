import React from "react";
import BrandFilter from "./BrandFilter";
import ModelFilter from "./ModelFilter";
import YearFilter from "./YearFilter";
import BodyFilter from "./BodyFilter";
import PriceFilter from "./PriceFilter";

const FilterItems = () => {

    return(
    <>
        <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col w-screen h-auto p-7 mt-4 gap-7 justify-center items-center border-t-0.5 bg-slate-900">
            <BrandFilter/>
            <ModelFilter/>
            <YearFilter/>
            <BodyFilter/>
            <PriceFilter/>
        </div>
    </>
    )
}

export default FilterItems;