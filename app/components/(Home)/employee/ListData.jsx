"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Modal, Radio, Space, Table, Tag } from "antd";
import axios from "axios";
import { DollarCircleOutlined } from "@ant-design/icons";
import ModalEm from "./Modal";
import EditUser from "./EditUser";

const ListData = () => {
  const [top, setTop] = useState("topLeft");
  const [bottom, setBottom] = useState("bottomRight");
  const [employeedata, setemployeedata] = useState([]);
  const [startswith, setstartswith] = useState(1);
  const [callapi, setcallapi] = useState(true);
  const [openedituser, setopenedituser] = useState(false)
  function getemployedata() {
    axios.get(`/api/employee/all/${startswith}`).then((data) => {
      console.log(data.data);
      if (data.data.users.length != 0) {
        setemployeedata(data?.data?.users);

        if (data.data.users.length < 5) {
          setcallapi(false);
        } else {
          setcallapi(true);
        }
      }
    });
  }
  useEffect(() => {
    getemployedata();
  }, [startswith,openedituser]);
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full ">
      <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white  p-5">
        <div></div>
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-slate-800 dark:text-slate-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block p-2 ps-10 text-sm text-slate-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-slate-800 dark:text-slate-700">
        <thead class="text-xs text-slate-800 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Position
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {employeedata.map((item, index) => {
            return (
              <tr class="bg-white border-b ">
                <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-slate-900 whitespace-nowrap dark:text-white"
                >
                  <Avatar src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg"></Avatar>
                  <div class="ps-3">
                    <div class="text-base font-semibold">{item.name}</div>
                    <div class="font-normal text-slate-800">{item.email}</div>
                  </div>
                </th>
                <td class="px-6 py-4">{item.position}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="mr-2">
                      <DollarCircleOutlined />
                    </div>{" "}
                    {item.salary}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button
                    onClick={()=>{
                      setopenedituser(true)
                    }}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </button>
                <EditUser user={item} openModal={openedituser} setopenedituser={setopenedituser} />
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <nav className="m-auto w-fit py-5">
        <ul class="flex items-center h-10 text-base">
          <li>
            <button
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
              onClick={() => {
                if (startswith != 1) setstartswith(startswith - 1);
              }}
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>

          <li>
            <button
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
              onClick={() => {
                if (callapi) {
                  setstartswith(startswith + 1);
                }
              }}
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};
export default ListData;
