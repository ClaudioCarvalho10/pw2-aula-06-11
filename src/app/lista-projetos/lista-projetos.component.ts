import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoAPIService } from '../service/projeto-api.service';
import { Projeto } from '../model/projeto';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

projeto : 
Projeto[];
  constructor(private router: Router, private service  : ProjetoAPIService ) { }

  ngOnInit() {
    this.service.getProjetos()
               .subscribe ((dados : Projeto []) => this.projeto = dados, error => console.log(error));
  }
detalhes(id: number) {
  this.router.navigate(['detalhe-projeto',id]);

     }
}
 