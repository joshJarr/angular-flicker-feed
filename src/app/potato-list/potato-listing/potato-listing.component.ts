import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Potato } from '../../models/potato.model';
import { DialogService } from 'ng2-bootstrap-modal';
import { Router, ActivatedRoute } from '@angular/router';
import { PotatoViewComponent } from '../../potato-view/potato-view.component';
import { photoAuthorUtil, linkToProfileUtil, stripDescriptionUtil } from '../../utils/app.utils';

@Component({
  selector: 'app-potato-listing',
  templateUrl: './potato-listing.component.html',
  styleUrls: ['./potato-listing.component.scss']
})
export class PotatoListingComponent {

  @Input() potato: Potato;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  showModal(): void {
    this.navigateToPotato();
    const disposable = this.dialogService.addDialog(PotatoViewComponent, {potato: this.potato})
    .subscribe((isConfirmed) => {
      disposable.unsubscribe();
    });
  }

  private navigateToPotato(): void {
    // changes the route without moving from the current view or
    // triggering a navigation event
    this.router.navigate([`/${this.potato.author_id}`]);
  }

  public get photoAuthor(): string {
    return photoAuthorUtil(this.potato.author);
  }

  public get authorLink(): string {
    return linkToProfileUtil(this.potato.author_id);
  }

}
