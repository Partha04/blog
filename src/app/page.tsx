import { getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import Image from "next/image";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <div>
          <h1>Logged in , welcome {session.user?.name}</h1>
          <h2>{session.user?.email}</h2>
        </div>
      ) : (
        <div>You are not logged in</div>
      )}
    </>
  );
};

export default page;
