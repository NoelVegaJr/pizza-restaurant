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

const DinnersMenu: React.FunctionComponent = (props) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-20">
      <ul className="flex flex-col gap-4 border-r border-r-yellow-700 sm:pr-20">
        <MenuItem
          name="Chicken Marsala"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Eggplant Rollatini"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Chicken Scarpariello"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Shrimp Scampi"
          description="Description here"
          price="13"
        />
        <MenuItem name="Mussels" description="Description here" price="13" />
        <MenuItem
          name="Chicken Parmigiana"
          description="Description here"
          price="13"
        />
      </ul>
      <ul className="flex flex-col gap-4">
        <MenuItem
          name="Eggplant Parmigiana"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Veal parmigiana"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Chicken Francaise"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Chicken Piccata"
          description="Description here"
          price="13"
        />
      </ul>
    </div>
  );
};

export default DinnersMenu;
