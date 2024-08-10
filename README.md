# Bank of Flatiron

Overview

The Bank of Flatiron is a React-based web application that I built to manage and display recent bank transactions. With this application, I wanted to create a simple way for users to view, add, and filter transactions. The data is fetched from a local json-server instance and stored in the browser's local storage.

Features:

Display Transactions: I’ve set up a table to show all recent transactions.
Add Transactions: Users can submit new transactions using a form I created.
Filter Transactions: I’ve included a search bar that allows users to filter transactions by description.
Local Storage: Added transactions are stored in the browser’s local storage for convenience.
Project Structure
I organized the project into several components, each handling a specific part of the application:

1. src/App.js
Function: This is the main component of the application. It renders the SearchBar, TransactionForm, and TransactionsTable components.
Responsibilities:
Fetching transaction data from the local json-server.
Managing state for transactions and search terms.
Filtering transactions based on the user’s search input.

2. src/components/TransactionForm.js
Function: This component provides a form for users to input and submit new transactions.
Responsibilities:
Collecting user input for description, category, amount, and date.
Submitting the form data and saving it to local storage.
The date field defaults to the current date if not provided.

3. src/components/TransactionsTable.js
Function: This component renders a table displaying the list of transactions.
Responsibilities:
Displaying columns for description, category, amount, and date.
Mapping over the list of transactions and creating rows for each entry.

4. src/components/SearchBar.js
Function: This component provides a search bar for filtering transactions.
Responsibilities:
Updating the search term in the parent component (App.js).
Filtering transactions based on user input.