import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GithubRequestService } from '../github-http/github-request.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  repos;
  constructor(private searchService: GithubRequestService, private http: HttpClient) { }
  search = new Search('', '', '', '');
  ngOnInit() {
  }
  searchComplete() {
    interface ApiResponse {
      login: string;
      name: string;
      repos_url: string;
      avatar_url: string;
    }
    const user = $('#userDetails').val();
  // tslint:disable-next-line:max-line-length
    this.http.get<ApiResponse>('https://api.github.com/users/' + user + '?access_token=284a70214412bb8997800d2a05b0635cf59d5e71').subscribe(data => {
        this.search = new Search(data.login, data.name, data.repos_url, data.avatar_url);
      });
      this.repos = this.searchService.githubRequest(user);
  }

}
