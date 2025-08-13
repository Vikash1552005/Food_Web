import React from 'react'

function MarqueeTag() {
  return (
    <>
      <section>
        <div className="marquee-main-div">
          {" "}
          <marquee className="marquee-div" behavior="scroll" direction="left"  >
            <div className="text-marquee">
              <span>*</span> <h1>The Best Pizza In Town</h1>
              <span>*</span> <h1>Special Deal Offer For This Week</h1>
              <span>*</span> <h1>New Phenomenon Burger Taste</h1>
              <span>*</span> <h1>Start Price Only $25</h1>
            </div>
          </marquee>
        </div>
      </section>
    </>
  );
}

export default MarqueeTag