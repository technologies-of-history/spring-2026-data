var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample3",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 14,
      "color" : "rgb(206,206,206)",
      "shape" : "diamond",
      "text-opacity" : 1.0,
      "border-color" : "rgb(255,255,255)",
      "border-opacity" : 1.0,
      "height" : 20.0,
      "width" : 20.0,
      "border-width" : 8.0,
      "background-opacity" : 1.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "background-color" : "data(Gender)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[EdgeCount > 12]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 12]",
    "css" : {
      "font-size" : 30
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 12]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,12,10,30)"
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
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "none",
      "color" : "rgb(188,189,220)",
      "source-arrow-shape" : "none",
      "content" : "",
      "opacity" : 1.0,
      "target-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "font-size" : 10,
      "source-arrow-color" : "rgb(0,0,0)",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "width" : 2.0,
      "line-color" : "rgb(255,255,255)",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]