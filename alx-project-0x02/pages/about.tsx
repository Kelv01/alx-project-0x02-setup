import Button from "@/components/common/Button";
import React from "react";

const about = () => {
  return (
    <div>
      <h1 className="text-center text-4xl p-4">About us</h1>
      <div className="flex justify-center items-center gap-8 p-8">
        <Button label="small Button" size="small" shape="rounded-sm" />

        <Button label="medium Button" size="medium" shape="rounded-md" />

        <Button label="large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default about;
