import React, { useEffect, useState } from "react";
import getEpg from "../../services/epg";

const EpgContainer: React.FC = () => {
  const [data, setData] = useState<EpgResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp: EpgResponse = await getEpg();
        setData(resp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <></>;
};

export default EpgContainer;
