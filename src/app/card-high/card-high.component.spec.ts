import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHighComponent } from './card-high.component';

describe('CardHighComponent', () => {
  let component: CardHighComponent;
  let fixture: ComponentFixture<CardHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
