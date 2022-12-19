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

const BeveragesMenu: React.FunctionComponent = (props) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-20">
      <ul className="flex flex-col gap-4 border-r border-r-yellow-700 sm:pr-20">
        <MenuItem name="Coca Cola" description="Description here" price="13" />
        <MenuItem name="Dr.Pepper" description="Description here" price="13" />
        <MenuItem name="Root Beer" description="Description here" price="13" />
        <MenuItem name="Pepsi" description="Description here" price="13" />
        <MenuItem name="Mussels" description="Description here" price="13" />
        <MenuItem
          name="Snapple Lemon"
          description="Description here"
          price="13"
        />
      </ul>
      <ul className="flex flex-col gap-4">
        <MenuItem
          name="Crush Orange"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Snapple Peach"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Fanta Grape"
          description="Description here"
          price="13"
        />
        <MenuItem name="Water" description="Description here" price="13" />
      </ul>
    </div>
  );
};

export default BeveragesMenu;
