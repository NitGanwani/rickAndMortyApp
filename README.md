# Rick and Morty Angular App

This Angular application integrates with the public API of Rick and Morty, allowing users to explore characters from the show. The app provides features such as browsing characters, searching for specific ones, and viewing details. It also includes functionality to edit character information (locally due to API limitations) and displays a summary table of the first 10 characters.

## Key Features:

- Browse and search characters from Rick and Morty.
- Edit character information (name, location, and status).
- View a summary table of the first 10 characters.
- Responsive design for seamless use on different devices.

## Main Technologies Used:

- Angular
- Angular Material
- RxJS
- TypeScript

## Dependencies:

- `@angular/animations`: Animation support for Angular components.
- `@angular/cdk`: Angular Component Development Kit for UI components and utilities.
- `@angular/material`: Material Design components for Angular applications.
- `rxjs`: Reactive Extensions library for JavaScript.
- `zone.js`: Execution context for asynchronous operations in Angular.

## Dev Dependencies:

- `@angular-devkit/build-angular`: Angular build tools for development.
- `@angular/cli`: Command-line interface for Angular development.
- `@types/jasmine`: TypeScript type definitions for Jasmine testing framework.
- `jasmine-core`: Jasmine testing framework for JavaScript.
- `karma`: Test runner for JavaScript.
- `typescript`: TypeScript compiler for transpiling TypeScript code.

## Angular Material Components Used:

- `MatAutocompleteModule`
- `MatButtonModule`
- `MatCardModule`
- `MatChipsModule`
- `MatDialogModule`
- `MatFormFieldModule`
- `MatGridListModule`
- `MatIconModule`
- `MatInputModule`
- `MatListModule`
- `MatProgressSpinnerModule`
- `MatSelectModule`
- `MatSidenavModule`
- `MatSnackBarModule`
- `MatToolbarModule`
- `MatTableModule`
- `MatPaginatorModule`

## Commands:

```shell
# Installation
npm install

# Start the development server
ng serve

# Build the production version
ng run build
```

## Local Development:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run `ng serve` to start the development server.
4. Access the app in your browser at `http://localhost:4200`.

## API Credentials:

- No API credentials are required. The app utilizes the public API of Rick and Morty.

## How to Use:

1. Browse characters: Navigate through the list of characters from Rick and Morty.
2. Search characters: Use the search box to find specific characters by name.
3. Edit character information: Click on a character card to edit their name, location, and status.
4. View summary table: Check out the summary table to see basic information about the first 10 characters.

## Deployment:

- The app is deployed on Vercel and can be accessed [here](https://rick-and-morty-app-up.vercel.app).

---
