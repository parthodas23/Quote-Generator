import React, { useEffect, useState } from "react";
import { fetchData } from "./fetch";

export const QouteApi = () => {
  const [data, setData] = useState();
  const [handle, setHandle] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();

      setData(res.length ? res[0] : null);
    };

    getData();
  }, [handle]); // Empty dependency array ensures it runs only once

  if (!data) {
    return;
  }
  console.log(data);

  return (
    <div className="container">
      <h1>{data.quote}</h1>
      <p>{data.author}</p>
      {/* {data ? (
        data.map((data) => (
          <div key={Date.now()}>
            <h1>{data.quote}</h1>
            <p>{data.author}</p>
          </div>
        ))
      ) : (
        <p>Loading..</p>
      )} */}

      <button
        onClick={() => {
          setHandle(handle + 1);
        }}
      >
        New Quote
      </button>
    </div>
  );
};
