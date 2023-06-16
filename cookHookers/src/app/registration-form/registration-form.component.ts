import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registration!: FormGroup;
  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
    });

    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSubmitForm(): void {
   console.log(this.registration.value);
  }
}
