import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoViewComponent } from './potato-view.component';

describe('PotatoViewComponent', () => {
  let component: PotatoViewComponent;
  let fixture: ComponentFixture<PotatoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
