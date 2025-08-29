
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Anser to the question  Num 1 :
1. **Difference between{ getElementById, getElementsByClassName, and querySelector / querySelectorAll}**
  **" *getElementById* ":-This method used basically select single unique id in html file. 
  **" *getElementsByClassName* ":-This method selects all elements that have a specific class name In the HTML file.
  **" *querySelector* ":-Returns the first element when matches CSS selector.
  **" *querySelectorAll* ":-Returns NodeList  of all elements, that match the specified CSS selector.
### Anser to the question  Num 2 :
2. **How do you "create and insert a new element into the DOM"**
    **" *Create the element: & Insert* ":-


    const li = document.createElement('li'); *** CREATE ELEMENT**

    li.textContent = `${serviceName}`; *** defind variable name**
    historyList.appendChild(li);  *** Insert ELEMENT**

### Anser to the question  Num 3:
3. **What is **Event Bubbling** and how does it work?"**
    **" *Event Bubbling* :-   means An event function created by a child element moves up, which is called event bubbling. 
     **Html code:**

      <div id="parent">
      <button id="child">2 COPY</button>
      </div>

     **javascript code:**
        <script>
       document.getElementById('parent').addEventListener('click', function {
         alert('Parent clicked!');
        });

      document.getElementById('child').addEventListener('click', function {
        alert('Child clicked!');
     });
     </script>
### Anser to the question  Num 4:
4. **What is **Event Delegation** in JavaScript? Why is it useful"**
    **" *Event Delegation* :-There is way where we not add separate event to many children, but instead add one event to a parent and use bubbling.


    <ul id="nav">
      <li>coin</li>
      <li>like</li>
  
    </ul>

    <script>
      document.getElementById('nav').addEventListener('click', function(event) {
       if(event.target.tagName === 'li') {
           alert(event.target.innerText + " clicked");
        }
      });
    </script>
    ### Anser to the question  Num 5:
5. **What is the difference between **preventDefault() and stopPropagation()** methods?**
    **" *preventDefault()* :-Stop the default action of the browser.
    **" *stopPropagation()* :-stops event from bubbling. it means the event will no longer travel towards the parent.