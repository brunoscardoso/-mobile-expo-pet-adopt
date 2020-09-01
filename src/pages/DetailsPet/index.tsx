import React, { useEffect } from 'react';

const DetailsPet: React.FC = ({ route }) => {
  useEffect(() => {
    const { name } = route.params.item;
    console.log(route.params.item);
  }, []);

  return <></>;
};

export default DetailsPet;
