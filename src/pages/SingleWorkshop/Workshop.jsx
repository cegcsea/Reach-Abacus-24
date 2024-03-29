import React, { useContext } from "react";
import Workshop_content from "./component/Workshop_content";
import Header from "./component/Heading";
import { workshops } from '../../constants';
import { useParams } from "react-router-dom";
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import { AuthContext } from "../../context/AuthContext";

const Workshop = () => {
  const { isLoading } = useContext(LoaderContext);
  const { userWorkshops } = useContext(AuthContext);
  const { id } = useParams();

  if (isLoading) {
    return <Loader />;
  }

  const workshop = workshops.find((event) => event.to === id);
  const isPaidWorkshop = userWorkshops.filter((event) => event.workshopId === workshop.code);
  isPaidWorkshop.sort((a, b) => b.id - a.id);
  console.log(isPaidWorkshop)
  const isRegistered = userWorkshops.some((event) => event.workshopId === workshop.code);

  return (
    <div className="bg-[#34363e]">
      <Header workshop={workshop} />
      <Workshop_content workshop={workshop} isRegistered={isRegistered} isPaidWorkshop={isPaidWorkshop[0]} />
    </div>
  );
};

export default Workshop;
