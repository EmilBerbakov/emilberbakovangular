import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ThemePalette } from '@angular/material/core';


@UntilDestroy({ checkProperties: true })
@Component({
  templateUrl: './librarysearch.component.html',
  styleUrls: ['./librarysearch.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatSelectModule ]
})




export class LibrarysearchComponent implements OnInit {
  formGroup: FormGroup;
  warn = 'warn' as ThemePalette;

  constructor(
    private formBuilder: FormBuilder
  ){};

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      searchType: ['', [Validators.required]],
      searchValue: ['', [Validators.required]]
    });
    this.searchTypeSubscription();
  }

  searchTypeSubscription(): void {
    this.formGroup?.get('searchType')?.valueChanges.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((type)=> {
      this.formGroup?.get('searchValue')?.reset('');
      console.log('hi');
      switch (type) {
        case 'ISBN-10':
            this.formGroup?.get('searchValue')?.removeValidators(Validators.pattern(/^[0-9]{13}$/));
            this.formGroup?.get('searchValue')?.addValidators(Validators.pattern(/^[0-9xX]{10}$/));
          break;
        case 'ISBN-13':
          this.formGroup?.get('searchValue')?.removeValidators(Validators.pattern(/^[0-9xX]{10}$/));
          this.formGroup?.get('searchValue')?.addValidators(Validators.pattern(/^[0-9]{13}$/));
          break;
        case 'Title':
        case 'Author':
          this.formGroup?.get('searchValue')?.removeValidators(Validators.pattern(/^[0-9]{13}$/));
          this.formGroup?.get('searchValue')?.removeValidators(Validators.pattern(/^[0-9xX]{10}$/));
          break;
      }
      this.formGroup?.get('searchValue')?.updateValueAndValidity();
    })
  }


}
