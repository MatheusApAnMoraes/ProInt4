import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniCaronasComponent } from './uni-caronas.component';

describe('UniCaronasComponent', () => {
  let component: UniCaronasComponent;
  let fixture: ComponentFixture<UniCaronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniCaronasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniCaronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});