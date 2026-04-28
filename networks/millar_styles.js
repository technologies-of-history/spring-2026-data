var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "background-color" : "rgb(255,255,255)",
      "shape" : "ellipse",
      "font-size" : 8,
      "text-opacity" : 1.0,
      "height" : 45.0,
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "background-opacity" : 1.0,
      "border-color" : "rgb(145,145,145)",
      "color" : "rgb(51,153,255)",
      "border-opacity" : 1.0,
      "border-width" : 5.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "width" : 45.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[Gender = 'female']",
    "css" : {
      "color" : "rgb(203,24,29)"
    }
  }, {
    "selector" : "node[Gender = 'male']",
    "css" : {
      "color" : "rgb(12,44,132)"
    }
  }, {
    "selector" : "node[EdgeCount > 50]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[EdgeCount = 50]",
    "css" : {
      "font-size" : 62
    }
  }, {
    "selector" : "node[EdgeCount > 1][EdgeCount < 50]",
    "css" : {
      "font-size" : "mapData(EdgeCount,1,50,10,62)"
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
      "color" : "rgb(51,153,255)",
      "line-color" : "rgb(115,115,115)",
      "source-arrow-shape" : "none",
      "font-family" : "SansSerif",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(115,115,115)",
      "target-arrow-shape" : "triangle",
      "font-size" : 12,
      "width" : 5.0,
      "source-arrow-color" : "rgb(115,115,115)",
      "opacity" : 1.0,
      "line-style" : "solid",
      "text-opacity" : 1.0,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[Year = 1664]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1665]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1666]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1667]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1668]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1669]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1670]",
    "css" : {
      "line-color" : "rgb(215,48,31)",
      "target-arrow-color" : "rgb(215,48,31)",
      "source-arrow-color" : "rgb(215,48,31)"
    }
  }, {
    "selector" : "edge[Year = 1640]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1641]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1642]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1643]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1644]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1645]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1646]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1647]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1648]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1649]",
    "css" : {
      "line-color" : "rgb(161,217,155)",
      "target-arrow-color" : "rgb(161,217,155)",
      "source-arrow-color" : "rgb(161,217,155)"
    }
  }, {
    "selector" : "edge[Year = 1650]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1651]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1652]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1654]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1655]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1656]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1657]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1658]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1659]",
    "css" : {
      "line-color" : "rgb(8,88,158)",
      "target-arrow-color" : "rgb(8,88,158)",
      "source-arrow-color" : "rgb(8,88,158)"
    }
  }, {
    "selector" : "edge[Year = 1660]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1661]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1662]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge[Year = 1663]",
    "css" : {
      "line-color" : "rgb(255,247,188)",
      "target-arrow-color" : "rgb(255,247,188)",
      "source-arrow-color" : "rgb(255,247,188)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]