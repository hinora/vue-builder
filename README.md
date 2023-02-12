# Vue component builder
## 1. How to add a component
- Step 1: Create a folder containing components in the folder `` src/components``
- Step 2: Create a main file for that component in the newly created folder, the newly created file must match the folder name, (the convention for naming the folder and the main component file is to always capitalize the first letter, write immediately without accents)
- Step 3: Create file ``Dev.vue`` in the newly created folder
## 2. Run developer mode to dev component just created
- Run ```npm run serve -- --c:ComponentName``` with ```ComponentName``` as the component you want to run developer
## 3. Build components
- Run ``npm run build``
- To ignore components that do not want to build. go to vue.config.js file. Add that component name to breakComponent . array
## 4. File Dev.vue
- import interface build or test files to support the developer component here. These import files will not be built when we build the component
- Example: Component is building using bootstrap. In developer mode we need to import bootstrap to create the interface. but we do not need to import bootstrap when building the product because the project already has bootstrap. To do this we will import bootstrap in the Dev component. Everything that is imported and linked in Dev will not be built into the product.
## 5. Use the component just built
- For example, we have a component named ``ComponentA``. After building to use it just write the following
```html
<div id="id">
<component-a></component-a>
</div>
<script>
new Vue({
el: "#id"
});
</script>
```
## 6. Attention
- The name of the component and the name of the folder containing the component must be named according to vue's standards. [reference](https://vuejs.org/v2/style-guide/)
- All files of the component under construction must be in its directory
- When installing additional components or external libraries, you need to check in packege.json to see if they are available to avoid version conflicts.
