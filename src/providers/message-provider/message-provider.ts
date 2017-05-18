import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Message provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MessageProvider {

  url:string = 'https://shoppa.herokuapp.com/users/';
  //url:string = 'http://localhost:3000/users/';

  questions: Array<string> = [];

   headers =  new Headers({'Content' : 'application/json'});
   options = new RequestOptions({ headers : this.headers});
  

  Register(register){

    let headers =  new Headers({'Content' : 'application/json'});
    let options = new RequestOptions({ headers : headers});

    var response = this.http.post(this.url + 'register',register, options);
    return response;
  }

  GetData(){
    return this.questions;
  }

  SendReport(report){
    let headers =  new Headers({'Content' : 'application/json'});
    let options = new RequestOptions({ headers : headers});

    var response = this.http.post(this.url + 'skill',report, options);
    return response;
  }

  GetLocalObject(objName){
    return window.localStorage.getItem(objName);
  }

  SetUnlockedCards(card){
      

      if(window.localStorage.getItem('UnlockedCards') != null)
      {
        let temp = window.localStorage.getItem("UnlockedCards");
        let unlocked:Array<string> = JSON.parse(temp)
        unlocked.push(card);

        console.log(unlocked);
        
        window.localStorage.setItem('UnlockedCards', JSON.stringify(unlocked));
      }
      else{
        var value:Array<string> = new Array<string>();
        value.push(card)
        window.localStorage.setItem('UnlockedCards',JSON.stringify(value));
      }
  }

  GetUnlockedCards():Array<string>
  {
    let temp = window.localStorage.getItem("UnlockedCards");
    let unlocked:Array<string> = JSON.parse(temp);

    return unlocked;
  }

  RemoveLocalObject(item){
    window.localStorage.removeItem(item);
  }

  SetLocalObject(objName, object){
    window.localStorage.setItem(objName, object);
  }

  constructor(private http: Http) {

    //Load this from a data store later
    this.questions.push('ARE YOU INTERESTED IN STARTING YOUR OWN BUSINESS?');
    this.questions.push('ARE YOU INTERESTED IN ENTREPRENEURSHIP AND ENTREPRENEURS?');
    this.questions.push('ARE YOU INTERESTED IN GENERATING YOUR OWN INCOME?');
    this.questions.push('Are you interested in Professional services firms (Consultancies, Advisory, Legal, Financial, Engineering, Branding etc)?');
    this.questions.push('Are you interested in teaching, Research and Development, Statistics, Analysis and proof based Solutions?');
    this.questions.push('Are you interested in problem solving, identifying better ways to get things done and strategy formulation?');
    this.questions.push('Are you interested in the luxury business (high end fashion, expensive machines and gadgets, exclusive services etc)?');
    this.questions.push('Are you interested in rare hard to obtain items (antiques, precious metals, art etc)?');
    this.questions.push('Are you interested in the concept of exclusivity based on wealth, position and or influence (exclusive clubs, groups, associations)?');
    this.questions.push('Are you interested in large scale industrial production?');
    this.questions.push('Are you interested in global integrated logistics systems?');
    this.questions.push('Are you interested in trading of fast moving consumer goods and or services?');
    this.questions.push('Are you interested in helping people and communities to be economically empowered, healthier, smarter etc?');
    this.questions.push('Are you interested in volunteering for causes (projects and or organizations) that help make the world a better place?');
    this.questions.push('Do you understand what it means to volunteer?');
    this.questions.push('Do you believe that the end justifies the means?');
    this.questions.push('Do you believe that rich people should be judged with a different set of criteria from poor people?');
    this.questions.push('Considering the state of the Country, Would you pay taxes if it was Voluntary and not a mandatory legal requirement?');
    this.questions.push('Do you have an interest in Values as an integral part of Human relations?');
    this.questions.push('Do you have an interest in Sociology and or Psychology as it applies to Organizations?');
    this.questions.push('Are you interested in peoples belief systems as a motivating factor in Organizations?');
    this.questions.push('Are you interested in Team building and Cultural identity in Organizations?');
    this.questions.push('Are you fascinated by how teams form around a set of Social Norms (Class, Religion, Ethnicity, Race and or Gender)?');
    this.questions.push('Are you Interested in topics like Culture Shock, Clash of Cultures, Cultural Disputes etc?');
    this.questions.push('Are you interested in Motivational Speaking?');
    this.questions.push('Are you interested in Goal Setting and Planning?');
    this.questions.push('Are you interested in Project Management as a Skill to have?');
    this.questions.push('Are interested in Recruitment as a profession?');
    this.questions.push('Do you see yourself helping people find jobs best suited for them?');
    this.questions.push('Do you see yourself helping teams come together for projects and or causes?');
    this.questions.push('Are you interested in helping different organizations come together for mutual benefit?');
    this.questions.push('Are you interested in Value Chains and how they work?');
    this.questions.push('Are you intetested in Economic Systems and how they work?');
    this.questions.push('Are you interested in Marketing Strategies?');
    this.questions.push('Are you interested in Sales and how to sell?');
    this.questions.push('Are you interested in the relationship between Demographics / Psycographics and Customer acquisition?');
    this.questions.push('Are you interested in Designing and managing Online platforms?');
    this.questions.push('Are you interested in Designing and managing Mobile Platforms?');
    this.questions.push('Are you interested in Designing and Managing Enterprise Resource Platforms?');
    this.questions.push('Are you interested in Business Process Design Disciplines like Six Sigma, COBIT Frameworks or ISO 9001 standards?');
    this.questions.push('Are you interested Business Administration and Management?');
    this.questions.push('Are you fascinated by Flowcharts?');
    this.questions.push('Are you interested in Engineering Technical and or Science related Professions?');
    this.questions.push('Are you intetested in Making or Producing things (Food, Drinks, industrial products, Agricultural products etc)?');
    this.questions.push('Are you intetested in Graphic Design (2D & 3D), Technical drawing and Model Construction?');
    this.questions.push('Are you interested in providibg Professional Services (Consulting, Advisory, Compliance, Legal and or Accounting etc)?');
    this.questions.push('Are you interested in providing Support services (Logistics & Deliveries, Fashion, Laundry, Cleaning etc)?');
    this.questions.push('Are you interested in helping others sell thier products or services?');
    this.questions.push('Are you interested in Copywritting, Editing, Publishing and or Designing Visual content?');
    this.questions.push('Are you interested in Profesional and or technical Content (Legal, Financial or Scientific records and reports)?');
    this.questions.push('Are you interested in Audio, Video, Animation and or Graphic Content Design?');
    this.questions.push('Are you interested in Accounting, Budgetting, Financial analysis and or Advisory?');
    this.questions.push('Are you interested in Intellectual Property Assets valuation and Management?');
    this.questions.push('Are you interested in Real Property valuation and assets Management?');
    this.questions.push('Are you interested in Contracts, Agreements and or Partnership Strategy planning and documentation?');
    this.questions.push('Are you interested in Negotiations (win win) and partnership Building across Organizations?');
    this.questions.push('Are you interested in Risk Management and or Regulatoru Compliance Management?');
    this.questions.push('Are you interested in Customer Care and Management?');
    this.questions.push('Are you intetested in Customer Loyalty systems and schemes?');
    this.questions.push('Are you interested in Gamification and Incentive design management?');
    this.questions.push('Do you consider yourself a Creative thinker, with all sorts of crazy ideas that you are convinced will change the world?');
    this.questions.push('Are you interested in Game Design and creation (Board games, Card Games, Mobile App games etc)?');
    this.questions.push('Are you interested in problem solving and do you keep a journal of ideas that you have developed that you believe will solve problems in your areas of interest?');
    
  }

}

