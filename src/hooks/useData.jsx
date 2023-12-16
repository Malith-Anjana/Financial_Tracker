import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import { ToastError, ToastSuccess } from "../constant/toasts";

const useData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  

    const fetchData = (endpoint)=>{
    setIsLoading(true);
      apiClient
      .get(endpoint)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    }

    

  const postData = async (endpoint, reqData) => {
   
      setIsLoading(true);
    setIsLoading(true);
      await apiClient
      .post(endpoint, {...reqData })
      .then((res) => {
        ToastSuccess(res.data.message);
        setIsLoading(false);
        console.log(res.data);

      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        ToastError(res.data.message)
        setIsLoading(false);
      });

  }

  return { data, error, isLoading, message, postData, fetchData };
};

export default useData;
