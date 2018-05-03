import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoListingComponent } from './potato-listing.component';
import { defaultPotato, Potato } from '../../models/potato.model';

describe('PotatoListingComponent', () => {
  let component: PotatoListingComponent;
  let fixture: ComponentFixture<PotatoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the correct username', () => {
    component.potato = defaultPotato;
    const username: String = 'steve';
    component.potato.author = `blank@blank.com ("${username}")`;
    expect(component.photoAuthor).toBe(username);
  });
});
