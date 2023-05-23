import React from "react";
// import { useEffect, useState } from "react";
// import { getData } from "../services/axios.service";
// import { USER_URL } from "../constants/api.constants";
import Table from 'react-bootstrap/Table';

const Users = ({users}) => {
  const columnName = Object.keys(users[0]);
 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
         {
          columnName.map((column) => {
            return <th key = {column}>{column}</th>
          })
         }
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) =>{
            return <tr key = {index}>
               {
                Object.values(user).map((value) =>{
                  return <td key = {value.id}>{
                    typeof value === "object" ? JSON.stringify(value) : value}</td>
                })
               }
            </tr>
          })
        }
      </tbody>
    </Table>
  );
};

export default Users;
