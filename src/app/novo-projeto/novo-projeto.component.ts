import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'has-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {
       projetos=[{"nome": "Projeto1", "sala" : "Lab8","turma": "2Q"}
                 {"nome": "Projeto2", "sala" : "Lab9","turma": "3Q"}];


  constructor(private router:Router) { }

  ngOnInit() {
  }
  detalhes (id :number ){





  this.router.navigate(['detalhe-projeto',id]);
 }
}                                                                                                                                                                  