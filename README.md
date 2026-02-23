# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS: when we want to use an element we give them id, class . When we want to catch and use an id ,we use getElementById. because it catches the id and we get the element.

 When we use getElementsByClassName ,it returns us a HTMLcollection ,in this collection we get all the same classes element .

querySelector can catch id,class,tag by CSS selector . but it returns the first match it gets.

querySelectorAll  can catch id,class,tag by CSS selector . but it returns NodeList. In this list we get elements, text, and comments.

# 2. How do you create and insert a new element into the DOM?

ANS: when we want to create and insert an element into the dom we have to do 4 steps of work.

1- call the parent by using '(document.getElementById('parent element id'))
2-> create an element by using 'document.createElement("tagName")',
3-> add content 'document.createElement("tagName")' ,
4-> insert the element into dom by using 'parent.appendChild(child)';

# 3. What is Event Bubbling? And how does it work?

ANS:Event bubbling is an event propagation system in JavaScript.
where when an event happens on an element, the text is passed to the upper level from its parent → grandparent → document.

# 4. What is Event Delegation in JavaScript? Why is it useful?

ANS:Event Delegation is a JavaScript technique where instead of providing a separate event listener to each child element, 
a single listener is provided to their parent element, and that parent listener handles the events of the child element using event bubbling.

Because in the browser, the event first happens on the target element, then goes to the parent element through bubbling. Taking advantage of this bubbling,
the child can be controlled from the parent.

# 5. What is the difference between preventDefault() and stopPropagation() methods?

ANS:preventDefault() is a JavaScript event method that stops the default behavior of an element in the browser, but does not stop event propagation.

stopPropagation() is an event method that stops the event from propagating or bubbling to the parent element.
