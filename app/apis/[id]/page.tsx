import Link from "next/link";
import React from "react";

async function FacultyDetail({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const data = await (
    await fetch(
      "https://67c5a6d0351c081993fadf7d.mockapi.io/api/faculties/" + id
    )
  ).json();
  return (
    <>
      <h3>{data.name}</h3>
      <img src={data.avatar} alt="" />
      <Link href="/apis"> Back</Link>
    </>
  );
}

export default FacultyDetail;
