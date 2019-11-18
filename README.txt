Goal of this task is to make fully functional web app that will create and store multiple different code snippets. 

Snippets can be created using simple wizard with four steps, previewed and stored for later use.

Mockup wireframes are provided so that the general flow can be understood, but this design should not be reflected in the final design, and the way how pages are styled is something that we will take into consideration as well.

This task should be implemented using a JavaScript framework.

Page breakdown:

1. MAIN PAGE

- Goal of the main page is to allow user to start snippet creation process via button: Create your own snippet, or to allow user to see all previous saved snippets. 

- Any of these snippets can be copied to clipboard so that they can be pasted into some other codebase.

- All of them also have the option to be deleted with Are you sure? confirmation dialog, and upon user confirmation, delete that specific snippets from the *database*. 

- All saved snippets should be stored in Local Storage.



2. Wizard PAGES

- Each wizard step should be routed with different URL. 

- Data should be preserved between steps and step in any direction should be possible 



Wizard should contain four steps:

- SELECT INPUT TYPE: this step will allow user to select what kind of input is to be created. The following input types should be covered:  type text, type checkbox, type radio or textarea.

- SELECT COLORS: this step will allow user to do some basic styling on the input previously selected. User should be able to choose different border, text or background color for the appropriate input type. 

- INSERT INPUT HEADLINE: this step will allow user to insert the headline/label that will go alongside the input selected in the previous steps.

- SELECT FONT: this step will allow user to choose what kind of font he wants to apply to the headline and the input selected in the previous steps.



NOTE: All steps are required , and one option must always be chosen for user to proceed to the next step.



3. PREVIEW PAGE

- This page will serve as the preview page for all the options that were selected in the previous steps.

- It should have two sections: code preview and rendered component preview.

- There should be two options , to go back and edit the current snippet or to save the changes. 

- On save, following snippet should be saved in the localstorage and user will be taken to the homepage so that flow is completed.



BONUS TASKS:

1. On snippet save , snippet should be uploaded to pastebin or github gists, so that user can access them online from these services. On the homepage every saved snippet should also have the link to the snippet saved in these services available beside the two buttons defined in the main task.

2. Find a way to preserve indent of the code once the snippet is saved to the localstorage. 

