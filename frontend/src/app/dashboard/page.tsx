/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { ChangeEvent, useEffect } from "react";

import { IoMdAddCircleOutline } from "react-icons/io";
import { Select, Label, Modal, TextInput, Button, Badge } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Table } from "flowbite-react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CiEdit } from "react-icons/ci";

const schema = z.object({
  name: z.string().min(2, "Enter username"),
  email: z.string().email(),
  role: z.string(),
});

type FormFields = z.infer<typeof schema>;

interface IUsers {
  id: string;
  name: string;
  email: string;
  role: string;
}

const Sidebar = () => {
  const [datas, setData] = useState<IUsers>();
  const [ids, setIds] = useState("");
  const [errorName, setErrorName] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);

  // Fetch Data

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/getUsers");
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnMount: true,
  });

  const name = data?.map((user: IUsers) => user.name);
  const email = data?.map((user: IUsers) => user.email);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const input_name = event.target.name;
    if (input_name === "email") {
      // Check if the value already exists
      if (email.includes(newValue)) {
        setError("Value already exists!");
        setErrorName("email");
      } else {
        setError("");
      }
    } else if (input_name === "name") {
      if (name.includes(newValue)) {
        setErrorName("name");
        setError("Value already exists!");
      } else {
        setError("");
      }
    }
  };

  // Delete Data

  const deleteUsers = async (userId: string) => {
    const response = await fetch(`http://localhost:5000/deleteUser/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
    },
  });
  function handleDelete(userId: string) {
    deleteMutation(userId);
  }

  // Create Users

  const addUsers = async (userData: FormFields) => {
    const response = await fetch("http://localhost:5000/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  const { mutate: addMutation } = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
      window.location.reload();
    },
  });

  // Update Users

  const getUsersById = async (userId: string) => {
    const respone = await fetch(`http://localhost:5000/getUsers/${userId}`);

    const data = await respone.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    if (datas) {
      reset({
        name: datas.name,
        email: datas.email,
        role: datas.role,
      });
    }
  }, [datas]);

  const updateUsers = async (userData: FormFields) => {
    const response = await fetch(`http://localhost:5000/updateUser/${ids}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: true,
      });
      window.location.reload();
    },
  });

  function onCloseModal() {
    setOpenModal(false);
  }

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    if (datas) {
      updateMutation(data);
    } else {
      addMutation(data);
    }
    setOpenModal(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-[10%] ">
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-500"></div>
          <img src="/logo.png" className="rounded-full h-28 w-28" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="w-full rounded-xl">
          <div className="flex justify-between p-5 items-center ">
            <div className="">
              <p className=" font-semibold text-base ">List of Agents</p>
              <p className=" text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                id.
              </p>
            </div>
            <div>
              <button
                className="px-3 py-2 border-2 rounded-lg border-black flex items-center gap-1"
                onClick={() => setOpenModal(true)}
              >
                <IoMdAddCircleOutline className="text-xl text-red-500" />
                <div className="font-bold">Add agent</div>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto px-5">
            <Table>
              <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>UserName</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>

                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              {data &&
                data.map((i: IUsers) => {
                  return (
                    <>
                      <Table.Body className="divide-y">
                        <Table.Row className=" dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {i.id}
                          </Table.Cell>
                          <Table.Cell>{i.name}</Table.Cell>
                          <Table.Cell>{i.email}</Table.Cell>
                          <Table.Cell>
                            <Badge color="failure" className="w-14">
                              {i.role}
                            </Badge>
                          </Table.Cell>
                          <Table.Cell>
                            <div className="flex items-center">
                              <RiDeleteBinLine
                                className="text-xl cursor-pointer"
                                onClick={() => setdeleteModal(true)}
                              />
                              <CiEdit
                                className="text-xl ml-3 cursor-pointer"
                                onClick={() => (
                                  getUsersById(i.id),
                                  setIds(i.id),
                                  setOpenModal(true)
                                )}
                              />
                            </div>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                      <Modal
                        show={deleteModal}
                        size="md"
                        onClick={() => setdeleteModal(false)}
                        popup
                        className="bg-gray backdrop-blur"
                      >
                        <Modal.Header />
                        <Modal.Body>
                          <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                              Are you sure you want to delete this agent?
                            </h3>
                            <div className="flex justify-center gap-4">
                              <Button
                                color="gray"
                                onClick={() => {
                                  setdeleteModal(false);
                                }}
                              >
                                No, cancel
                              </Button>
                              <Button
                                color="failure"
                                onClick={() => handleDelete(i.id)}
                              >
                                {"Yes, I'm sure"}
                              </Button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="backdrop-blur bg-black/5"
      >
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {datas ? "Edit Agent" : "Add Agent"}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username3" value="Name" />
              </div>
              <TextInput
                {...register("name")}
                name="name"
                onChange={handleChange}
              />
              {error && errorName === "name" && (
                <span className="text-[12px] text-red-500">{error}</span>
              )}
              <span className="text-[12px] text-red-500">
                {errors.name?.message}
              </span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                {...register("email")}
                name="email"
                onChange={handleChange}
              />
              {error && errorName === "email" && (
                <span className="text-[12px] text-red-500">{error}</span>
              )}
              <span className="text-[12px] text-red-500">
                {errors.email?.message}
              </span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="role" value="Select Role" />
              </div>
              <Select {...register("role")}>
                <option selected disabled>
                  Select role
                </option>
                <option>ADMIN</option>
                <option>USER</option>
              </Select>
              <span className="text-[12px] text-red-500">
                {errors.role?.message}
              </span>
            </div>
            <div>
              <div className="mb-2 flex justify-between gap-3">
                <Button
                  label="2"
                  color="light"
                  className="w-[50%]"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  label="2"
                  color="failure"
                  className="w-[50%]"
                  type="submit"
                  disabled={!!error}
                >
                  {datas ? "Update" : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Sidebar;
