import React from "react";
import Avatar from "../Avatar";

export default function AvatarStack() {
  return (
    <section className="w-full flex">
      <div className="ml-[-10px]">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
      </div>

      <div className="ml-[-10px]">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          }
        />
      </div>

      <div className="ml-[-10px]">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
      </div>

      <div className="ml-[-10px]">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
        />
      </div>

      <div className="ml-[-10px]">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1586716402203-79219bede43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          }
        />
      </div>
    </section>
  );
}
