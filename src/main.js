/*
[
    {
      name: 'firstStep', // The name of the current step (the key used in the json template)
      path: 'firstStep', // Because the step is part of the main workflow, the path is simply the step name. If you have named the main workflow using the 'name' option, this path must looks like 'workflowName/firstStep'
      config: { // All the step's configuration is deported here
        label: 'first step of one template',
        validationStream: { isFooTrue: true, isBarTrue: true } // If there's some validationStream in the step's configuration, there are computed.
      },
      workflowConfig: { // All the workflow's configuration is deported here
        description: 'one template description',
        label: 'one template label',
        validationStream: { isFooTrue: true } // If there's some validationStream in the workflow's configuration, there are computed.
      }
    },
    {
      name: 'stepOne',
      path: 'supersubworkflow/stepOne', // this path shows that 'stepOne' is part of the 'supersubworkflow' sub-workflow
      config: { },
      workflowConfig: { }
    },
    {
      name: 'subsubStep',
      path: 'supersubworkflow/subsubworkflow/subsubStep', // this path shows that 'subsubStep' is part of the 'subsubworkflow' sub-workflow, itself a sub-workflow of the sub-workflow 'supersubworkflow'
      config: { },
      workflowConfig: {}
    }
  ]
*/

//The first object contains name, path, config and workflowConfig as keys. Name and path have strings as properties,
// while config and workflowConfig have objects as properties.

const postButton = document.getElementById("button");
let preJSON = [];

// I think most code will go in here, values taken from the input form. It would basically be one big copy of the workflow template.
function addObject(){
    let workflowObject = {
      name: document.getElementById("firstName").value,
      path: document.getElementById("middleName").value,
      config: document.getElementById("lastName").value
      };
    return workflowObject;
}

postButton.onclick = () => {
  preJSON.push(addObject());
  var stringifiedJSON = JSON.stringify(preJSON);
  console.log(preJSON);
  console.log(stringifiedJSON);


var para = document.createElement("p");
var node = document.createTextNode(stringifiedJSON);
para.appendChild(node);

var element = document.getElementById("json");
element.appendChild(para);
}


