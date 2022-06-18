import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {  of } from 'rxjs';
import { AlertService } from '../usuario/service/alert.service';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Livro } from './model/livro';
import { LivroService } from './service/livro.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})


export class LivroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo','descricao','data_lancamento'];
  dataSource: MatTableDataSource<Livro>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  livros: Livro[];
  constructor(
     
    private service: LivroService,
    private alertService: AlertService,
    ) { 
    this.service.getLivros().subscribe(
      (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err)=>{
        this.alertService.error(err.error,"Atenção:")
        return of;
      }
    )
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



