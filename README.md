# meteor1.3react

Basic Meteor 1.3 with React using NPM

download and install npm packages:

```bash
npm install
```

## How to create

```bash
meteor create <projectname>
cd <projectname>
meteor update --release 1.3-modules-beta.2
echo {} > package.json
npm --save install react react-dom react-router history
```

Then place your client files in the clients folder.

###Notes
To use meteor data install the react-meteor-data package
```bash
meteor add react-meteor-data
```

In order to use above with es6 classes - look at the react-mixin package. However, this requires decorators which are not supported in meteor ecmascript at the moment so you'll have to edit the package to include them.
