## How to Download and Run this Project
Clone or download the project, cd into the project folder and then:

```sh
npm install
```

### Run the Project Locally

```sh
npm run dev
```

Then open a browser to http://localhost:5173/


### Developer Notes

I enjoyed this challenge! It was interesting to build a table, menu, and a modal without a CSS library like Material UI. I had limited time, but I managed to implement most of the design elements to my satisfaction. I was not able to use the Developer Mode in Figma like I do at work, so the spacing is not exact in all places. 

I do have a few of my “tickets” still open as I am out of time. 

1. The mobile modal layout is not finished
2. The secondary font needs to be imported and applied to specific elements
3. The mobile menu should be moved into a separate component
4. Elements like the button should be spearate components if they will be reused throughout a large application
5. The status icons should have different colors when the data has information about the status of each product

### NOTES FOR THE DESIGN TEAM

The design has only one mobile layout with a width of 390px, but the header elements are about 900px wide so I have placed the breakpoint at 925px. I would suggest a second mobile layout for devices between 390px and 925px.

There should be a “clear” button for the search field. For now, the user has to reload the page or manually clearn the search field to restore the full search results.
