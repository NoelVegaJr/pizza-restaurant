import * as React from "react";

const MenuItem = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <li className="flex flex-col items-center">
      <p
        className="text-lg font-bold"
        style={{ fontFamily: "Petit Formal Script" }}
      >
        {name}
      </p>
      <p>{description}</p>
      <p className="font-bold">{price}</p>
    </li>
  );
};

const DessertsMenu: React.FunctionComponent = (props) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-20">
      <ul className="flex flex-col gap-4  ">
        <MenuItem name="Cannoli" description="Description here" price="13" />
      </ul>
    </div>
  );
};

export default DessertsMenu;
