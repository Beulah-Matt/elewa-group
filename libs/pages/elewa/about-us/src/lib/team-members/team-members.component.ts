import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'elewa-group-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent implements OnInit{

  @Input () currentIndex = 0

  @Input() teamMembers = [
    {
      name: "Jente Rosseel",
      role: "CEO and Founder",
      linkedIn: "https://www.linkedin.com/in/jrosseel/",
      imageUrl: "https://i.postimg.cc/QMgtMpXZ/jente.jpg",
      summary: ""
    },
    {
      name: "Peter Reinartz",
      role: "Executive Chairman",
      linkedIn: "https://www.linkedin.com/in/peter-reinartz-1b4452ab/",
      imageUrl: "https://i.postimg.cc/K8xcH1P9/peter.png",
      summary: ""
    },
    {
      name: "Kennedy Adhola",
      role: "Operations and Partnerships",
      linkedIn: "https://www.linkedin.com/in/kennedy-adhola-97570535/",
      imageUrl: "https://i.postimg.cc/h4LH3p2B/kennedy.png",
      summary: ""
    },
    {
      name: "Herman Vandenbranden",
      role: "Management",
      linkedIn: "https://www.linkedin.com/in/herman-vandenbranden-82b53a2/",
      imageUrl: "https://i.postimg.cc/9XLBM9M9/herman-vandenbranden.jpg",
      summary: ""
    },
    {
      name: "Ian Obutho",
      role: "Senior Developer",
      linkedIn: "",
      imageUrl: "https://i.postimg.cc/PfFTM6J5/ian.png",
      summary: ""
    },
  ]

  
  ngOnInit() {
    this.currentIndex = 0;
  }

  next() {
    if (this.currentIndex < this.teamMembers.length - 1) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
