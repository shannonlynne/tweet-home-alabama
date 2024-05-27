import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdAddComponent } from './bird-add.component';

describe('BirdAddComponent', () => {
  let component: BirdAddComponent;
  let fixture: ComponentFixture<BirdAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirdAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
