import { Component, OnInit,ViewChild } from '@angular/core';
import { Pokemon } from './model/pokemon';
import { PokemonService } from './service/pokemon.service';
import {  of } from 'rxjs';
import { AlertService } from '../usuario/service/alert.service';
import {AfterViewInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';




@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome','categoria','descricao','image',];
  dataSource: MatTableDataSource<Pokemon>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pokemons: Pokemon[] ;

  constructor(
    private service: PokemonService,
    private alertService: AlertService
  ) {
     }

  ngOnInit(): void {this.service.getPokemons().subscribe(
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}


