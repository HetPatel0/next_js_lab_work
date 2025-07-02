import Link from "next/link";
import React from "react";

async function Apis() {
  const something = await fetch(
    "https://67c5a6d0351c081993fadf7d.mockapi.io/api/faculties"
  );
  const data = await something.json();
  const formatedData = data.map((d: any) => {
    return (
      <div>
        <Link href={"/apis/" + d.id}>
          <h5>{d.name}</h5>
        </Link>
      </div>
    );
  });
  return (
    <>
      <div className="font-weight-normals">{formatedData}</div>
    </>
  );
}

export default Apis;
