import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="badge badge-primary">ادمین پنل</div>
      {children}
    </>
  );
};

export default layout;
