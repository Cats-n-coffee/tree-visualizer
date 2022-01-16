# Tree visualizer for React Projects

## Side notes

When using Formik `FieldArray` component, make sure to respect the naming for the props inside the rendered components (such as `name`).<br>
The example to follow is on their website: `` name={`propetyName.${index}.propertyOnItem`} ``.

## Contexts

This project contains 3 different contexts to share data accross components in a cleaner way:

- ThemeContext: for dark/light theme
- TreeContext: for operations to perform on the tree (insert, delete, edit, read)
- SelectedNodeContext: for edit and delete operations, this allowed to place the modals in the `App.tsx`, and avoid prop drilling (easiest way to have the modal spread accross the entire screen). This way, modals can be used by all the components when needed.
