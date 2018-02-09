var projectList = [
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:`This Android app was an extension of a starter project from the book <a href="https://www.apress.com/us/book/9781430230427">Beginning Android Programming</a>. 
        I only had 2 years of CS under my belt at the time and this was the first thing I programmed because I wanted to and not for an assignment. 
        I added way too many concepts and everyone I’ve coerced into playing the game has been confused as to what exactly is going on. 
        This project taught me to <a href="https://en.wikipedia.org/wiki/KISS_principle">KISS</a>.`,
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    },
    {
        title:"My Title",
        proud:3,
        date:'1-1-15',
        techUsed:'ES6',
        summary:'it was tough',
        github:'www.google.com',
        view:'www.google.com',
        img:'img/Flyout.PNG'
    } 
];

$(function(){
    console.log('on load!');
    ko.applyBindings(new PersonalSiteViewModel());
});

class PersonalSiteViewModel{
    constructor(){
        this.projects = projectList;
    }
}