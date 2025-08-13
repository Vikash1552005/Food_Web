import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowUpOutlined } from "@ant-design/icons";
import ScrollToTop from "react-scroll-to-top";

function ButtonSec() {
  return (
    <section>
      <div className="main-butto">
        <ScrollToTop
          className="button-arro"
          smooth
          color="#fff"
          component={<ArrowUpOutlined className="ArrowUpOutlined" />}
        />
      </div>
    </section>
  );
}

export default ButtonSec;
