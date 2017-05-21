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
  cards = Array<Object>();

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

  GetCardDescription(name){
    //this.cards.fil
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
    this.questions.push('Are you interested in Crime Investigations and Analysis');
    this.questions.push('Are you interested in Audits to identify Financial Crimes, Mismanagement and Embezzlement?');
    this.questions.push('Are you interested in breaches of Corporate Governance, Ethical guidelines and Internal Controls within Enterprises?');
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
    this.questions.push('Are you interested in providing Professional Services (Consulting, Advisory, Compliance, Legal and or Accounting etc)?');
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

    this.cards = [
 {
   "Name": "ANT",
   "Description": " You are interested in small Enterprises  or start ups you either plan to start your very own business one day or you have already started. You have dreams of appearing on the cover of Fortune or Times magazine, yoi are not satisfied with where you are right now. You have a Creators heart."
 },
 {
   "Name": "ELEPHANT",
   "Description": " You are interested in Large Enterprises and how they work, you are either planning to work with a large enterprise or are already working in one. You are ambitious, driven and fascinated with corporate culture and yoi see yourself on the Board of a large company one day. You have Builders heart."
 },
 {
   "Name": "CHEETAH",
   "Description": " You are interested in Knowledge Enterprises and you see yourself as a maverik with ideas that will change the world. You are either planning to work in a Knowledge Firm or You are already working in one. An unconventional thinker and like puzzles and intelligent discourse. You do not suffer fools gladly. You have a Teachers heart."
 },
 {
   "Name": "BUTTERFLY",
   "Description": " You are interested in Luxury and Exclusive Enterprises. You appreaciate the finer things and understand that not everyone can get them. You are either planning to work in a Luxury/exclusive product/service Firm or already working in one.You are fascinated by class and priveledge and how exclusivity is generated. You have a Royal Heart."
 },
 {
   "Name": "BUMBLE BEE",
   "Description": " You are interested in Benevolent Enterprises. You are willing to give and share to help the less priviledged and yoi hold yourself up to a high standard of ethical and moral values. You are either planning to work in an NGO or Social Enterprise or are already working in one. Yoi may be also Planning to integrate a give back Campaign for your Enterprise or have already done so. You have a Cruisaders Heart."
 },
 {
   "Name": "WASP",
   "Description": " You are interested in Criminal Enterprises and how they work, you have an affinity for Law and Order and how Law enforcement Institutions are set up. You are also interested in Corporate Crime of an economic nature and how Boardrooms and Politicians Commit Economic, Ethical and Environmental crime. You eather plan to work with Law Enforcement or Audit firms or are already working in those areas. You have a Detectives Heart."
 },
 {
   "Name": "CORE VALUES",
   "Description": " Skill/Careers- HR, Audit, Company Secretary, Control, Regulatory Agency Professional."
 },
 {
   "Name": "CORE OBJECTIVES",
   "Description": " Skill/Careers- Project Management, ISO Auditor, Business Planning, Accounting, Legal."
 },
 {
   "Name": "CULTURE",
   "Description": " Skill/Careers- HR, Training, Policy Formulation, Fashion, Quality Control, Compliance, Trend Analyais, Popular Culture, Religion, Corporate Communications."
 },
 {
   "Name": "PERSONNEL",
   "Description": " Skill/Careers- HR, Training, Legal, Policy Formulation, Search & Selection, Testing, Certification Training, Outsourcing, Insourcing, All Human Resource Management Certifications."
 },
 {
   "Name": "PARTNERS",
   "Description": " Skill/Careers- Legal, Financial Analyst, Negotiations, Marketing, Corporate Communications, Business Forecasting."
 },
 {
   "Name": "CLIENTCUSTOMER",
   "Description": " Skill/Career- Marketing, Product Research & Develepment,  User Experiance (IX), Sociology, Economic Analysis, Phycology, Product/Service Design, Sales, Community Development, Trend Analysis, Corporate Communications."
 },
 {
   "Name": "PRODUCT",
   "Description": " Skill/Career- 3d&2d Design, User Interface Design, Architecture, Engineering, Sciences, Manufacturing, Packaging, Health &Safety, Biologist, Physicist, Food Tech, Technical Drawing."
 },
 {
   "Name": "SERVICES",
   "Description": " Skill/Career- Liberal Arts, Drama, Phsycology, Popular Culture, Quality Control, Customer Relationship Management, Social & Traditional Media, User Interface (UI), Communications, Religion, All Customer Service Certifications."
 },
 {
   "Name": "BUSINESS PROCESS",
   "Description": " Skill/Career- All ISO Certifications, Standardisation Certifications (Six Sigma, COBIT Etc) Flowchart Drafting Skills, Algorithm drafting skills, Accounting, IT Enterprise Platform (ERP)."
 },
 {
   "Name": "PLATFORM",
   "Description": " Skill/Career- Website Design, IT Applications, UX/Marketing, UI, Graphic Design, Algorithm Drafting, Programming."
 },
 {
   "Name": "CONTENT",
   "Description": " Skill/Career- Writing, Copyrighting, Market Comminucations, Legal, Accounting/Financial,Public Relations."
 },
 {
   "Name": "REVENUE",
   "Description": " Skill/Career- Accounting, Financial, Analytics, Sales, Management."
 },
 {
   "Name": "LOYALTY",
   "Description": " Skill/Career- Customer Relationship Management, Customer Care, Sociology, psycology, CRM Online Platforms."
 },
 {
   "Name": "GOODWILL",
   "Description": " Skill/Career- Negotiations, Business Relatioms, Diplomacy, Legal, Financial Analysis, Government Relations."
 },
 {
   "Name": "REVENUE",
   "Description": " Skill/Career- Accounting, Financial Analysis, Investment Advisory, Sales, Inventory, Financial Record Information Systems."
 },
 {
   "Name": "INNOVATION",
   "Description": " Philosophy, Creative Thinking, Idea Generation, Conceptualization, Game Design, Logic, Algorithm, Flowcharts."
 }
]
    
  }

}

