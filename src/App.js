import React, {Component} from 'react'

class App extends Component{

constructor(props){
  super(props)
  this.state  = {
    nome: '',
    email:'',
    senha:'',
  }
  this.cadastrar = this.cadastrar.bind(this)
}

cadastrar(event){
  event.preventDefault()
  const {nome, email, senha} = this.state
  alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
  
}

  render(){
      return(

        <div>
          <h1>Cadastro de Usuário</h1>

          <form onSubmit={this.cadastrar}>

            <label>Nome:</label>
            <input
            type='text'
            value={this.state.nome}
            onChange={ (e) => this.setState({ nome: e.target.value })}
             /><br />
            <label>email:</label>
            <input 
            type='text'
            value={this.state.email}
            onChange={ (e) => this.setState({ email: e.target.value })}
            /><br />
            <label>Senha:</label>
            <input 
            type='text'
            value={this.state.senha}
            onChange={ (e) => this.setState({ senha: e.target.value })}
            /><br />
            <button type='submit'>Cadastrar</button>

          </form>
        </div>
      )
     }   
}

export default App;