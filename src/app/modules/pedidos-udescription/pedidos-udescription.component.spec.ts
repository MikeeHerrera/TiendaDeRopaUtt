import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosUDescriptionComponent } from './pedidos-udescription.component';

describe('PedidosUDescriptionComponent', () => {
  let component: PedidosUDescriptionComponent;
  let fixture: ComponentFixture<PedidosUDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosUDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosUDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
