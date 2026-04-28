var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "color" : "rgb(51,153,255)",
      "border-color" : "rgb(145,145,145)",
      "border-width" : 5.0,
      "width" : 45.0,
      "border-opacity" : 1.0,
      "background-opacity" : 1.0,
      "shape" : "ellipse",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "height" : 45.0,
      "font-size" : 8,
      "background-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "background-color" : "rgb(33,113,181)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "background-color" : "rgb(227,26,28)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 12,
      "opacity" : 1.0,
      "target-arrow-shape" : "triangle",
      "width" : 5.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "source-arrow-shape" : "none",
      "color" : "rgb(51,153,255)",
      "line-color" : "rgb(204,204,204)",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(204,204,204)",
      "source-arrow-color" : "rgb(204,204,204)",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]