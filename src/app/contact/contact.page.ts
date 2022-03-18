import { Component, OnInit } from '@angular/core';
import { ContatosServiceService } from '../service/contatos-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contatos = {
    nome:'',
    E_mail:'',
    Telefone:'',
    Messagem:'',
 
  };
  
    constructor(private produtoService: ContatosServiceService) { }
  
    ngOnInit() {
    }
    salvar(){
      this.produtoService.saveContatos(this.contatos).subscribe(res => {
        console.log("messagem salvar");
      })
    }
  

}
