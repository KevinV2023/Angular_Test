import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
  titre : string = "Connexion"
  //Valeur par defaut de login
  login : string = ""
  motdepasse: string = ""
  lblMessage:string =  ""
  estCacheSuccess: boolean = true
  estCacheDanger: boolean = true

  valider(): void{
    if(this.login == "Kevin" && this.motdepasse == "toto")
    {
      console.log("mot de passe ok"); 
      this.estCacheDanger = true;
      this.estCacheSuccess = false;
      this.lblMessage = "Login et mot de passe CORRECT"
    }else{
      console.log("erreur de connexion");
      this.estCacheSuccess = true;
      this.estCacheDanger = false;
      this.lblMessage = "Erreur de login ou de mot de passe"; 
    }


  }

  constructor(){ }

  ngOnInit(): void {
    
  }

}
