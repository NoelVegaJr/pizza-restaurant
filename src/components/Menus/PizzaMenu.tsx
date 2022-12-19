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

const PizzaMenu: React.FunctionComponent = (props) => {
  return (
    <div className="flex flex-col justify-center gap-12 sm:flex-row sm:gap-20">
      <ul className="flex flex-col gap-4 border-r border-r-yellow-700 sm:pr-20">
        <MenuItem name="Cheese" description="Description here" price="13" />
        <MenuItem name="Pepperoni" description="Description here" price="13" />
        <MenuItem name="White" description="Description here" price="13" />
        <MenuItem
          name="Meat Lovers"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Buffalo Chicken"
          description="Description here"
          price="13"
        />
        <MenuItem name="Garden" description="Description here" price="13" />
      </ul>
      <ul className="flex flex-col gap-4">
        <MenuItem
          name="Traditional Sicilian"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Grandma Sicilian"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Upside Down Sicilian"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Drunken Grandma"
          description="Description here"
          price="13"
        />
        <MenuItem
          name="Regular Grandma"
          description="Description here"
          price="13"
        />
      </ul>
    </div>
  );
};

export default PizzaMenu;
