import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutPageComponent } from './layout-page.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'characters/list', component: DummyListComponent },
        ]),
      ],
      declarations: [LayoutPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the list page when navigateToList is called', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToList();
    expect(navigateSpy).toHaveBeenCalledWith(['characters/list']);
  });
});

@Component({ template: '' })
class DummyListComponent {}
