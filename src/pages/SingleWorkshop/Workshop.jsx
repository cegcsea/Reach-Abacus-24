import React, { useContext } from "react";
import Workshop_content from "./component/Workshop_content";
import Header from "./component/Heading";
import { workshops } from '../../constants';
import { useParams } from "react-router-dom";
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

const Workshop = () => {
  const { isLoading } = useContext(LoaderContext);
  const { id } = useParams();

  if (isLoading) {
    return <Loader />;
  }

  const workshop = workshops.find((event) => event.to === id);

  return (
    <div className="bg-[#34363e]">
      <Header workshop={workshop} />
      <Workshop_content workshop={workshop} />
    </div>
  );
};

export default Workshop;
