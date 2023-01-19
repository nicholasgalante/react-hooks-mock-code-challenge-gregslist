import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

  const displayedListings = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing}/>
  })

  return (
    <main>
      <ul className="cards">
        {displayedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
