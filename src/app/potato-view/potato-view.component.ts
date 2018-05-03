import { Component, Inject, Injectable } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { OnInit, OnDestroy  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Potato } from '../models/potato.model';
import { photoAuthorUtil, linkToProfileUtil, stripDescriptionUtil } from '../utils/app.utils';

export interface ViewModel {
  potato: Potato;
}

@Component({
  selector: 'app-potato-view',
  templateUrl: './potato-view.component.html',
  styleUrls: ['./potato-view.component.scss']
})

export class PotatoViewComponent extends DialogComponent<ViewModel, boolean> implements ViewModel, OnInit, OnDestroy  {
  potato: Potato;

  constructor(
    dialogService: DialogService,
    @Inject(DOCUMENT) private document: any
  ) {
    super(dialogService);

  }

  ngOnInit(): void {
    this.document.body.classList.add('modal-open');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('modal-open');
  }

  confirm(): void {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }

  public get tagList(): string[] {
    return this.potato.tags.split(' ');
  }

  public tagLink(tag: string): string {
    return `https://www.flickr.com/search/?text=${tag}`;
  }

  // removes the unessesary junk form the description
  public get stripDescription(): string {
    return stripDescriptionUtil(this.potato.description);
  }
  public get photoAuthor() {
    return photoAuthorUtil(this.potato.author);
  }
  public get authorLink() {
    return linkToProfileUtil(this.potato.author_id);
  }

}
