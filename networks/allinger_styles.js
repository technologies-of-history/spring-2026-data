var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 8,
      "shape" : "ellipse",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "border-color" : "rgb(145,145,145)",
      "border-width" : 5.0,
      "border-opacity" : 1.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "width" : 45.0,
      "background-opacity" : 1.0,
      "text-opacity" : 1.0,
      "height" : 45.0,
      "background-color" : "rgb(255,255,255)",
      "color" : "rgb(51,153,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[EdgeCount > 27]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 27]",
    "css" : {
      "font-size" : 40
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 27]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,27,10,40)"
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
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "color" : "rgb(153,0,13)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "color" : "rgb(12,44,132)"
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
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(204,204,204)",
      "width" : 5.0,
      "source-arrow-shape" : "none",
      "opacity" : 1.0,
      "source-arrow-color" : "rgb(204,204,204)",
      "color" : "rgb(51,153,255)",
      "line-color" : "rgb(204,204,204)",
      "text-opacity" : 1.0,
      "target-arrow-shape" : "triangle",
      "line-style" : "solid",
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[Year = '1646']",
    "css" : {
      "line-color" : "rgb(29,145,192)",
      "target-arrow-color" : "rgb(29,145,192)",
      "source-arrow-color" : "rgb(29,145,192)"
    }
  }, {
    "selector" : "edge[Year = '1645']",
    "css" : {
      "line-color" : "rgb(35,139,69)",
      "target-arrow-color" : "rgb(35,139,69)",
      "source-arrow-color" : "rgb(35,139,69)"
    }
  }, {
    "selector" : "edge[Year = '1644']",
    "css" : {
      "line-color" : "rgb(35,139,69)",
      "target-arrow-color" : "rgb(35,139,69)",
      "source-arrow-color" : "rgb(35,139,69)"
    }
  }, {
    "selector" : "edge[Year = '1643']",
    "css" : {
      "line-color" : "rgb(35,139,69)",
      "target-arrow-color" : "rgb(35,139,69)",
      "source-arrow-color" : "rgb(35,139,69)"
    }
  }, {
    "selector" : "edge[Year = '1642']",
    "css" : {
      "line-color" : "rgb(35,139,69)",
      "target-arrow-color" : "rgb(35,139,69)",
      "source-arrow-color" : "rgb(35,139,69)"
    }
  }, {
    "selector" : "edge[Year = '1651']",
    "css" : {
      "line-color" : "rgb(174,1,126)",
      "target-arrow-color" : "rgb(174,1,126)",
      "source-arrow-color" : "rgb(174,1,126)"
    }
  }, {
    "selector" : "edge[Year = '1650']",
    "css" : {
      "line-color" : "rgb(174,1,126)",
      "target-arrow-color" : "rgb(174,1,126)",
      "source-arrow-color" : "rgb(174,1,126)"
    }
  }, {
    "selector" : "edge[Year = '1649']",
    "css" : {
      "line-color" : "rgb(54,144,192)",
      "target-arrow-color" : "rgb(54,144,192)",
      "source-arrow-color" : "rgb(54,144,192)"
    }
  }, {
    "selector" : "edge[Year = '1648']",
    "css" : {
      "line-color" : "rgb(54,144,192)",
      "target-arrow-color" : "rgb(54,144,192)",
      "source-arrow-color" : "rgb(54,144,192)"
    }
  }, {
    "selector" : "edge[Year = '1647']",
    "css" : {
      "line-color" : "rgb(29,145,192)",
      "target-arrow-color" : "rgb(29,145,192)",
      "source-arrow-color" : "rgb(29,145,192)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]