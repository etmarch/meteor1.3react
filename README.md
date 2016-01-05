# meteor1.3react

Basic Meteor 1.3 with React using NPM

Usage: install npm packages & run meteor:

```bash
npm install
meteor
```

## How to create from scratch

```bash
meteor create <projectname>
cd <projectname>
meteor update --release 1.3-modules-beta.2
echo {} > package.json
npm --save install react react-dom react-router history
```

Then place your client files in the clients folder.

###Meteor Data
To use meteor data install the react-meteor-data package and the react-mixin package
```bash
meteor add react-meteor-data
npm --save install react-mixin
```

You can use the getMeteorData function after adding the following:

```javascript
import reactMixin from 'react-mixin';
... //Class definition
reactMixin(<classname>.prototype, ReactMeteorData);
```


In order to use above with es6 classes - look at the react-mixin package. However, this requires decorators which are not supported in meteor ecmascript at the moment so you'll have to edit the package to include them.
