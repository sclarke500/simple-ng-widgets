import { Component, OnInit, forwardRef, ViewChild, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sng-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateSelectComponent),
      multi: true
    }
  ],
})
export class DateSelectComponent implements OnInit {

  @Input() class;
  @Output() change = new EventEmitter;
  @ViewChild('calendar', { static: false }) calendar;

  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  currentValue;
  selectedDate;
  dlgSelectedDate;

  _showCalendar = false;
  rightAlign = true;

  baseDate;
  _month;
  _year;

  availableYears = [];
  calendarWeeks = [];

  _calendarFocused;

  constructor (
    private datePipe: DatePipe,
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    const maxYear = new Date().getFullYear() + 20;
    for (let i = 1910; i <= maxYear; i++) {
      this.availableYears.push(i);
    }
    this.setBaseDate(new Date());

  }

  set showCalendar(bShow) {
    if (bShow) {
      // only right align celendar if there's enough room on the left (else it gets cut off)
      let right = this.elRef.nativeElement.getBoundingClientRect().left + this.elRef.nativeElement.offsetWidth;
      this.rightAlign = right > 240;
      this._showCalendar = true;
      window.addEventListener('mouseup', this.closeOnBlur);
    }
  }

  closeOnBlur = event => {
    if (this.calendar && !this.calendar.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  close = () => {
    this._showCalendar = false;
    window.removeEventListener('mouseup', this.closeOnBlur);
  }

  get showCalendar() {
    return this._showCalendar;
  }

  setBaseDate(d: Date) {
    this.baseDate = new Date(new Date(d).setDate(1));
    this._month = this.baseDate.getMonth();
    this._year = this.baseDate.getFullYear();
  }

  adjustMonth(i) {
    const newMonth = this._month + i;
    if (newMonth === 12) {
      this._month = 0;
      this._year += 1;
    } else if (newMonth === -1) {
      this._month = 11;
      this._year -= 1;
    } else {
      this._month = newMonth;
    }
    this.onDateChange();
  }

  onDateChange() {
    this.baseDate = new Date(this._year, this._month, this.baseDate.getDate());
    this.setWeeks();
  }

  setWeeks() {
    let d = new Date(this.baseDate);
    const m = d.getMonth();
    d = new Date(d.getFullYear(), d.getMonth(), 1);
    d.setDate(d.getDay() * -1 + 1);
    const weeks = [];
    let days = [];
    while (d.getMonth() === m || days.length < 7) {
      if (days.length === 7) {
        weeks.push(days);
        days = [];
      }
      days.push({
        date: new Date(d),
        day: d.getDate(),
        thisMonth: d.getMonth() === m,
        today: this.datePipe.transform(d) === this.datePipe.transform(this.selectedDate || new Date),
      });
      d.setDate(d.getDate() + 1);
    }
    weeks.push(days);
    this.calendarWeeks = weeks;
  }


  selectDate(d) {
    this.selectedDate = d.date;
    this.propagateChange(d.date);
    this.currentValue = this.datePipe.transform(d.date);
    this.change.emit(this.currentValue);
    this.close();
  }

  calendarClick() {
    if (this.selectedDate) { this.setBaseDate(this.selectedDate) }
    this.setWeeks();
    this.showCalendar = true;
    setTimeout(() => this.calendar.nativeElement.focus());
  }

  onBlur() {
    if (isDate(this.currentValue)) {
      this.selectedDate = new Date(this.currentValue);
      this.currentValue = this.datePipe.transform(this.selectedDate);
      this.propagateChange(this.selectedDate);
    } else {
      this.currentValue = null;
      this.propagateChange(null);
    }
    this.change.emit(this.currentValue);
  }

  writeValue(value: any) {
    this.currentValue = value;
    if (isDate(value)) {
      this.selectedDate = new Date(value);
      this.currentValue = this.datePipe.transform(this.selectedDate);
    }
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  calendarFocusout() {
    // this._calendarFocused = false;
    // setTimeout(() => this.showCalendar = this._calendarFocused);
  }

  calendarFocusin() {
    this._calendarFocused = true;
  }
}

function isDate(d) {
  return !isNaN(Date.parse(d));
}
