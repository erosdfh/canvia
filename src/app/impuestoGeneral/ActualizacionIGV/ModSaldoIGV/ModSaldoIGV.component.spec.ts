import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModSaldoIGVComponent } from './ModSaldoIGV.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ModSaldoIGVComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ModSaldoIGVComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'saldos-acumulados-frontend'`, () => {
    const fixture = TestBed.createComponent(ModSaldoIGVComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('saldos-acumulados-frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ModSaldoIGVComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('saldos-acumulados-frontend app is running!');
  });
});
