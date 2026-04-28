var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(255,255,255)",
      "font-size" : 8,
      "border-opacity" : 1.0,
      "height" : 45.0,
      "border-color" : "rgb(145,145,145)",
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "border-width" : 5.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 45.0,
      "color" : "rgb(37,37,37)",
      "background-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "background-color" : "rgb(215,48,31)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "background-color" : "rgb(103,169,207)"
    }
  }, {
    "selector" : "node[EdgeCount > 33]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 33]",
    "css" : {
      "font-size" : 30
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 33]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,33,10,30)"
    }
  }, {
    "selector" : "node[EdgeCount = 1]",
    "css" : {
      "font-size" : 10
    }
  }, {
    "selector" : "node[EdgeCount < 1]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(204,204,204)",
      "source-arrow-shape" : "none",
      "content" : "",
      "font-size" : 12,
      "color" : "rgb(51,153,255)",
      "width" : 5.0,
      "line-color" : "rgb(204,204,204)",
      "source-arrow-color" : "rgb(204,204,204)",
      "opacity" : 1.0,
      "line-style" : "solid",
      "text-opacity" : 1.0,
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]