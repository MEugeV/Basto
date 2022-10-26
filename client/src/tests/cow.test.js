import { render, screen } from "@testing-library/react";
import Cow from "../components/cow.jsx";

describe("Cow component", () => {
  test("renders a new Cow", () => {
    let cow = {
      _id: "CARAVANA52856893",
      animal_type: "Toro",
      animal_weight: 700,
      paddock_name: "La Candelaria",
      device_type: "CARAVANA",
      device_number: "CAR52525",
    };

    render(
      <tbody>
        <Cow animal={cow} />
      </tbody>
    );

    let cowId = screen.getByText(cow._id);
    expect(cowId).toBeInTheDocument();
  });
});
