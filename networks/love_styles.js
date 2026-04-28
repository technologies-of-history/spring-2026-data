var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "text-valign" : "center",
      "text-halign" : "center",
      "text-opacity" : 1.0,
      "font-size" : 8,
      "width" : 75.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "color" : "rgb(0,0,0)",
      "background-color" : "rgb(255,247,251)",
      "border-width" : 0.0,
      "border-color" : "rgb(204,204,204)",
      "shape" : "roundrectangle",
      "background-opacity" : 1.0,
      "border-opacity" : 1.0,
      "height" : 35.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[EdgeCount > 66]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 66]",
    "css" : {
      "font-size" : 75
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 66]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,66,15,75)"
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
    "selector" : "node[Gender = 'Female']",
    "css" : {
      "color" : "rgb(231,41,138)"
    }
  }, {
    "selector" : "node[Gender = 'Male']",
    "css" : {
      "color" : "rgb(34,94,168)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "target-arrow-shape" : "triangle",
      "opacity" : 1.0,
      "content" : "",
      "line-color" : "rgb(116,196,118)",
      "source-arrow-shape" : "none",
      "color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "width" : 2.0,
      "target-arrow-color" : "rgb(116,196,118)",
      "line-style" : "solid",
      "source-arrow-color" : "rgb(116,196,118)",
      "font-family" : "Dialog",
      "font-weight" : "normal",
      "font-size" : 10
    }
  }, {
    "selector" : "edge[Date = '1672-04-04T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(252,78,42)",
      "target-arrow-color" : "rgb(252,78,42)",
      "source-arrow-color" : "rgb(252,78,42)"
    }
  }, {
    "selector" : "edge[Date = '1667-03-23T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(255,237,160)",
      "target-arrow-color" : "rgb(255,237,160)",
      "source-arrow-color" : "rgb(255,237,160)"
    }
  }, {
    "selector" : "edge[Date = '1667-04-11T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(254,217,118)",
      "target-arrow-color" : "rgb(254,217,118)",
      "source-arrow-color" : "rgb(254,217,118)"
    }
  }, {
    "selector" : "edge[Date = '1649-06-03T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(5,112,176)",
      "target-arrow-color" : "rgb(5,112,176)",
      "source-arrow-color" : "rgb(5,112,176)"
    }
  }, {
    "selector" : "edge[Date = '1601-12-12T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(199,233,192)",
      "target-arrow-color" : "rgb(199,233,192)",
      "source-arrow-color" : "rgb(199,233,192)"
    }
  }, {
    "selector" : "edge[Date = '1685-10-01T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(227,26,28)",
      "target-arrow-color" : "rgb(227,26,28)",
      "source-arrow-color" : "rgb(227,26,28)"
    }
  }, {
    "selector" : "edge[Date = '1645-12-20T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(54,144,192)",
      "target-arrow-color" : "rgb(54,144,192)",
      "source-arrow-color" : "rgb(54,144,192)"
    }
  }, {
    "selector" : "edge[Date = '1668-06-30T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(254,178,76)",
      "target-arrow-color" : "rgb(254,178,76)",
      "source-arrow-color" : "rgb(254,178,76)"
    }
  }, {
    "selector" : "edge[Date = '1620-07-02T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(0,90,50)",
      "target-arrow-color" : "rgb(0,90,50)",
      "source-arrow-color" : "rgb(0,90,50)"
    }
  }, {
    "selector" : "edge[Date = '1620-06-18T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(65,171,93)",
      "target-arrow-color" : "rgb(65,171,93)",
      "source-arrow-color" : "rgb(65,171,93)"
    }
  }, {
    "selector" : "edge[Date = '1620-07-04T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(208,209,230)",
      "target-arrow-color" : "rgb(208,209,230)",
      "source-arrow-color" : "rgb(208,209,230)"
    }
  }, {
    "selector" : "edge[Date = '1608-02-02T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Date = '1667-02-20T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(255,255,204)",
      "target-arrow-color" : "rgb(255,255,204)",
      "source-arrow-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge[Date = '1620-06-25T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(35,139,69)",
      "target-arrow-color" : "rgb(35,139,69)",
      "source-arrow-color" : "rgb(35,139,69)"
    }
  }, {
    "selector" : "edge[Date = '1651-11-11T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(3,78,123)",
      "target-arrow-color" : "rgb(3,78,123)",
      "source-arrow-color" : "rgb(3,78,123)"
    }
  }, {
    "selector" : "edge[Date = '1636-01-03T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(166,189,219)",
      "target-arrow-color" : "rgb(166,189,219)",
      "source-arrow-color" : "rgb(166,189,219)"
    }
  }, {
    "selector" : "edge[Date = '1686-02-26T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(177,0,38)",
      "target-arrow-color" : "rgb(177,0,38)",
      "source-arrow-color" : "rgb(177,0,38)"
    }
  }, {
    "selector" : "edge[Date = '1620-06-11T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(116,196,118)",
      "target-arrow-color" : "rgb(116,196,118)",
      "source-arrow-color" : "rgb(116,196,118)"
    }
  }, {
    "selector" : "edge[Date = '1643-04-10T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(116,169,207)",
      "target-arrow-color" : "rgb(116,169,207)",
      "source-arrow-color" : "rgb(116,169,207)"
    }
  }, {
    "selector" : "edge[Date = '1671-09-26T00:00:00Z']",
    "css" : {
      "line-color" : "rgb(253,141,60)",
      "target-arrow-color" : "rgb(253,141,60)",
      "source-arrow-color" : "rgb(253,141,60)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]