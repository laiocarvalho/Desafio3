import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="main-header">
      <div className="centraliza-main-header">
        <h1 className="main-header-title">Brasileirão</h1>
        <form className="login-form">
        <label>
          Email
          <input type="email"/>
        </label>

        <label>
          Senha
          <input type="password"/>
        </label>
        <button>Login</button>
        </form>
        
      </div>
      
    </div>  
  )
}
