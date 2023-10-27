"use client";

import Image from "next/image";
import React from "react";

type DataProps = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export const MainHome = () => {
  const [data, setData] = React.useState<DataProps | null>(null);

  React.useEffect(() => {
    const api = async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=pFDkGrZdzLaeNWw6YZxzpkqtjl13J3aKKtP6jUqf"
      );
      const json = await response.json();
      setData(json);
    };
    api();
  }, []);

  return (
    <main>
      <Image src={data?.hdurl} alt="image" width={} height={} priority={true}/>
      {data?.explanation}
    </main>
  );
};
