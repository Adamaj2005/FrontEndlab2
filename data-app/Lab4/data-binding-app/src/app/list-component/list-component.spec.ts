
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcomponent } from './list-component';

describe('Listcomponent', () => {
  let component: Listcomponent;
  let fixture: ComponentFixture<Listcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
