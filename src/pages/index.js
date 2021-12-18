import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div>
      <div style={{ color: `red` }}>
        <Link to="/contact">Contact</Link>
        <Header headerText="Gatsby Developer"/>
        <p>Seja bem-vindo</p>
        <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
      </div>
    </div>
  )
}
