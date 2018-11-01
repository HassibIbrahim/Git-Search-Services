import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Search } from '../search';
import { Repos } from '../repos';

@Injectable()
export class GithubRequestService {
  search: Search;
  constructor(private http: HttpClient) {
    this.search = new Search('', '', '', '');
  }

  githubRequest(name) {
    const repos = [];
    interface ApiResponse {
      login: string;
      name: string;
      repos_url: string;
      avatar_url: string;
    }
    const promise = new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      this.http.get<ApiResponse>('https://api.github.com/users/' + name + '/repos?access_token=284a70214412bb8997800d2a05b0635cf59d5e71').toPromise().then(data => {
        for (let i = 0; i < data['length']; i++) {
          const repo = new Repos(data[i]['name'], data[i]['html_url']);
          repos.push(repo);
        }
      });


      resolve();

      // tslint:disable-next-line:no-unused-expression
      error => {
        this.search.login = 'NONE';
        this.search.name = 'NONE';
        this.search.repos_url = 'NONE';
        this.search.avatar_url = 'NONE';
        reject(error);

      };
    });
    return repos;
  }


}
