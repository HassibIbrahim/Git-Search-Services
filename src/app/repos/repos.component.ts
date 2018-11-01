import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GithubRequestService } from '../github-http/github-request.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  providers: [GithubRequestService],
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() repos: Repos;

  constructor(private http: HttpClient) { }
  // showRepos(){
  //   this.reposService.getRepos().subscribe(data => this.repos)
  // }
  ngOnInit() {

  //   interface ApiResponse {
  //     name: string;
  //     url: string;
  //   }

  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   this.http.get('https://api.github.com/users/HassibIbrahim/repos?access_token=1bd8f155b97ca1b792bb0985724a627489c98707').subscribe(data => {
  //     this.repos = new Repos(data[0].name, data[0].url);


  //   });
  // }
}
}
