# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket [Feature To Build: Ability for a Client to add Agent custom ID ]

Sub ticket 1 [Building UI to add custom Agent ID by client]
**Acceptance Criteria**
- Client should have new feature (an input field) to add/edit/delete custom IDs for each agent
- This feature should be also extended for existing agents selected previously by client.
- Client should be able to submit with a success button

**Implementation details**
- Frontend should have input field to accept/edit ID and API integration to validate ID (if duplicate exist).
- Frontend should warn if minimum length is not satisfied
- Frontend should submit on click submit button/enter
- Test cases to handle the same



Sub ticket 2 [Generate random ID]
**Acceptance Criteria**
- Platform should also help client to generate random ID if requested.
- It is not mandatory that client should to use custom ID, therefore platform should maintain the default behavior of mapping Agent ID with internal database ID

**Implementation details**
- Frontend should have a button to generate random ID and API integration to request new ID from backend.
- Frontend should have check warning message/area, if the agent ID submit by the client is duplicate and should be in sync with backend messages.
- `generateReport` should be modified so it should display new custom ID if it customID exist in the meta info. Else it should display the tableID
- Test cases to handle the same



Sub ticket 3 [Building Messages]
**Acceptance Criteria**
- Platform should warn the client if there is a duplicate custom ID once the client submits. Duplicate warning message should show the custom ID assigned against other agent.
- Error if Minimum length of the ID is not satisfied
- Platform should warn any xyz messages from API so Client would have clear understanding what is going on.

**Implementation details**
- Frontend should build UI to show success/error/waring
- Test cases to handle the same



Sub ticket 4 [Show new customer ID]
**Acceptance Criteria**
- PDF generated should contain the customID or tableID in place.

**Implementation details**
- `generateReport` should be modified so it should display new custom ID if it customID exist in the meta info. Else it should display the tableID
- Test cases to handle the same




Sub ticket 4 [QA Ticket]
...

Sub ticket 5 [Release Ticket]
...
