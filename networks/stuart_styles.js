var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 8,
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "width" : 45.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "shape" : "ellipse",
      "border-width" : 5.0,
      "height" : 45.0,
      "background-color" : "rgb(255,255,255)",
      "color" : "rgb(37,37,37)",
      "border-color" : "rgb(145,145,145)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[EdgeCount > 31]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 31]",
    "css" : {
      "font-size" : 50
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 31]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,31,15,50)"
    }
  }, {
    "selector" : "node[EdgeCount = 1]",
    "css" : {
      "font-size" : 15
    }
  }, {
    "selector" : "node[EdgeCount < 1]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[Author_Gender = 'Female']",
    "css" : {
      "background-color" : "rgb(250,159,181)"
    }
  }, {
    "selector" : "node[Author_Gender = 'Male']",
    "css" : {
      "background-color" : "rgb(166,189,219)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(51,153,255)",
      "opacity" : 1.0,
      "source-arrow-color" : "rgb(204,204,204)",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(204,204,204)",
      "font-size" : 12,
      "line-color" : "rgb(204,204,204)",
      "source-arrow-shape" : "none",
      "width" : 5.0,
      "content" : "",
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