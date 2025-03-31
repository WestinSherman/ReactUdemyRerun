# ReactUdemyRerun
Mar/18th/2025:
    **S_60(603)**, did 0 code.
    **S_60(604)**, created a React Codesandbox.
    **S_60(605)**, learned that Babel is what renders our JSX (Javascript Syntax Extension) from non legal Javascript to legal Javascript.
    **S_60(606)**, learned that "App" should be the top level component of the entire application. This "App" component is a function.
    **S_60(607)**, Colt just shows how to declare two components on the App file. Which I wouldn't do. I think your supposed to declare them seperately.
    **S_61(608)**, We don't declare multiple components in the same file. Each Component should get its own file. The files show be named the same as the function/component. To export multiple functions at once, you wrap the function name with Curly Brackets({}).
    **S_61(609)**, A component can only return a single element but the element can have many child elements.
    **S_61(610)**, if you don't want any actual markup rendered for the partent element, you can just put <> </> as the parent element and JSX will be happy.
    **S_61(611)**, you can put javascript inside of an hyper text markup language(HTML) if you wrap it in curly brackets({}).
    **S_61(612)**, got to learn how to create a 6 sided die roller. I used ChatGPT to understand the Math.random function stuff.
    **S_61(613)**, just got to see that you can move components into other components. Worked on the DiceRoll component.
    **S_61(614)**, learned that you can put multiple names in the same classname attribute.
    **S_61(615)**, I was actually able to figure out how to create the Random Pokemon renderer... With the help of ChatGPT.
    **S_61(616)**, just a Uniform Recourse Loctaor for the previouse exercise.
    **S_62(617)**, this is where Colt shows us how to run React on our local machine via Vite. Had to fix the naming of the files. Aciddentally put the actually guts of the file in a file named the same thing multiple time. It was a mess.
    **S_62(618)**, just talks about how the "Creat React App" is old and slower than Vite.
    I don't do any code in this section other than Markdown.
    **S_62(619)**, found out that .tsx is just has some additional stuff than jsx but they do mainly the same thing.
    **S_62(620)**, Colt has us create and connect the css file to the jsx file, where he just puts the files in the same directory. I on the other hand, created two other directories and put the jsx file in the components directory and the css file in the styles directory. This will require me to connect the two file via import differently. I will have to specify where the files are reletive to eachother.
    **S_63(621)**, here Colt shows that you can add a prop to the in the () after the name of the function. You connect them via the attribute. Just create a new attribute called anything you want. Props are function arguments.
    **S_63(622)**, here Colt shows us more on Props which make it more dynamic. Added another attribute.
    **S_63(623)**, here I learn that you can and how to set defaults for the attributes.
    So if you don't give one, the default will show up.
    **S_63(624)**, the curly braces {} tell React that we want it to treat whatever is inbetween them as javascript. It is also know as the syntax to escape JSX. So if you want to put an object into escaped javascript then you would do this: 
    {{a:1, b:2}}.
    **S_63(625)**, this is where Colt teaches how to put conditional logic into our output of a component. You want to always try and not unessisarily clutter up the code with empty elements.
    **S_63(626)**, Colt just shows us how and where to install the React Developer Tools in chrome web store. This just makes it easior to see the components and the hierarchy of the components in the dev tools on chrome.
    **S_63(627)**, Colt shows how to connect cascading style sheets again. For some reason we now do inline styling for dynamic styling with a provided javascript object. Kebab casing is when you put a Hyphen between words(first-second).
    Static styling goes in another file, dynamic styling goes inline or at lease on the same file(style attribute). First pair of curly braces escapes jsx/writing javascript, the second pair defines an object.
    **S_63(628)**, I don't feel like I abosorbed the information from this session. I think I was supposed to understand how the `.map` makes the `li` for each thing in an array.(Rendering multiple elements in a loop) = "React way".
    **S_63(629)**, here Colt shows us an assignment to create a slot machine. I was actually able to complete the exercise without finishing the video first.
    **S_64(630)**, created a ShoppingList component. I did manage to create it without watching the whole video which was nice. Had some trouble remembering how the ? : operator. Found out its called a ternary operator which is a short hand way of writting an if else statement in javascript. This is what ChatGPT gave me:
    `condition ? expressionIfTrue : expressionIfFalse;`.
    **S_64(631)**, here we address the missing key prop. This what Google dev tools gave me: hook.js:608 Each child in a list should have a unique "key" prop.
Check the render method of `ShoppingList`. I also didn't understand what the `items.map((i) key{i.id}`. I don't understand how that means that they all have id's now. KEY PROPS!!! Just following the rules of React. Its not neccesary.
    **S_64(632)**, here we are just going to move the `li` from the shopping component and create a new component with just the `li` part in it. Couldn't just copy and paste on this one. Had to rewrite a lot of stuff just to put the `li`'s in another component. The `...` (Spread operator) allows you to get everything from the props without actually typing everything out.
    **S_64(633)**, here we make a PropertyList component. I think I should go throught this session again just because I could not figure out how to do it without watching the video. I won't though... at least not yet.
    **S_64(634)**, this just had the data I needed to complete session 633.
    **S_64(635)**, this was just a short video showing how to remove an error about prop types but I either already done it so it didn'r show up or VS code has upgraded.. or something like that.
    **S_64(636)**, I chose to skip this session this time around just because I dont care.
    **S_65(637)**, this session is about event listeners. You have to create another function as a reference for it to know what to do when it is clicked. If you have `()` after a function name, the function will exicute immediately when the page loads.
    **S_65(638)**, Colt shows other event listeners. In React event listeners are camelcased. In Javascript they are just lowercased.
    **S_65(639)**, create a form component with event listeners. Learnt `preventDefault` for submitting without page refresh.
    **S_65(640)**, I couldn't figure out how to get the message to work. It would just say that it wasn't defined but I quadruple checked and there weren't any typos. I forgot to add my failed version to git to see if I could figure out what I did wrong when I compare it to the correct version.
    **S_66(641)**, were doing another clicker but with another component called Counter. Learning about React concept "State". If you have data change in a component, you need to use state or the page wont actually change/update.
    **S_66(642)**, IDK what happend...
    **S_66(643)**, IDK what happend...
    **S_66(644)**, this session is about how to use State in a component. In this video we just learn how to get it to work. `useState(0)`(React Hook) is a function built into React. Trying to get the view to update. `useState` returns an array. I also couldn't figure out what the difference is between variable and values because when I looked it up, they get described using eachothers names... basically saying they can be the same thing.
    **S_66(645)**,  making a Toggler component. Had to create another function but I had to put it inside the component(Nested function).
    **S_66(646)**, you can have multiple pieces of state in a component. Creating ToggleCounter component. So I basically duplicated the Toggler component and just added some const's and another `<p></p>` and a button to increment the toggle count.
    **S_66(647)**,  a video of how the rendering of the component function works and how the state and all that make the page rerendered every time the button is clicked.
    **S_66(648)**, an exercise involving state. Where there is a square made up of 25 smaller squares that randomize the background colors every time they are clicked. which requires the page to rerender. Creating a ColorBoxes component. I have created another directory called Testing-Grounds and will use it to try and figure out how to complete this exercise by playing around with it. I'll create another vite thing. Could not figure out how to do it on my own :(
    **S_66(649)**, The Solution to S_66(648). I couldn't figure out how to complete to exercise on my own or with rewatching the other videos, but I did try and I will be git committing before I restart and follow the tutorial. I seem to be having trouble doing it the way Colt is showing. So I will try and do the way I got it to work with ChatGPT. Well I can get Colts code to work, or mine. I guess I'll just completely restart the session.