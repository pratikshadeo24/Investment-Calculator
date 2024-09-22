# InvestmentCalculator

## Project Overview

The **InvestmentCalculator** is a React-based application that allows users to input investment details, such as initial investment, annual contribution, expected return, and duration. The app then calculates and displays projected investment values and interest for each year.

## Components

### 1. Header
- Location: `src/components/Header.jsx`
- Displays the app’s header, including a logo and the title "Investment Calculator."

### 2. UserInput
- Location: `src/components/UserInput.jsx`
- Allows users to input their investment details such as:
  - Initial Investment
  - Annual Investment
  - Expected Return (as a percentage)
  - Duration (in years)
- Props:
  - `userInput`: An object containing the current values entered by the user.
  - `onChange`: A callback function triggered when user inputs change, used to update state in the `App` component.

### 3. Results
- Location: `src/components/Results.jsx`
- Displays the calculated investment values in a tabular format based on the user inputs. The table includes:
  - Year
  - Investment Value at the End of Each Year
  - Interest Earned in Each Year
  - Total Interest Accumulated
  - Total Invested Capital
- Props:
  - `input`: An object containing the user input values for calculations.

### 4. App
- Location: `src/App.jsx`
- The main component that manages the application state and ties everything together. 
  - Uses `useState` to manage user inputs (initial investment, annual investment, expected return, and duration).
  - Validates that the investment duration is at least 1 year.
  - Passes the input and state management function to child components.
  
## Utility Functions

### 1. calculateInvestmentResults
- Location: `src/util/investment.js`
- This function processes user input to compute the investment value, interest, and other financial data for each year of the investment.

### 2. formatter
- Location: `src/util/investment.js`
- Formats currency values for display in the results table.

## How to Install

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd InvestmentCalculator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## How to Use

1. Enter the following details in the input form:
   - Initial Investment: The amount you plan to invest initially.
   - Annual Investment: The amount you plan to invest each year.
   - Expected Return: The percentage return you expect on your investment.
   - Duration: The number of years for the investment.
   
2. If the duration is less than 1 year, an error message will be displayed.

3. Once all values are entered and valid, the application will display a table showing the following information:
   - Year-by-year investment value.
   - Yearly interest.
   - Total interest accrued.
   - Total invested capital.

## Example

For an initial investment of $1,000, an annual investment of $100,000, an expected return of 10%, and a duration of 5 years, the app will display the projected values for each year.
