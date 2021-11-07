# Notes

- devDependencies VS depencies
- eslint
  - Find a way to resolve the tab Vs. spaces (vsconde plugins/setting)

-  typescript
   -  tsconfig.json
      -  typeRoots
      -  declare vs export
         -  typeRoots
      -  baseUrl
   - avoid using `any`

- format
  - tennary
  ```ts
    return theme === 'light'
      ? setTheme('dark')
      : setTheme('light');

  ```
  - function inside of a function
  ```ts
      const toggleTheme = () => {
    	return theme === 'light'
        ? setTheme('dark')
        : setTheme('light');
    }
  ``
-  naming convention
  - values -> value
- remove `window`

-  Place the file where we use it

- main.scss
  - for shared style
  - for importing the third party lib's style at a centeralized place to remove style duplication
  - for variables used globally