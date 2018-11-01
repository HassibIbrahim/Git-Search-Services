import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',

  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit {

  @Input() search: Search;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
}
