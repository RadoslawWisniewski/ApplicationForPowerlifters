
  export class User {

    id: number;
    firstName: string;
    lastName: string;
    height : number;
    weight : number;
    benchpress: number;
    deadlift : number;
    squat : number;
    wilks : number;
    summary : number;


    constructor(id: number, firstName: string, lastName: string, height:number, weight:number, benchpress:number,
          deadlift: number, squat:number, wilks:number, summary:number){
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.height = height;
      this.weight = weight;
      this.benchpress = benchpress;
      this.deadlift = deadlift;
      this.squat = squat;
      this.wilks = wilks;
      this.summary = summary;
    }
}
