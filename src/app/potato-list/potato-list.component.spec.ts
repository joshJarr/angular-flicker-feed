import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoListComponent } from './potato-list.component';

describe('PotatoListComponent', () => {
  let component: PotatoListComponent;
  let fixture: ComponentFixture<PotatoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
