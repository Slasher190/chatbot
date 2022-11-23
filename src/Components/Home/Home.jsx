import { ProSidebarProvider } from "react-pro-sidebar";
import React from 'react'
import Layout from "../Utils/Layout";

const Home = () => {
  return (
    <ProSidebarProvider>
        <Layout/>
    </ProSidebarProvider>
  )
}

export default Home