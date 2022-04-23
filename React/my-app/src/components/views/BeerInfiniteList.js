import React from 'react';
import { useEffect } from "react";
import config from "../../config";
import axios from "axios";

export default function BeerInfiniteList() {
  useEffect( () => {
    async function fetchBeers() {
      const { data } = await axios.get( `${config.apiUrl}${config.endpoints.beers}` );
      console.log( data );
    }
    fetchBeers();


  }, [] );

  return (
    <div>
      <h2>The Beer Bank</h2>
      <p>Find Your favorite beer here</p>
      <input type="search" />
    </div>
  )
}
