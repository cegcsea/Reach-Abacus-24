import React from "react";
import Workshop_content from "./component/Workshop_content";
import Header from "./component/Heading";
import { workshops } from '../../constants';
import { useParams } from "react-router-dom";

const Workshop = () => {
  const { id } = useParams();

  const workshop = workshops.find((event) => event.to === id);

  return (
    <div className="bg-[#34363e]">
      <Header workshop={workshop} />
      <Workshop_content workshop={workshop} />
    </div>
  );
};

export default Workshop;
