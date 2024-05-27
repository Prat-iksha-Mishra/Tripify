import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogForFrontPageComponent } from './blog-for-front-page.component';

describe('BlogForFrontPageComponent', () => {
  let component: BlogForFrontPageComponent;
  let fixture: ComponentFixture<BlogForFrontPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogForFrontPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogForFrontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
