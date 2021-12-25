import { ReactNode } from "react";

interface IFeatureProps {
  title: string;
  children: ReactNode | ReactNode[];
  description: ReactNode | ReactNode[];
}

function Feature({ title, children, description }: IFeatureProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="relative z-10">{children}</div>
      <div className="relative z-10 flex flex-col space-y-4">
        <h3>{title}</h3>
        <hr />
        {description}
      </div>
    </div>
  );
}

export default Feature;
