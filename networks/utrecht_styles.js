var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-width" : 5.0,
      "width" : 20.0,
      "text-opacity" : 1.0,
      "color" : "rgb(51,153,255)",
      "shape" : "rectangle",
      "background-color" : "rgb(255,255,255)",
      "background-opacity" : 1.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "height" : 20.0,
      "border-color" : "rgb(37,37,37)",
      "font-size" : 8,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "color" : "rgb(227,26,28)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "color" : "rgb(34,94,168)"
    }
  }, {
    "selector" : "node[EdgeCount > 276]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 276]",
    "css" : {
      "font-size" : 45
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 276]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,276,10,45)"
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
      "target-arrow-shape" : "triangle",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(150,150,150)",
      "content" : "",
      "width" : 2.0,
      "line-color" : "rgb(150,150,150)",
      "target-arrow-color" : "rgb(150,150,150)",
      "font-size" : 12,
      "text-opacity" : 1.0,
      "color" : "rgb(37,37,37)",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "line-style" : "solid",
      "opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]