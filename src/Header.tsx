import { memo, VFC } from "react";
import Oneslate from "./assets/Oneslate.png";

export const Header: VFC = memo(() => {
  return (
    <>
      <div>
        <header className="border-b border-gray-400">
          <img src={Oneslate} className="h-11 mx-auto" />
        </header>
      </div>
    </>
  );
});
