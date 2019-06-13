import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsHomeComponent } from './ims-home.component';

describe('ImsHomeComponent', () => {
  let component: ImsHomeComponent;
  let fixture: ComponentFixture<ImsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImsHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
