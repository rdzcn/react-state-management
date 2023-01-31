import { memo } from "react";
import ChildLevel4 from "./ChildLevel4";

export default memo(function ChildLevel3() {
  return (
    <div className="child-level-3">
      <ChildLevel4 />
    </div>
  );
});
