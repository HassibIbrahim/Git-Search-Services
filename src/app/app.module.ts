import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { ReposComponent } from './repos/repos.component';
import { GithubRequestService } from './github-http/github-request.service';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubDetailsComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
