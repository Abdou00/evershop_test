import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        {/* <img src="/newbad-stretch.svg" alt="BADWORK" /> */}
        <img src="/welcome.png" alt="BADWORK" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};