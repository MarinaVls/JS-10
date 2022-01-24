let WorkWithDOM = function() {

    this.create = function(tagNew) {
        return document.createElement(tagNew); 
    };

    this.attr = function(element, name, value) {
       element.setAttribute(name, value)
    };

    this.html = function(element, value) {
        element.innerHTML = value;
    }

    this.search = function(element, selector) {
       return element.querySelector(selector);
    }; 

    this.addClass = function(element, className) {
        element.classList.add(className);
    };

    this.removeClass = function(element, className) {
        element.classList.remove(className);
    };

    this.toggleClass = function(element, className) {
        element.classList.toggle(className);
    };

    this.hasClass = function(element, className) {
        return element.classList.contains(className);
    };

    this.append = function(element) {
        document.body.appendChild(element);
    }

    this.on = function(element, eventName, funcName) {
        element.addEventListener(eventName, funcName);   
    }
    
};

let getAlert = function(element) {
    alert('Привет!');
}; 


let workWithDOM = new WorkWithDOM();

let tag = workWithDOM.create('div');

workWithDOM.attr(tag, 'id', 'container');
workWithDOM.html(tag, ` <ul class='menu'>
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                            <li>Menu 3</li>
                        </ul>`);
workWithDOM.append(tag);
workWithDOM.search(tag, 'ul');   
workWithDOM.addClass(tag, 'wrapper');
workWithDOM.addClass(tag, 'wrapper-2');
workWithDOM.removeClass(tag, 'wrapper');
workWithDOM.toggleClass(tag, 'wrapper');

console.log(workWithDOM.hasClass(tag, 'wrapper'));

workWithDOM.on(tag, 'click', getAlert);












