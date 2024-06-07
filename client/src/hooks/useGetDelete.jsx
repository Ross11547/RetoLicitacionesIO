import { useEffect, useState } from "react";
const backendUrl = "http://localhost:5000/";
import { toast } from "react-toastify";

export const useGetDelete = (route) => {
  const [res, setRes] = useState([]);

  const handleGet = async () => {
    const response = await fetch(backendUrl + route);
    if (response.ok) {
      const responseJson = await response.json();
      setRes(responseJson);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  const getData = () => {
    handleGet();
  };
  const handleDelete = async (id) => {
    const response = await fetch(`${backendUrl + route}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const responseJson = await response.json();
      handleGet();
    }
  };
  const handlePost = async (body) => {
    const response = await fetch(`${backendUrl + route}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const responseJson = await response.json();
      handleGet();
      toast.success("Se agrego correctamente")
    }

  };
  const handleUpdate = async (id, body) => {
    const response = await fetch(`${backendUrl + route}/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const responseJson = await response.json();
      handleGet();
    }
  };

  return {
    getData,
    res,
    handleGet,
    handleDelete,
    handlePost,
    handleUpdate,
  };
};
