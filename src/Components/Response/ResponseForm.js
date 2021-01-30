import React, { useState, useEffect } from "react";

function ResponseForm({ match }) {
  useEffect(() => {
    console.log(match);
  }, []);
  return <div>this is ResponseForm {match.params.id}</div>;
}

export default ResponseForm;
