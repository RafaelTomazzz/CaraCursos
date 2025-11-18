import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { TokenResponse } from '../../models/TokenResponse';



@Component({
  standalone: true,
  selector: 'app-login-component',
  imports: [ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  constructor(public usuarioService: UsuarioService) {}

  loginForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  @ViewChild("hiddenContent") hiddenContent!: ElementRef 

  Submit(){
    try {
      const cpf = Number(this.loginForm.value.cpf)
      const senha = String(this.loginForm.value.senha)

      this.usuarioService.generateToken(cpf, senha).subscribe(res => {
        localStorage.setItem('token', res.token)
      })

      console.log(localStorage.getItem('token'))
      alert("Login efetuado com sucesso!!!")

      this.hiddenContent.nativeElement.style.display = "none"

    } catch (er) {
      console.log(er)
    }
  }
}

