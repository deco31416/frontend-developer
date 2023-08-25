import React from "react";
import SEO from "../common/seo";
import HomeFour from "../components/homes/home-4";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <HomeFour />
    </Wrapper>
  );
};

export default index;
