import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated =  false;
  servers = ['TestServer', 'TestServer 2'];
  showSecret = true;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return this.serverCreationStatus =  'Server was created! Name is: ' + this.serverName;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
