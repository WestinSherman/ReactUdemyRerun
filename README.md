# ReactUdemyRerun
Mar/18th/2025:
    S_60(603), did 0 code.
    S_60(604), created a React Codesandbox.
    S_60(605), learned that Babel is what renders our JSX (Javascript Syntax Extension) from non legal Javascript to legal Javascript.
    S_60(606), learned that "App" should be the top level component of the entire application. This "App" component is a function.
    S_60(607), Colt just shows how to declare two components on the App file. Which I wouldn't do. I think your supposed to declare them seperately.
    S_61(608), We don't declare multiple components in the same file. Each Component should get its own file. The files show be named the same as the function/component. To export multiple functions at once, you wrap the function name with Curly Brackets({}).
    S_61(609), A component can only return a single element but the element can have many child elements.
    S_61(610), if you don't want any actual markup rendered for the partent element, you can just put <> </> as the parent element and JSX will be happy.
    S_61(611), you can put javascript inside of an hyper text markup language(HTML) if you wrap it in curly brackets({}).
    S_61(612), got to learn how to create a 6 sided die roller. I used ChatGPT to understand the Math.random function stuff.
    S_61(613), just got to see that you can move components into other components. Worked on the DiceRoll component.
    S_61(614), learned that you can put multiple names in the same classname attribute.
    S_61(615), I was actually able to figure out how to create the Random Pokemon renderer... With the help of ChatGPT.
    S_61(616), just a Uniform Recourse Loctaor for the previouse exercise.
    S_62(617), this is where Colt shows us how to run React on our local machine via Vite. Had to fix the naming of the files. Aciddentally put the actually guts of the file in a file named the same thing multiple time. It was a mess.
    S_62(618), just talks about how the "Creat React App" is old and slower than Vite.
    I don't do any code in this section other than Markdown.
    S_62(619), found out that .tsx is just has some additional stuff than jsx but they do mainly the same thing.
    S_62(620), Colt has us create and connect the css file to the jsx file, where he just puts the files in the same directory. I on the other hand, created two other directories and put the jsx file in the components directory and the css file in the styles directory. This will require me to connect the two file via import differently. I will have to specify where the files are reletive to eachother.
    S_63(621), here Colt shows that you can add a prop to the in the () after the name of the function. You connect them via the attribute. Just create a new attribute called anything you want. Props are function arguments.
    S_63(622), here Colt shows us more on Props which make it more dynamic. Added another attribute.
    S_63(623), here I learn that you can and how to set defaults for the attributes.
    So if you don't give one, the default will show up.
    S_63(624), the curly braces {} tell React that we want it to treat whatever is inbetween them as javascript. It is also know as the syntax to escape JSX. So if you want to put an object into escaped javascript then you would do this: 
    {{a:1, b:2}}.
    S_63(625), this is where Colt teaches how to put conditional logic into our output of a component. You want to always try and not unessisarily clutter up the code with empty elements.
    S_63(626), Colt just shows us how and where to install the React Developer Tools in chrome web store. This just makes it easior to see the components and the hierarchy of the components in the dev tools on chrome.