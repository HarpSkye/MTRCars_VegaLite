var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"description": "mtcars data visualization",
"data": {
    "url": "https://gist.githubusercontent.com/HarpSkye/63d6f21116a8e9fea8374983c81f7f02/raw/40c5da554c87632b0cd1d6dc62c91d5cf69e236c/mtcars.csv"
  }, 
  "autosize2": {"contains": "padding", "resize": true, "type": "fit"},
  "width": {"step":10, "for": "position"},
  "layer": [
  {"mark": "bar",
  "encoding": {
    "x": {"field": "model", "type": "nominal"},
    "y": {"field": "mpg", "type": "quantitative", "aggregate": "average"},
    "xOffset": {"field": "gear"},
    "color": {"field": "gear"}
  }},
  {"mark": "rule",
  "encoding": {
      "y": {"field": "mpg", "aggregate": "mean"},
    "size": {"value": 2},
    "color": {"field": "symbol"}
  }}]
}
vegaEmbed("#vis1", yourVlSpec, {renderer: 'svg'}).then(res => {
var view = res.view;
console.log(view.data('source_0'));
});

var qsecgear = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"description": "mtcars data visualization",
"data": {
    "url": "https://gist.githubusercontent.com/HarpSkye/63d6f21116a8e9fea8374983c81f7f02/raw/40c5da554c87632b0cd1d6dc62c91d5cf69e236c/mtcars.csv"
  }, 
  "autosize2": {"contains": "padding", "resize": true, "type": "fit"},
  "width": "container",
  "mark": "point",
  "encoding": {
  "x": {"field": "gear", "type": "nominal"},
  "y": {"field": "qsec", "type": "quantitative"}}
}
vegaEmbed("#vis2", qsecgear, {renderer: 'svg'}).then(res => {
var view = res.view;
console.log(view.data('source_0'));
});

var wtgear = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"description": "mtcars data visualization",
"data": {
    "url": "https://gist.githubusercontent.com/HarpSkye/63d6f21116a8e9fea8374983c81f7f02/raw/40c5da554c87632b0cd1d6dc62c91d5cf69e236c/mtcars.csv"
  }, 
  "autosize2": {"contains": "padding", "resize": true, "type": "fit"},
  "width": "container",

      "mark": {"type": "arc", "innerRadius": 20},
  "encoding": {
  "theta": {"field": "wt", "type": "quantitative"},
  "color": {"field": "gear", "type": "nominal"}}
}
vegaEmbed("#vis3", wtgear, {renderer: 'svg'}).then(res => {
var view = res.view;
console.log(view.data('source_0'));
});

var mpgdrat = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
"description": "mtcars data visualization",
"data": {
    "url": "https://gist.githubusercontent.com/HarpSkye/63d6f21116a8e9fea8374983c81f7f02/raw/40c5da554c87632b0cd1d6dc62c91d5cf69e236c/mtcars.csv"
  }, 
  "autosize2": {"contains": "padding", "resize": true, "type": "fit"},
        "width": "container",
  "mark": "circle",
  "encoding": {
      "x": {"field": "mpg", "type": "quantitative"},
    "y": {"field": "drat", "type": "quantitative"}
}}
vegaEmbed("#vis4", mpgdrat, {renderer: 'svg'}).then(res => {
var view = res.view;
console.log(view.data('source_0'));
});