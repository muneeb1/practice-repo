import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: Project[];

  // Inject service providers in constructor
  constructor() { }

  ngOnInit() {
    this.projects = [];
    this.getProjects();
  }

  getProjects() {
    // call service method to get data, but here I'm using static data

    this.projects = [
      {
        id: 1,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: true,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 2,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: false,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 3,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: true,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 4,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: false,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 5,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: false,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 6,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: false,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 7,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: false,
        price: 7.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      },
      {
        id: 8,
        imgUrl: "assets/images/Tile_Image.jpg",
        enabled: true,
        price: 22.50,
        name: "KARIBA REDD+ -ZIMBABWE",
        title: "Reduced Emissions from Deforestation and Degradation",
        weight: 957842,
        unit: "lbs. offset",
        description: "Projects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodversity coridor."
      }
    ]

  }
}
