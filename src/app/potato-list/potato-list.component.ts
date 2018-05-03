import { Component, OnInit, HostListener } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DialogService } from 'ng2-bootstrap-modal';
import { PotatosService } from '../services/potatos.service';
import { Potato } from '../models/potato.model';
import { PotatoViewComponent } from '../potato-view/potato-view.component';

@Component({
  selector: 'app-potato-list',
  templateUrl: './potato-list.component.html',
  styleUrls: ['./potato-list.component.scss']
})

export class PotatoListComponent implements OnInit {
  constructor(
    private potatosService: PotatosService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  public potatos: Potato[];
  public selectedPotato: Potato;
  public searchText: string;

  ngOnInit() {
    this.potatosService.retrievePotatos().subscribe((potatos: Potato[]) => {
      this.potatos = potatos;

      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.selectedPotato = this.potatos.filter((potato) => {
          return potato.author_id === id;
        })[0];
        if (this.selectedPotato) {
          this.showModal();
        }
      }
    });
  }

  showModal(): void {
    const disposable = this.dialogService.addDialog(PotatoViewComponent, {potato: this.selectedPotato})
    .subscribe((isConfirmed) => {
      disposable.unsubscribe();
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
      this.potatosService.retrievePotatos().subscribe((potatos: Potato[]) => {
        this.potatos = Array.from(new Set([...this.potatos, ...potatos]));
      });
    }
  }

}
