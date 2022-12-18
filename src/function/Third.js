import { useEffect, useState } from "react";

const Third = () => {

    useEffect(
     () => {
        const getUsers = async () => {
        const response = await fetch(
          "https://e01751fa-f34d-46f0-8c94-58c6269538f0.mock.pstmn.io/trying/get"
        );
        const data = await response.json();
        console.log(data)
      }
      getUsers();
      return () => {}
    }
    ,[])
}

export default Third