import React, { useEffect } from "react";

export default function LifeCycle() {
  useEffect(() => {
    console.log("The component has mount");

    return () => {
      console.log("The component has UNmount");
    };
  }, []);

  return <div>life cycle</div>;
}