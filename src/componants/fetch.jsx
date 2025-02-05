import React from "react";

export async function fetchData() {
  const apiKey = "FVzJ3LZ/nLKIYz5d1hE/3A==LhCWftt4SfH9NCXv";
  const url = "https://api.api-ninjas.com/v1/quotes";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  });

  //   Used await response.json() instead of .then().
  const res = await response.json();
 
  return res;
}
