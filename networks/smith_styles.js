var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-opacity" : 1.0,
      "border-color" : "rgb(145,145,145)",
      "text-opacity" : 1.0,
      "height" : 45.0,
      "font-size" : 8,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "border-width" : 5.0,
      "shape" : "ellipse",
      "border-opacity" : 1.0,
      "width" : 45.0,
      "color" : "rgb(51,153,255)",
      "background-color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "background-color" : "rgb(29,145,192)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "background-color" : "rgb(215,48,31)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "line-color" : "rgb(204,204,204)",
      "opacity" : 1.0,
      "target-arrow-color" : "rgb(204,204,204)",
      "target-arrow-shape" : "triangle",
      "source-arrow-color" : "rgb(204,204,204)",
      "width" : 5.0,
      "line-style" : "solid",
      "text-opacity" : 1.0,
      "font-size" : 12,
      "source-arrow-shape" : "none",
      "color" : "rgb(51,153,255)",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]