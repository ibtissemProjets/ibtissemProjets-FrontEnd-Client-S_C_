import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCliComponent } from './login-cli.component';

describe('LoginCliComponent', () => {
  let component: LoginCliComponent;
  let fixture: ComponentFixture<LoginCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
