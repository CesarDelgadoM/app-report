import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { throwError } from 'rxjs';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alerts: AlertsService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      password_confirm: new FormControl('', [Validators.required]),
    });
  }

  submit(): void {

    if (this.form.valid) {
      this.authService.register(this.form.getRawValue())
        .subscribe((message) => {
          this.alerts.openSuccessSnackBar(message)
          this.router.navigate(['/'])
        });
    }
  }
}
