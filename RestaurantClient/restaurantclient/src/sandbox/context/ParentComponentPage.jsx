
import React from "react";
import ChildComponent from "./ChildComponent";
import DataProvider from "./DataProvider";

export default function ParentComponentPage() {
  return (
    <DataProvider>
      <div>
        Parent component
        <ChildComponent />
      </div>
    </DataProvider>
  );
}
