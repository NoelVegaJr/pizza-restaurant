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

const KidsMenu: React.FunctionComponent = (props) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-20">
      <ul className="flex flex-col gap-4 border-r border-r-yellow-700 sm:pr-20">
        <MenuItem name="Ravioli" description="Description here" price="13" />
        <MenuItem
          name="Cheese Pizza"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Cheese Ravioli"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Mozzerella Sticks"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Fried Chicken Fingers"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Chicken Parmigiana"
          description="Description here"
          price="13"
        />
      </ul>
      <ul className="flex flex-col gap-4">
        <MenuItem
          name="Pasta with butter"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Pasta with Tomatoe Sauce"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Pasta with Meatballs"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Pasta with Sausage"
          description="Description here"
          price="13"
        />
      </ul>
    </div>
  );
};

export default KidsMenu;
