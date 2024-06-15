import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertsService } from '../../services/alerts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertsService: AlertsService) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  submit(): void {

    if (this.form.valid) {
      this.authService.login(this.form.getRawValue())
        .subscribe((resp) => {
          this.alertsService.openSuccessSnackBar(resp)
          this.router.navigate(['/menu']);
        });
    }
  }
}
