# TmoDemo

This is just simple my simple implementation of adding Angular 6 customElement into AEM.

## Setup

You will need to setup apache in order to get this to work. Apache will be use to serve out all the client files into AEM through an external links. You might need to modify your npm build:element script to change your output-path to your apache server docroot, and modify the outputPath in postBuild.js script to your apache server docroot.

## AEM Setup

As of right now, I haven't modify the branch to handle the external link because everyone's apache docroot is different, but ultimately you will need to add an bundle.min.js link in your AEM page component and style.min.css or style.css in your AEM page component.

## Build


npm run build:element

To understand more on this command view the package.json file. It basically build the app/allowanceinfo component into custom element and then output that into js file, and the package command will run a node script that concat all the js file into a bundle.min.js and then push it to apache. 

