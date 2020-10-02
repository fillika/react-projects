import React from "react";
import { MainAdvBlock } from "../../MainAdvBlock/MainAdvBlock";
import { RecommendedProduct } from "../../RecommendedProduct";
import { BestMobileApp } from "../../BestMobileApp";
import { Services } from "../../Services";
import { YouNeedToKnow } from "../../YouNeedToKnow";

export const MainPage: React.FC = () => {
  return (
    <>
      <MainAdvBlock/>
      <RecommendedProduct/>
      <BestMobileApp/>
      <Services/>
      <YouNeedToKnow/>
    </>
  );
};