# Grid Activation Game

## Overview
This is a simple React-based interactive grid game where users can activate boxes in a 3x3 matrix. Once all boxes are activated, they will start deactivating in the same order they were clicked.

## Features
- A **3x3 dynamic grid** for interaction.
- Users can **click to activate** boxes.
- Once all boxes are activated, they **deactivate automatically** in the order they were clicked.
- Ensures **clean state management** to prevent multiple activations of the same box.

## Installation

### Prerequisites
- Node.js installed on your system
- npm or yarn as the package manager

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd grid-activation-game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
├── src
│   ├── App.js          # Main component managing the grid logic
│   ├── Components
│   │   ├── Grid.js    # Grid component representing each cell
│   ├── App.css         # Styles for the project
│
├── README.md           # Documentation
├── package.json        # Project dependencies and scripts
```

## Code Explanation
### `App.js`
- Defines the **3x3 matrix** as a dynamic grid.
- **State (`order`)** tracks the order of activated cells.
- `activatedCells(index)`: Handles user clicks to activate cells.
- `deactivateCells()`: Handles automatic deactivation once all cells are filled.

### `Grid.js`
- Renders each grid cell.
- Accepts `filled`, `onClick`, and `isDisabled` as props.
- Dynamically applies CSS based on the activation state.

## Usage
- Click on a cell to activate it.
- Continue clicking until all cells are activated.
- Once all cells are filled, they will deactivate automatically in the order they were clicked.

## Styling
The game uses simple CSS styles defined in `App.css` to differentiate active and inactive cells.

## Future Enhancements
- Add animations for smoother transitions.
- Implement a **reset button** to restart the game.
- Extend the grid size dynamically.

## License
This project is open-source and available for modification.


